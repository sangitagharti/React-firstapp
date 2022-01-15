import React,{useState, useEffect, Fragment} from 'react';

function CreateUser(){

    const[name,setName] = useState("");
    const[age,setAge] = useState("");
    const[address,setAddress] = useState("");
     function makeUser(){
         let data={name,age,address}
         console.log(data)
         //alert('hello')
     }
    return(
        <div>
            <h1>Make a new user</h1>
            <input type="text" 
            onChange={(e) =>setName(e.target.value)}
            name="userName" value={name} />
            <br /><br />
            <input type="text"
            onChange={(e) =>setAge(e.target.value)}
            name="age" value={age}/>
            <br /><br />
            <input type="text"
            onChange={(e) =>setAddress(e.target.value)}
            name="address" value={address} />
            <br /><br />
            <button onClick={makeUser}>Create User</button>
        </div>
    )
}

export default CreateUser