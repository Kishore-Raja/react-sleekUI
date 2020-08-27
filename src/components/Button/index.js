import React from "react";
import './Button.scss';
import Icon  from '../Icon'


function handleOnClick(event, actions) {
  console.log(event,actions);
};

export default function Button({ label, id, size, type, action, disabled, customClassName, inverse }) {
  return <button 
          id={id} 
          className={`sleek-button ${size} ${type} ${customClassName}`} 
          disabled={disabled}
          onClick={event => handleOnClick(event,"Hi")}>
           <Icon name="facebook"  size="20"/> {label}
         </button>;
}