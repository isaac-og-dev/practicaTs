import { useForm } from "../../hooks/useForm";
import { SupliesFormSchema } from "../../schemas/supliesFormSchema";
import TextComponent from "../general/TextComponent";
import { BtnBlueComponent, BtnRedComponent } from "../general/BtnComponent";

interface SuppliesFormProps {
    onClose: () => void;
}

export default function RegisterSupliesForm({ onClose }: SuppliesFormProps) {
    const { formData,
        errors,
        handleChange,
        validateForm } = useForm({
            name: "",
            category: "",
            type: "",
            filing: "",
            concentration: "",
            form: ""
        }, SupliesFormSchema);

    const registerSupplies = async (e: React.FormEvent) => {
        e.preventDefault();
        const isvalid = await validateForm();
        if (!isvalid) return;
        console.log(formData);
    }

    return (
        <div className="w-144 p-2">
            <h1 className="font-bold text-3xl text-dark-blue text-center mb-4">Registro de suministros</h1>

            <div className="mb-2">
                <div className="flex gap-2">
                    <TextComponent
                        name="name"
                        value={formData.name}
                        label="Nombre del suministro"
                        placeholder="Ej: Paracetamol"
                        onChange={handleChange}
                        error={errors.name}
                    />

                    <TextComponent
                        name="category"
                        value={formData.category}
                        label="Categoria del suministro"
                        placeholder="Ej: Antibiótico"
                        onChange={handleChange}
                        error={errors.category}
                    />
                </div>

                <div className="flex gap-2">
                    <TextComponent
                        name="type"
                        value={formData.type}
                        label="Tipo de suministro"
                        placeholder="Ej: Medicamento"
                        onChange={handleChange}
                        error={errors.type}
                    />

                    <TextComponent
                        name="filing"
                        value={formData.filing}
                        label="Presentación del suministro"
                        placeholder="Ej: Tabletas"
                        onChange={handleChange}
                        error={errors.filing}
                    />
                </div>
                <div className="flex gap-2">
                    <TextComponent
                        name="concentration"
                        value={formData.concentration}
                        label="Concentración del producto"
                        placeholder="Ej: 500mg"
                        onChange={handleChange}
                        error={errors.concentration}
                    />

                    <TextComponent
                        name="formula"
                        value={formData.form}
                        label="Forma farmacéutica"
                        placeholder="Ej: Sólido"
                        onChange={handleChange}
                        error={errors.form}
                    />
                </div>
            </div>

            <div className="flex justify-end gap-2">
                <div>
                    <BtnRedComponent
                        text="Cancelar"
                        onClick={() => onClose()}
                    />
                </div>
                <div>
                    <BtnBlueComponent
                        text="Guardar"
                        onClick={(e) => registerSupplies(e)}
                    />
                </div>
            </div>

        </div>
    );
}