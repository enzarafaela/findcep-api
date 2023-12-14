import { checkErrors, riseError } from "./checkErrors";

export async function fetchAddressFromCEP (cep) {
    const result = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await result.json();
    
    try {
        checkErrors(cep, data);
        return data;
    } catch (error) {
        riseError(error);
    }
};
