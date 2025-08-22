import { useForm } from "../../hooks/useForm";
import { User } from "react-feather";
import { loginSchema } from "../../schemas/loginSchema";
import TextComponent from "../general/TextComponent";
import PasswordComponent from "../general/PasswordComponent";
import { BtnBlueComponent } from "../general/BtnComponent";

type LoginFormValues = {
    email: string;
    password: string;
};

type LoginProps = {
    onLogin: (values: LoginFormValues) => void;
};


export default function LoginForm({ onLogin }: LoginProps) {
    const {
        formData,
        errors,
        handleChange,
        validateForm
    } = useForm({ email: "", password: "" }, loginSchema);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        const isValid = await validateForm();
        if (!isValid) return;
        onLogin(formData);
    };

    return (
        <div className="bg-white shadow-lg px-8 py-10 text-center min-w-125 ">
            <h1 className="text-dark-blue text-3xl font-extrabold mb-12">AdoEvents</h1>
            <form onSubmit={handleLogin}>
                <TextComponent
                    label="Nombre de usuario"
                    name="email"
                    value={formData.email}
                    placeholder="Ingresar correo electrónico"
                    Icon={<User size={20} />}
                    onChange={handleChange}
                    error={errors.email} 
                />

                <PasswordComponent
                    label="Contraseña"
                    name="password"
                    value={formData.password}
                    placeholder="Ingresar contraseña"
                    onChange={handleChange}
                    error={errors.password} 
                />

                <BtnBlueComponent type="submit" text="Iniciar sesión" />
            </form>
        </div>
    );
}
