import { useForm } from "../../hooks/useForm";
import { loginSchema } from "../../schemas/loginSchema";
import TextComponent from "../general/TextComponent";

type suppliesValuesForm = {
        name: string,
        category: string,
        type: string,
        filing: string,
        concentration: string,
        formula: string
    }

export default function SupliesForm (){
    
    const {formData,
        errors,
        handleChange,
        validateForm} = useForm({
        name : "", 
        category: "",
        type: "",
        filling: "",
        concentration: "",
        formula: ""
    }, loginSchema);

    return(
        <div className="border rounded px-2 py-4">
            <TextComponent
                name="productName"
                value={formData.name}
                label="Nombre del producto"
                onChange={handleChange}
            />
        </div>     
    );
}