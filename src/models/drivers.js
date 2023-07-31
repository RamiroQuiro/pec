import { Schema, model,models } from "mongoose";



const DriverSchema=new Schema({
    driver: {
        type:String,
        unique: true
    },
    complete:{
        type:Boolean,
        unique:true
    },
    
})


const Driver=models.Driver || model('Driver',DriverSchema)


export default Driver