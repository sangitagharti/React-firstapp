import React,{useState, useEffect} from 'react';


function Contact ()
{

    // //using hooks
    // const[name,setName] = useState("sangita");
    // const[age,setAge] = useState(26);

    // useEffect(() =>{

    //     console.warn('hello from hooks')
    // },[age]);

    //this goes in return
    // <h1>Name: {name}</h1>
    // <h1>Age:{age}</h1>

    // <button onClick={() =>{setName('sangita gharti')}}>Update Name</button>
    // <button onClick={() =>{setAge(30)}}>Update Age</button>

    // useEffect(() =>{

    //     console.log('check props',props.name)
    // })

    //let data='contact Us component';
    const [val,setVal]=useState('sangita');
    const test=(e)=>{
        console.log('heello',e.target.value)
        setVal(e.target.value)
    }
   
    return(
      <div>

          <h1>contact Us component</h1>
            <input type='text'value={val} onChange={test}/>
          <button onClick={()=>{alert(val)}}>click me</button>
       
      </div>
    )
}

export default Contact 