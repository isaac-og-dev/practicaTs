import { useState } from "react";
import SupliesForm from "../../components/forms/supliesForm";

type SuppliesProps = {
    name: string,
    category: string,
    type: string,
    filing: string,
    concentration: string,
    formula: string
}

export default function RegisterSuplies() {
    const [supply, setSupply] = useState<SuppliesProps>({
        name: "",
        category: "",
        type: "",
        filing: "",
        concentration: "",
        formula: ""
    });


    const handleRegister = (values: SuppliesProps) => {
        setSupply(values);
        console.log("Datos a registrar:", supply);
    };


    return (
        <div className="justify-center items-center flex min-h-screen">
            <SupliesForm onRegister={handleRegister} />
        </div>
    );
}