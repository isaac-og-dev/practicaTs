import { useState } from "react";
import LoginForm from "../components/forms/LoginForm";

type CredentialsProps = {
  userName: string;
  password: string;
};

export default function Login() {
  const [credentials, setCredentials] = useState<CredentialsProps>({
    userName: "",
    password: "",
  });

  const login = (values: { email: string; password: string }) => {
    setCredentials({ userName: values.email, password: values.password });

    console.log("Formulario válido");
    console.log("Usuario:", credentials.userName);
    console.log("Contraseña:", credentials.password);
  };

  return (
    <div className="flex">
      <div className="w-2/5 triple-blue-gradient min-h-screen"></div>
      <div className="w-3/5 bg-light-gray min-h-screen flex items-center justify-center">
        <LoginForm onLogin={login} />
      </div>
    </div>
  );
}
