import React, { useState } from "react";
import { adduser} from "../service/api";
import { useNavigate } from "react-router-dom";

const initialvalue={
  name:"",
  surname:"",
  email:"",
  phone:""
}
const Adduser = () => {
  const [user,setuser]=useState(initialvalue);
  const navigate=useNavigate()
  const handleuser=(e)=>{
     setuser({...user,[e.target.name]:e.target.value});
     console.log(user)
  }
  const adduserdetails= async()=>{
       await adduser(user);
       navigate("/all")
  }
  return (
    <div className="add">
      <h1>register here</h1>
      <input
        type="text"
        placeholder="enter your first name"
        name="name"
        onChange={(e) => handleuser(e)}
      />
      <input
        type="text"
        placeholder="enter your last name"
        name="surname"
        onChange={(e) => handleuser(e)}
      />
      <input
        type="text"
        placeholder="enter your email"
        name="email"
        onChange={(e) => handleuser(e)}
      />
      <input
        type="text"
        placeholder="enter your phone"
        name="phone"
        onChange={(e) => handleuser(e)}
      />
      <button onClick={()=>adduserdetails()}>add</button>
    </div>
  );
};

export default Adduser;
