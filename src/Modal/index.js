import React from "react";
//Necesitamos ReacDOM para renderizar nuestro modal en el DOM
import ReactDOM from "react-dom";
import './Modal.css';

function Modal({children}){
    //ReactDOM tiene este metodo para crear portales
    return ReactDOM.createPortal(
        <div className="ModalBackground">
            {children}
        </div>,
        document.getElementById('modal')
    );
}

export { Modal };
