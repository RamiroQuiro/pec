import nodemailer from "nodemailer";


const{EMAIL,EMAIL_PASS}=process.env
export const transporter=nodemailer.createTransport({

    service:'hotmail',
    auth:{
        user:EMAIL,
        pass:EMAIL_PASS
    }
})
export const mailOptions={
    from:EMAIL,
}