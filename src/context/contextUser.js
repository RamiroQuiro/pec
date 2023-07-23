import { create } from "zustand";

export const contextUser=create((set,get)=>({
    driver: "1",
}))