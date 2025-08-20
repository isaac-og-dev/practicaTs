import { useState } from "react";
import { Modal } from "./Modal";

export default function RegisterSupliesForm() {
    const [open, setOpen] = useState<boolean>(false);
    const [form, setForm] = useState(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Datos enviados");
        setOpen(false);
    }

    return (
        <div>
            <h1>Hola</h1>
        </div>
    );
}