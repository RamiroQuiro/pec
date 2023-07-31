import nodemailer from "nodemailer";


const{EMAIL,EMAIL_PASS}=process.env
export const transporter=nodemailer.createTransport({
  
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "3b7574b272492a",
          pass: "4d61131faa4224"
        }
});

export const mailOptions = {
    from: EMAIL
};