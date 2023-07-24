import { create } from "zustand";

export const contextUser=create((set,get)=>({
    user:{
        "driver1":{
            step1:false,
            step2:false,
            step3:false,
            step4:false,
        }
    },
    currentStep:1,
    flyerActivo:0,
    activarFlyer:(id)=>{
        set(state=>({...state,
            flyerActivo:id
            }))
    },
setCurrentStep:(number)=>{
        set(state=>({...state,
            currentStep:number
            }))
    },
activeStep:(obj)=>{
    let name=Object.keys(obj)
    let values=Object.values(obj)
        set(state=>({...state,
            user:{...state.user,[name]:values[0]}
            }))
    },
}))