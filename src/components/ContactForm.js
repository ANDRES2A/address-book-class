import React from 'react';

const SearchBox = (props) =>(
<div className="well form-horizontal">
    <div className="form-group">
        <label className="col-md-4 control-label">Name</label>
        <div className="col-md-6 inputGroupContainer">
        <div className="input-group">
            <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
            <input 
            type="text" 
            value={props.name}
            onChange={props.handleNameChange}
            placeholder="Name" className="form-control" />
        </div>
        </div>
        </div>
    <div className="form-group">
        <label className="col-md-4 control-label" >Age</label>
        <div className="col-md-6 inputGroupContainer">
        <div className="input-group">
            <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
    <input 
    type="text" 
    value={props.age}
    onChange={props.handleageChange}
    placeholder="Age" className="form-control"/>
        </div>
        </div>
        </div>
    <div className="form-group">
        <label className="col-md-4 control-label">Breed</label>
        <div className="col-md-6 inputGroupContainer">
        <div className="input-group">
        <span className="input-group-addon"><i className="glyphicon glyphicon-earbreed"></i></span>
    <input 
    type="text" 
    value={props.breed}
    onChange={props.handlebreedChange}
    placeholder="Breed" className="form-control"/>
        </div>
        </div>
        </div>
    <div className="form-group">
    <label className="col-md-5 control-label"></label>
     <div className="col-md-4">
        <button className="btn btn-primary" 
        onClick={() => props.saveContact({
            name: props.name,
            age: props.age,
            breed: props.breed
        })}
        >Guardar</button>
     </div>
     </div>
</div>
);
export default SearchBox;