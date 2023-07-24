import { create } from "zustand";

export const contextUser=create((set,get)=>({
    flyerActivo:0,
    activarFlyer:(id)=>{
        set(state=>({...state,
            flyerActivo:id
            }))
    }
}))