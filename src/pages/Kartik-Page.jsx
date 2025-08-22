import {useContext} from 'react';
//import { useTheme } from "../context/ThemeContext";

export default function Home() {
    
    return(
    <div className='relative w-screen h-screen overflow-hidden'>
        <div className="bg-hero"></div>    
        <div className="absolute inset-0 bg-white opacity-20 z-0"></div>
        <div className="relative z-10 flex justify h-full px-8">
        <h1 className="text-5xl font-extrabold text-black">Ideate. Build. Deploy.</h1>
        </div>
    </div>    
    
    );
};