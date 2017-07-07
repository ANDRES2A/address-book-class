import React from 'react';
import ReactDOM from 'react-dom';

const Footer= (props) =>(
    <p className="text-center">{props.title}</p>
);

export default Footer;

//funcion pura (mismos parametros mismo return) no afecta a variables externas 
//funcion no pura depende de los datos externos
//
