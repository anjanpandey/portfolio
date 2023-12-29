import React, {useState} from "react";

type ThemeContextObj = {
    isDarkTheme: boolean;
    setSelectedTheme() : void;
    primaryBackground: string;
    primaryColor: string;
};

type Props = {
    children: React.ReactNode
};


export const ThemeContext = React.createContext<ThemeContextObj>({
    isDarkTheme: false,
    setSelectedTheme: () => {},
    primaryBackground: "#ffffff",
    primaryColor: "#222222"
});
 

const ThemeContextProvider : React.FC<Props> = ({children}) => {


    const currentTheme = sessionStorage.getItem("hggh-user-theme");
    let userPrefersDarkTheme : boolean = false;

    // this user has never visited
    // obtain their preference from the browser
    if(currentTheme === undefined ||
        currentTheme === null ||
        currentTheme === "") {
            const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
            if(prefersDarkScheme.matches) {
                userPrefersDarkTheme = true;
            }
    }
    else {
        // user has visited before
        // obtain from the session 
        userPrefersDarkTheme = currentTheme === "dark";
    }


    // automatically assign the state based on users' preferences 
    const [isDark, setTheme] = useState(userPrefersDarkTheme);

    const themeHandler = () => {
        setTheme(!isDark);
        setInSession(!isDark ? "dark" : "light");
    };

    // set in session 
    const setInSession = (theme : string) => {
        sessionStorage.removeItem("hggh-user-theme");
        sessionStorage.setItem("hggh-user-theme", theme);
    }

    const contextValue : ThemeContextObj = {
        isDarkTheme: isDark,
        setSelectedTheme: themeHandler,
        primaryBackground: isDark ? "#232931":"#ffffff",
        primaryColor: isDark ? "#eeeeee": "#222222"
    };

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    );
};


export default ThemeContextProvider;