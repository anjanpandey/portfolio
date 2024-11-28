/**
 * 
 * 
 */

interface Flipswitch {
    id: string;
    label: string;
    isChecked: boolean;
    onChange(event: React.ChangeEvent<HTMLInputElement>) : void; 
}

export default Flipswitch;