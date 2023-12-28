import React from "react";
import Flipswitch from "../../models/flipswitch";


const FlipSwitchComponent: React.FC<Flipswitch> = (props) => {
    return (
        /** here the flipswitch is not customizable, but you can create a different component depending on view and pass style as props. */
        <div className="form-check form-switch p-3 float-end">
            <input id={props.id}
                        type="checkbox" 
                        className="form-check-input"
                        role="switch"
                        checked={props.isChecked}
                        onChange={props.onChange}
                    />
            <label htmlFor={props.id} className="form-check-label">{props.label}</label>
        </div>      
    );
}


export default FlipSwitchComponent;