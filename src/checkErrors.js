import Swal from "sweetalert2";

export const riseError = (error) => {
    Swal.fire({
        title: 'Erro',
        text: error,
        icon: 'error',
    });
};

export function checkErrors (cep, data = {}) {
    if (!cep) {
        throw new Error("Você precisa passar um CEP");
    }

    if (data.hasOwnProperty('erro') && data.erro) {
        throw new Error("CEP Inválido!");
    }
};



