import { validateEmail } from "./validateInputs";

export const handleEmailChange = <T>(
  e: React.ChangeEvent<HTMLInputElement>,
  setState: React.Dispatch<React.SetStateAction<T>>,
  setError: React.Dispatch<React.SetStateAction<string>>
) => {
  const { name, value } = e.target;
  const isValidEmail = validateEmail(value); 

  setState((prev) => ({
    ...prev,
    [name]: value,
  }));

  if (!isValidEmail) {
    setError("Por favor, ingresa un correo válido");
  } else {
    setError("");
  }
};