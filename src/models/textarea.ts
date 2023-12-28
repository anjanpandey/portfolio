/**
 * 
 * 
 */

interface Textarea {
    id: string;
    label: string;
    maxLength: number;
    minLength: number;
    value: string;
    placeholder: string;
    onChange(event: React.ChangeEvent<HTMLTextAreaElement>) : void; 
    style: React.CSSProperties;
}

export default Textarea;