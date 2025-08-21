import * as yup from "yup";

export const SupliesFormSchema = yup.object({
    name: yup 
        .string()
        .required("Escribe el nombre del suministro")
        .min(3, "El nombre debe contener mímimo 3 caracteres")
        .max(50, "El nombre no debe exceder 50 caracteres"),
    category: yup 
        .string()
        .required("Escribe la categoria del suministro"),
    type: yup
        .string()
        .required("Escribe el tipo de suministro"),
    filing: yup
        .string()
        .required("Escribe la presentación del suministro"),
    concentration: yup
        .string()
        .required("Escribe la concentración del suministro")
        .matches(/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\s\-\.\%]+$/, "Ingresa una concentración válida"),
    form: yup
        .string()
        .required("Escribe la formula del suministro")     
});