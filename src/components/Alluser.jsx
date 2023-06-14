import React, { useEffect, useState } from 'react';
import { alluser,deleteuser } from '../service/api';
import {AiFillDelete,AiFillEdit} from "react-icons/ai";
import { Link, NavLink } from 'react-router-dom';
 
const Alluser = () => {
  const [user,setuser]=useState([]);
  useEffect(()=>{
getalluser()
  },[])

  const getalluser=async()=>{
     let res=await alluser();
     setuser(res.data);
     console.log(res.data)
  }
  const deleteuserdetails=async(id)=>{
     await deleteuser(id)
     getalluser();

  }
  return (
    <div className='all'>
      <table>
        <tr>
          <th>name</th>
          <th>surname</th>
          <th>email</th>
          <th>phone</th>
          <th>edit</th>
          <th>delete</th>
        </tr>
        {
          user.map((i)=>(
            <tr key={i.id}>
              <td>{i.name}</td>
              <td>{i.surname}</td>
              <td>{i.email}</td>
              <td>{i.phone}</td>
              <td><Link to={`/edit/${i.id}`}><button><AiFillEdit/></button></Link></td>
              <td><button onClick={()=>deleteuserdetails(i.id)}><AiFillDelete/></button></td>
            </tr>
          ))
        }

      </table>
      <Link to={"/add"} style={{display:"grid",placeItems:'center'}}><button style={{padding:"10px",background:"black",color:'white',borderRadius:"5px"}}>add more</button></Link>

    </div>
  )
}

export default Alluser;