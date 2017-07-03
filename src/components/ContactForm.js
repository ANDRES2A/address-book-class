import React from 'react';

const SearchBox = (props) =>(
<div>
    <label value="jcndjc"></label>
    <input 
    type="text" 
    value={props.nombre}
    onChange={props.handleNameChange}/>
    <input 
    type="text" 
    value={props.apellido}
    onChange={props.handleLastNameChange}/>
    <input 
    type="text" 
    value={props.telefono}
    onChange={props.handlePhoneChange}/>
</div>
);
export default SearchBox;