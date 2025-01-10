const express = require('express');
const QRCode = require('qrcode');
var qrRouter = express.Router();

qrRouter.post('/generate-qr', (req, res) => {
    const { amount, accountNumber, accountName, bankName, content } = req.body;

    if (!amount || !accountNumber || !accountName || !bankName || !content) {
        return res.status(400).send('Missing required fields');
    }

    const paymentInfo = `account=${accountNumber}&name=${accountName}&bank=${bankName}&amount=${amount}&content=${content}`;

    QRCode.toDataURL(paymentInfo, (err, url) => {
        if (err) {
            return res.status(500).send('Error generating QR code');
        }

        res.send({ qrCodeUrl: url });
    });
});

module.exports = qrRouter;