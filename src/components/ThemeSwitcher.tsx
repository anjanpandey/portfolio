import React, { useContext } from "react";
import FlipSwitchComponent from "./UI/FlipSwitchComponent";


import { ThemeContext } from "../store/theme-context";


const ThemeSwitcher : React.FC = () => {

    const themeCtx = useContext(ThemeContext);

    const toggleDarkMode = () => {
        themeCtx.setSelectedTheme();
    } 
    
    return (
        <FlipSwitchComponent id='switch-dark-mode' label='🌑 Dark Mode' isChecked={themeCtx.isDarkTheme} onChange={toggleDarkMode} />
    );
}


export default ThemeSwitcher;
  