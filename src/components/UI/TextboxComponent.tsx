import {useContext} from 'react';
import Input from "../../models/input";

import {ThemeContext} from '../../store/theme-context';


const TextboxComponent: React.FC<Input> = (props) => {

    const {primaryBackground, primaryColor} = useContext(ThemeContext);

    return (
        <div className="form-floating m-1">
            <input id={props.id} 
                        min={props.minLength} 
                        max={props.maxLength} 
                        type={props.inputType} 
                        value={props.value} 
                        placeholder={props.placeholder} 
                        className="form-control"
                        onChange={props.onChange}
                        style={{backgroundColor: primaryBackground, color: primaryColor}}
                    />
            <label htmlFor={props.id}>{props.label}</label>
        </div>      
    );
}


export default TextboxComponent;