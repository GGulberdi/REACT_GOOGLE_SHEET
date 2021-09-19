import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { Button, Form, Table } from 'semantic-ui-react'
import env from "react-dotenv";
import Main from './components/Main'









const App = () => {
const [data,setData]=useState([]);
const [firstname,setFirtsname]=useState("");
const [lastname,setLastsname]=useState("");
const [address,setAddress]=useState("");
const [phone,setPhone]=useState("");
const [refresh,setRefresh]=useState([]);


console.log(firstname,lastname,address,phone)




const onSubmit= async(e)=>{
  e.preventDefault();

  try{
   const response = await fetch(process.env.REACT_APP_API_KEY,{
     method:'POST',
     headers:{
       'Content-Type':'application/json'
     },
     body:JSON.stringify([[firstname,lastname,address,phone]])
   }
   )
   await response.json();
   setFirtsname("")
   setLastsname("")
   setRefresh(data) 
  }catch(err){
    console.log(err)
  }
  
}

// useEffect(()=>{
//   axios.get(process.env.REACT_APP_API_KEY)
//   .then((data)=>{
//     console.log(data.data.data)
//     setData(data.data.data)
//   })
//   .catch((err)=>console.log(err))
// },[refresh])

  return(
    <div>

<Main/>

<h1 style={{padding:'5% 20% 1% 20%', textAlign:'center'}}>ORDER FORM</h1>
          <Form style={{padding:'1% 20%'}}>
    <Form.Field>
      <label>First Name</label>
      <input placeholder='Name' 
      onChange={(e)=> setFirtsname(e.target.value)}/>
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input placeholder='Last Name' 
      onChange={(e)=> setLastsname(e.target.value)}/>
    </Form.Field>
    <Form.Field>
      <label>Address</label>
      <input placeholder='Address'
      onChange={(e)=> setAddress(e.target.value)}/>
          </Form.Field>
    <Form.Field>
      <label>Phone number</label>
      <input placeholder='Phone number' 
      onChange={(e)=> setPhone(e.target.value)}/>
          </Form.Field>
    <Button type='submit' onClick={onSubmit}>Submit</Button>
  </Form>


  <Table style={{padding:'5% 20%'}}>
    <Table.Header >
      <Table.Row>
      <Table.HeaderCell  style={{backgroundColor: 'yellow'}}>Number</Table.HeaderCell>
       <Table.HeaderCell  style={{backgroundColor: 'yellow'}}>First Name</Table.HeaderCell>
        <Table.HeaderCell  style={{backgroundColor: 'yellow'}}>Last Name</Table.HeaderCell>
        <Table.HeaderCell  style={{backgroundColor: 'yellow'}}>Address</Table.HeaderCell>
        <Table.HeaderCell style={{backgroundColor: 'yellow'}}>Phone </Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
        {data.map((item)=>
        (
      <Table.Row key={item.row_id}>
        <Table.Cell>{item.row_id+1}</Table.Cell>
        <Table.Cell>{item.firstname}</Table.Cell>
        <Table.Cell>{item.lastname}</Table.Cell>
        <Table.Cell>{item.address}</Table.Cell>
        <Table.Cell>{item.phone}</Table.Cell>
        </Table.Row>
        ))}
      </Table.Body>
  </Table>
</div>
  )
}


export default App;