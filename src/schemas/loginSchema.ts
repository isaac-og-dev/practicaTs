import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup
    .string()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Correo electrónico no válido"
    )
    .required("EL correo es obligatorio"),
  password: yup
    .string()
    .required("La contraseña es obligatoria"),
});