import React,{useState, useEffect, Fragment} from 'react';
import { NavItem, Table }  from 'react-bootstrap'

function Users (){

  //it is used for adding data in bootstrap table
    // const [user,setUser] = useState([

    //     {name:'ram',age:26,address:'ktm'},
    //     {name:'sam',age:27},
    //     {name:'dam',age:28},
    //     {name:'mam',age:29},
    // ])

    //for clling api

    const [user,setUser] = useState([])

    useEffect(() => {
      // const fetchData = async () => {
      //   const response = await fetch("http://dummy.restapiexample.com/api/v1/employees");
      //   const data = await response.json();
      //   console.log("responseData", data);
      //   setUser(data);
      // }
      // fetchData();
        fetch("http://dummy.restapiexample.com/api/v1/employees")
          .then((response) =>{response.json()           
            .then(result =>{
              console.log('result',result)
              setUser(result.data);
            })
          })
    },[])
    return(
        
      <Fragment>
      <h1>User LIsting is here</h1>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Salary</th>
            <th>Age</th>
          </tr>
          {
            user.map((item,index) =>
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.employee_name}</td>
                  <td>{item.employee_salary}</td>
                  <td>{item.employee_age}</td>
                  
                </tr>

            )
          }
        </thead>
        <tbody>



      {/* {
            user.map((item,index) => <tr key={index}>
            <td>{index}</td>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.address}</td>
          </tr>
            
            )
          
      } */}
        </tbody>
      </Table>
      </Fragment>
       
// {/* {
//     // user.map((item,i)=> 
//     // <div key={i}>{item.name}</div>

//     // )
//     user.length===4 ? <div>true</div>:<div>false</div> //conditions


// } */}
       
    )
}

export default Users