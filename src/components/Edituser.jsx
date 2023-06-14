
import React, { useEffect, useState } from "react";
import { getuser ,edituser} from "../service/api";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const initialvalue={
  name:"",
  surname:"",
  email:"",
  phone:""
}
const Edituser = () => {
  const [user,setuser]=useState(initialvalue);
  const {name,surname,email,phone}=user;
  const {id}=useParams();
  const navigate=useNavigate();

  useEffect(()=>{
getuserdetails()
  },[])

  const handleuser=(e)=>{
     setuser({...user,[e.target.name]:e.target.value});
     console.log(user)
  }
 const getuserdetails=async()=>{
     let res= await getuser(id)
     setuser(res.data)
 }
 const edituserdetails=async()=>{
      await edituser(user,id)
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
        value={name}
      />
      <input
        type="text"
        placeholder="enter your last name"
        name="surname"
        onChange={(e) => handleuser(e)}
        value={surname}
      />
      <input
        type="text"
        placeholder="enter your email"
        name="email"
        onChange={(e) => handleuser(e)}
        value={email}
      />
      <input
        type="text"
        placeholder="enter your phone"
        name="phone"
        onChange={(e) => handleuser(e)}
        value={phone}
      />
      <button onClick={()=>edituserdetails()}>edit</button>
    </div>
  );
};

export default Edituser;
