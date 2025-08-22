import { createContext, useState, useContext } from "react";

const ThemeContext = createContext();

export const useTheme = () => useContext(themeContext);

export const ThemeProvider = ({children}) => {
    const [persona, setPersona] = useState("kartik"); //Default State

    const togglePersona = () => {
        setPersona((prev) => (prev === "kartik" ?  "kore" : "kartik"));
    };

    return(
        <ThemeContext.Provider value ={{persona, togglePersona}}>
            {children}
        </ThemeContext.Provider>
    );
};