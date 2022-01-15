import react from 'react';
import React from 'react'

class About extends react.Component
{
    //construtor is made befor component
    constructor(){
        super();
        // this.state={
           
        //     name:'sangita', 
        //     age:26
        // }

     

    }
    componentDidMount(){
        //console.warn('Did mount')
        console.warn('props',this.props.name)
    }
    componentDidUpdate(){
       // alert('name is updated')
       console.warn('updated',this.props.name)
    }


    //this goes in ren=turn
    // <h2>{this.state.name}</h2>
    // <h2>{this.state.age}</h2>
    // <button onClick={() =>{this.setState({name:'sangita gharti'})}}>Update State</button>


    render(){

        return(

            <div>

            <h1>About Us Component</h1>

            <h2>{this.props.name}</h2>
         
            </div>
        )
    }
}

export default About