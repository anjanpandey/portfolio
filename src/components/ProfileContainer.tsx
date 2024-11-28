import {useContext, useEffect} from 'react';
import {ThemeContext} from "../store/theme-context";

// define props for the component 
type Props = {
    children: React.ReactNode
};


const ProfileContainer : React.FC<Props> = ({children}) => {
    
    const {primaryBackground, primaryColor} = useContext(ThemeContext);
    const profileTheme : React.CSSProperties = {backgroundColor: primaryBackground , color: primaryColor};

    // apply the theme to the whole body
    useEffect(() => {
        document.body.style.backgroundColor = primaryBackground;
        document.body.style.color = primaryColor;   
    });

    return (
        <div className="container-fluid" style={profileTheme}>
            {children}
        </div>
    );
}


export default ProfileContainer;