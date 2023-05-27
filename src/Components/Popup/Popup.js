/*
    parameters

    right / wrong
    text
    id
*/

import './Popup.css';
import React from 'react';
import {FaRegWindowClose} from 'react-icons/fa';

export default function Popup({data}){
    const id = 'pop' + data.id;
    const closeid = 'close' + data.id;
    setTimeout(function(){
        document.getElementById(closeid).addEventListener('click', function(){
            document.getElementById(id).style.display = 'none';
        }, false);
    }, 1000);
    
    return(
        <div className="popup" id={id}>
            <FaRegWindowClose id={closeid} className="popupClose"/> 
            <p className="popupText">{data.type}</p>
            <p className="popupText">{data.text}</p>
        </div>
    );
}

