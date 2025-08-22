import { useState } from "react";
import { BtnBlueComponent } from "../components/general/BtnComponent";
import { Modal } from "../components/modals/Modal";
import RegisterSupliesForm from "../components/modals/RegisterSuppliesForm";
import SuppliesTable from "../components/tables/SuppliesTable";

export default function SuppliesList() {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <div className="flex flex-col min-h-screen justify-center items-center">

            <div className="w-1/5">
                <BtnBlueComponent
                    onClick={() => setOpen(true)}
                    text="Nuevo suministro"
                />
            </div>

            <SuppliesTable/>

            <Modal open={open} onClose={() => setOpen(false)}>
                <RegisterSupliesForm onClose={() => setOpen(false)}/>
            </Modal>

        </div>
    );
}