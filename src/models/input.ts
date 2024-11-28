/**
 * 
 * 
 */

interface Input {
    id: string;
    label: string;
    inputType: string;
    maxLength: number;
    minLength: number;
    value: string;
    placeholder: string;
    onChange(event: React.ChangeEvent<HTMLInputElement>) : void; 
}

export default Input;