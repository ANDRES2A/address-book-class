import React from 'react';

const SearchBox = (props) =>(
<div className="well form-horizontal">
    <div className="form-group">
        <label className="col-md-4 control-label">First Name</label>
        <div className="col-md-6 inputGroupContainer">
        <div className="input-group">
            <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
            <input 
            type="text" 
            value={props.nombre}
            onChange={props.handleNameChange}
            placeholder="First Name" className="form-control" />
        </div>
        </div>
        </div>
    <div className="form-group">
        <label className="col-md-4 control-label" >Last Name</label>
        <div className="col-md-6 inputGroupContainer">
        <div className="input-group">
            <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
    <input 
    type="text" 
    value={props.apellido}
    onChange={props.handleLastNameChange}
    placeholder="Last Name" className="form-control"/>
        </div>
        </div>
        </div>
    <div className="form-group">
        <label className="col-md-4 control-label">Phone #</label>
        <div className="col-md-6 inputGroupContainer">
        <div className="input-group">
        <span className="input-group-addon"><i className="glyphicon glyphicon-earphone"></i></span>
    <input 
    type="text" 
    value={props.telefono}
    onChange={props.handlePhoneChange}
    placeholder="(845)555-1212" className="form-control"/>
        </div>
        </div>
        </div>
    <div className="form-group">
    <label className="col-md-5 control-label"></label>
     <div className="col-md-4">
        <button className="btn btn-primary" 
        onClick={() => props.saveContact({
            firstName: props.nombre,
            lastName: props.apellido,
            phone: props.telefono
        })}
        >Guardar</button>
     </div>
     </div>
</div>
);
export default SearchBox;