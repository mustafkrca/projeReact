import axios from "axios";
import React, { Fragment, useState } from 'react';

function Register(){
    const [name, setName] = useState("");
    const [Fiyat, setFiyat] = useState("");
    const [Age, setAge] = useState("");

    const handleNameChange = (value) => {setName(value)}
    const handleFiyatChange = (value) => {setFiyat(value)}
    const handleAgeChange = (value) => {setAge(value)}

    const handleSave = () => {
        const data = {
            Name : name,
            Fiyat : Fiyat,
            Age : Age,
        };

        const url = '';
        axios.post(url,data).then((result) => {
            alert('data saved');         
        }).catch((error)=>{
            alert(error);
        })
    }

    return(
        <Fragment>
        <div>Register</div>
        <label>Name</label>
        <input type="text" id="textName" placeholder='Enter Name' onChange={(e) => handleNameChange(e.target.value)}/><br></br>
        <label>Phone No</label>
        <input type="Phone No" id="textFiyat" placeholder='Enter Phone No' onChange={(e) => handleFiyatChange(e.target.value)}/><br></br>
        <label>Age</label>
        <input type="text" id="textAge" placeholder='Enter Age' onChange={(e) => handleAgeChange(e.target.value)}/><br></br>
        <button onClick={() => handleSave()}>Save</button>
        </Fragment>
    )
}

export default Register;