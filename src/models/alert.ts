/**
 * 
 * 
 */

interface Alert {
    id: string;
    innerText: string;
    classes: string;
    style: React.CSSProperties;
    onDismiss(): void;
}

export default Alert;