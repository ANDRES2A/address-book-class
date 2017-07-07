import React from 'react';

const SearchBox = (props) =>(
<div>
    <label value="Nombre:">Nombre:</label>
    <input 
    type="text" 
    value={props.nombre}
    onChange={props.handleNameChange}/>
    <br/>
    <label value="Nombre:">Apellido:</label>
    <input 
    type="text" 
    value={props.apellido}
    onChange={props.handleLastNameChange}/>
    <br/>
    <label value="Nombre:">Telefono:</label>
    <input 
    type="text" 
    value={props.telefono}
    onChange={props.handlePhoneChange}/>
    <div>
        <button className="btn btn-primary" 
        onClick={() => props.saveContact({
            firstName: props.nombre,
            lastName: props.apellido,
            phone: props.telefono
        })}
        >Guardar</button>
    </div>
</div>
);
export default SearchBox;