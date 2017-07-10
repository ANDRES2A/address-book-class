import React from 'react';

const SearchBox = (props) =>(
<div className="form-group has-feedback">
    <label htmlFor="search" className="sr-only">Search</label>
    <input 
    className ="form-control"
    type="text" 
    value={props.value}
    onChange={props.onChange}
    placeholder="search"/>
    <span className="glyphicon glyphicon-search form-control-feedback"></span>
</div>
);
export default SearchBox;