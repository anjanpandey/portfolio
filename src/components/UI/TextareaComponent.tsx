import {useContext} from 'react';
import Textarea from "../../models/textarea";

import {ThemeContext} from '../../store/theme-context';


const TextareaComponent: React.FC<Textarea> = (props) => {

    const {primaryBackground, primaryColor} = useContext(ThemeContext);

    return (
        <div className="form-floating m-1">
            <textarea id={props.id} 
               minLength={props.minLength}
               maxLength={props.maxLength}
               value={props.value} 
               placeholder={props.placeholder} 
               className="form-control"
               onChange={props.onChange}
               style={{...props.style, backgroundColor: primaryBackground, color: primaryColor}}
        />
        <label htmlFor={props.id}>{props.label}</label>
    </div>  
    );
}


export default TextareaComponent;