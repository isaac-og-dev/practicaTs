import { useForm } from "../../hooks/useForm";
import { SupliesFormSchema } from "../../schemas/supliesFormSchema";
import TextComponent from "../general/TextComponent";
import BtnBlueComponent from "../general/BtnBlueComponent";

type suppliesValuesForm = {
    name: string,
    category: string,
    type: string,
    filing: string,
    concentration: string,
    formula: string
}

type registerProps = {
    onRegister: (values: suppliesValuesForm) => void;
}

export default function SupliesForm({ onRegister }: registerProps) {

    const { formData,
        setFormData,
        errors,
        handleChange,
        validateForm } = useForm({
            name: "",
            category: "",
            type: "",
            filing: "",
            concentration: "",
            formula: ""
        }, SupliesFormSchema);

    const registerSupplies = async (e: React.FormEvent) => {
        e.preventDefault();

        const isvalid = await validateForm();
        if (!isvalid) return;
        onRegister(formData);
        resetForm();
    }

    function resetForm() {
        setFormData({
            name: "",
            category: "",
            type: "",
            filing: "",
            concentration: "",
            formula: ""
        })
    }

    return (
        <div className="border rounded px-2 py-4">

                <TextComponent
                    name="name"
                    value={formData.name}
                    label="Nombre del suministro"
                    onChange={handleChange}
                    error={errors.name}
                />

                <TextComponent
                    name="category"
                    value={formData.category}
                    label="Categoria del suministro"
                    onChange={handleChange}
                    error={errors.category}
                />

                <TextComponent
                    name="type"
                    value={formData.type}
                    label="Tipo de suministro"
                    onChange={handleChange}
                    error={errors.type}
                />

                <TextComponent
                    name="filing"
                    value={formData.filing}
                    label="Presentación del suministro"
                    onChange={handleChange}
                    error={errors.filing}
                />

                <TextComponent
                    name="concentration"
                    value={formData.concentration}
                    label="Concentración del producto"
                    onChange={handleChange}
                    error={errors.concentration}
                />

                <TextComponent
                    name="formula"
                    value={formData.formula}
                    label="Formula del suministro"
                    onChange={handleChange}
                    error={errors.formula}
                />

                <BtnBlueComponent
                    onClick={() => resetForm()}
                    text="Cancelar"
                />

                <BtnBlueComponent
                    onClick={registerSupplies}
                    text="Agregar suministro"

                />

        </div>
    );
}