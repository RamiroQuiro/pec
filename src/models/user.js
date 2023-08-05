import { Schema, model,models } from "mongoose";



const UserSchema=new Schema({
    email: {
        type:String,
        required:[true,"Email es requerido"],
        unique: true
    },
    password: {
        type: String,
        select: false ,//para que no -e devuelva en el objeto de la coleccion.
        require:[true,'El Password es requerido'],
    },
    fullName:{
        type:String,
        require:[true,'El nombre completo es requerido'],
        maxLength:[25,'Maximo 25 Caracteres']
    },
    status:{
        type:String,
        default:'UNVERIFIED'
    },
    sessionPaid:{
            type:String,
            default:'0'
    }

})


const User=models.User || model('User',UserSchema)


export default User