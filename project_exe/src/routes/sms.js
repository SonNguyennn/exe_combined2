const express = require('express');
const nodemailer = require('nodemailer');
var emailRouter = express.Router();

// Cấu hình Nodemailer (sử dụng Gmail SMTP trong ví dụ này)
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'dynamix1910@gmail.com', // Thay bằng email của bạn
        pass: 'xoap nqlw pzjs wrvz'   // Thay bằng mật khẩu của email hoặc mật khẩu ứng dụng nếu dùng Gmail
    }
});

emailRouter.get('/testemail', (req, res) => {
    res.send('Test email route is working!');
});

emailRouter.post('/send-email', (req, res) => {
    const { to, subject, body } = req.body; // Nhận địa chỉ email, chủ đề và nội dung từ body

    // Kiểm tra xem có thiếu thông tin không
    if (!to || !subject || !body) {
        return res.status(400).json({
            error: "Missing required fields: 'to', 'subject', or 'body'."
        });
    }

    // Cấu hình email
    const mailOptions = {
        from: 'dynamix1910@gmail.com',  // Địa chỉ email người gửi
        to: to,                       // Địa chỉ email người nhận
        subject: subject,             // Chủ đề email
        text: body                    // Nội dung email
    };

    // Gửi email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error sending email:', error);
            return res.status(500).json({
                error: 'Failed to send email',
                details: error
            });
        }
        console.log('Email sent: ' + info.response);
        res.send('Email sent successfully!');
    });
});

module.exports = emailRouter;
