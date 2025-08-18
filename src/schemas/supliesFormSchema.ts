import * as yup from "yup";

export const SupliesFormSchema = yup.object({
    name: yup 
        .string()
        .required("Escribe el nombre del suministro"),
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
        .required("Escribe la concentración del suministro"),
    formula: yup
        .string()
        .required("Escribe la formula del suministro")     
});