"use client"
import { contextUser } from '@/context/contextUser';
import Flyer1 from './Flyer1';

export default function RenderFlyer() {
 
const flyerActivo=contextUser((state)=>state.flyerActivo)

    switch (flyerActivo) {
        case flyerActivo>0:
            return <Flyer1/>
            break;
    
        default:
            break;
    }
}
