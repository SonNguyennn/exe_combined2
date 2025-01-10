import axios from "axios"
import { API_PATH } from "../config/api.config"


export const createPayment = (amount, bankCode, language, name, address, phone) => {
    axios.post(API_PATH.payment, {
        amount,
        bankCode,
        language,
        name,
        address,
        phone,
    })
        .then(response => {
            window.location.href = response.data;
        })
        .catch(error => {
            console.log(error);
        });
}

export const createQr = (accountNumber, accountName, bankName, amount, content) => {
    axios.post(API_PATH.qr, {
        accountNumber,
        accountName,
        bankName,
        amount,
        content,
    })
        .then(response => {
            console.log('QR Code URL:', response.data.qrCodeUrl);
            document.getElementById('qrCode').innerHTML = `<img src="${response.data.qrCodeUrl}" alt="QR Code">`;
        })
        .catch(error => {
            console.error('Error creating QR Code:', error);
        });
}