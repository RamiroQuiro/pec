import nodemailer from "nodemailer";


const{EMAIL,EMAIL_PASS}=process.env
export const transporter=nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secure: false,
    auth: {
        user: EMAIL,
        pass: EMAIL_PASS
    },
    tls: {
        ciphers: 'SSLv3'
    }
});

export const mailOptions = {
    from: EMAIL
};