import { useState } from "react";
import type { AnyObjectSchema } from "yup";

export function useForm<T extends Record<string, any>>(initialValues: T, schema: AnyObjectSchema) {
  const [formData, setFormData] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    schema
      .validateAt(name, { ...formData, [name]: value })
      .then(() => {
        setErrors((prev) => ({ ...prev, [name]: "" }));
      })
      .catch((err) => {
        setErrors((prev) => ({ ...prev, [name]: err.message }));
      });
  };

  const validateForm = async (): Promise<boolean> => {
    try {
      await schema.validate(formData, { abortEarly: false });
      setErrors({});
      return true;
    } catch (err: any) {
      const formErrors: Partial<Record<keyof T, string>> = {};
      err.inner.forEach((validationError: any) => {
        formErrors[validationError.path as keyof T] = validationError.message;
      });
      setErrors(formErrors);
      return false;
    }
  };

  return {
    formData,
    errors,
    handleChange,
    validateForm,
    setFormData,
  };
}
