import React from "react";
import { withStorageListener } from "./withStorageListener";

function ChangeAlert({show, toggleShow}){
    if(show){
        return (
            <div>
                <p>Hay cambios sin actualizar.</p>
                <button
                    onClick={toggleShow}
                >
                    Refresca la pagina
                </button>
            </div>
        );
    } else {
        return null;
    }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);
export { ChangeAlertWithStorageListener };