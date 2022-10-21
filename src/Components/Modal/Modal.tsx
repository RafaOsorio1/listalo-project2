import ReactDOM from "react-dom";
import { children } from "../../Context/Interfaces";
import "../../Styles/Styles.css"

export const Modal = ({children}: children ) =>{
    return ReactDOM.createPortal(
        <div>
            {children}
        </div>,
        document.getElementById("modal") as HTMLElement)
} 
