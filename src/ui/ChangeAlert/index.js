import React from "react";
import { useStorageListener } from "./useStorageListener";
import './ChangeAlert.css'

function ChangeAlert({ sincronize }) {
  const { show, toggleShow } = useStorageListener(sincronize);

  if(show) {
    return (
      <div className="ChangeAlert-bg">
        <div className="ChageAlert-container">
          <p>Hubo cambios</p>
          <p>¿Quieres sincronizar tus TODOS?</p>
          <button
            className="button-changeAlert"
            onClick={() => toggleShow(false)}
          >
            Claro que si
          </button>
        </div>
      </div>
    )
  } else {
    return null;
  }
}

export { ChangeAlert };