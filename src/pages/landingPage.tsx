import { useNavigate } from "react-router-dom";
import BtnBlueComponent from "../components/general/BtnBlueComponent";

export default function LandingPage() {
    const navigate = useNavigate();

    return (
        <div className="flex min-h-screen justify-center items-center">

            <div className="w-1/5">
                <BtnBlueComponent
                    onClick={()=> navigate("/login")}
                    text="Iniciar sesión"
                />

                <BtnBlueComponent
                    onClick={() => navigate("/supplies/register")}
                    text="Formulario"
                />

                <BtnBlueComponent
                    onClick={() => navigate("/supplies")}
                    text="Lista de suministros"
                />
            </div>


        </div>
    );
}