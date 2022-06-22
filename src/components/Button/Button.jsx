import React from "react";

const Button = props => {

    return (
        <div>
            <input style={{backgroundColor:props.color}} className={props.classItem} type="button" value={props.children}/>
            
        </div>
    )


}
export default Button