import mongoose from "mongoose";


const {MONGODB_URI}=process.env;
if (!MONGODB_URI) {
    throw new Error("MONGODB_URI no esta definido")
}
export const connectDB =async()=>{
    try {
        const {connection}= await mongoose.connect(MONGODB_URI, {
            bufferCommands: false,
            maxIdleTimeMS: 30000,
          })
        if (connection.readyState==1) {
            // console.log('base de datos conectada')
            return Promise.resolve(true)
        }
    } catch (error) {
        console.log(`Error al conectar a la base de datos: ${error}`)
        return Promise.reject(error)
        
    }
        

}