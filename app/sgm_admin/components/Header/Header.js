import react from "react";

export default function Header({children, styleHeader}){
    return (
        <header className={`w-full h-[70px] ${styleHeader ? styleHeader : null}`}>
            {children}
        </header>
    )
}