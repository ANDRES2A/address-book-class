import React from 'react';

const ContactList = (props) =>{
    const  pets = props.pets.map((pet) => (
        <tr key={pet._id}>
            <td>{pet.name}</td>
            <td>{pet.age}</td>
            <td>{pet.breed}</td>
        </tr>
    ));
return(
   <table className="table table-bordered">
    <thead>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Breed</th>
      </tr>
    </thead>
    <tbody>
        {pets}
    </tbody>
    </table>
);
}

export default ContactList;