import React from "react";

export default function Container({children, styleContainer}){
    return (
        <div className={`${styleContainer ? styleContainer : null}`}>
            {children}
        </div>
    )
}