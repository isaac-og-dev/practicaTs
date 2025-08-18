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

export default function SupliesForm() {

    const { formData,
        errors,
        handleChange,
        validateForm } = useForm({
            name: "",
            category: "",
            type: "",
            filling: "",
            concentration: "",
            formula: ""
        }, SupliesFormSchema);

    const registerSupplies = async (e: React.FormEvent) => {
        e.preventDefault();

        const isvalid = await validateForm();
        if (!isvalid) return;
        console.log();
    }

    return (
        <div className="border rounded px-2 py-4">
            <form onSubmit={registerSupplies}>
                
                <TextComponent
                    name="productName"
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
                    name="filling"
                    value={formData.filling}
                    label="Presentación del suministro"
                    onChange={handleChange}
                    error={errors.filling}
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
                    type="submit"
                    text="Agregar suministro"
                />

            </form>
        </div>
    );
}