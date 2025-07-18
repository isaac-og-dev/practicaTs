export const validateEmail = (email: string) : boolean => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

export const validateStrongPass = (password : string) : boolean => {
    const regex = /^(?=.*[A-Z])(?=.*\d)[\w!@#$%^&*()\-+=<>?/\\,.;:'"\[\]{}|~]{8,}$/;
    return regex.test(password);
}