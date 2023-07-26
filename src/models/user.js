import { Schema, model,models } from "mongoose";



const UserSchema=new Schema({
    email: {
        type:String,
        required:[true,"Email es requerido"],
        unique: true
    },
    passwordHash: {
        type: String,
        select: false ,//para que no se devuelva en el objeto de la coleccion.
        require:[true,'El Password es requerido'],
    },
    role:{type:Number},
    fullmame:{
        type:String,
        require:[true,'El nombre completo es requerido'],
        minLength:[5,"Minimo 5 caracteres"],
        maxLength:[25,'Maximo 25 Caracteres']
    }

})


const User=models.User || model('User',UserSchema)


export default User