import { useState } from "react";
import {BtnBlueComponent} from "../components/general/BtnComponent";
import { Modal } from "../components/modals/Modal";
import RegisterSupliesForm from "../components/modals/RegisterSuppliesForm";

export default function SuppliesList() {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <div className="flex min-h-screen justify-center items-center">

            <div className="w-1/5">
                <BtnBlueComponent
                    onClick={() => setOpen(true)}
                    text="Nuevo suministro"
                />
            </div>

            <Modal open={open} onClose={() => setOpen(false)}>
                <RegisterSupliesForm onClose={() => setOpen(false)}/>
            </Modal>

        </div>
    );
}