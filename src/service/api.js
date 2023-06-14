import axios from "axios";

const url=`http://localhost:3002/users`;

export const adduser= async(data)=>{
    try {
       return await axios.post(url,data)
    } catch (error) {
        console.log('error',error.message)
    }
}
export const alluser= async()=>{
    try {
       return await axios.get(url)
    } catch (error) {
        console.log('error',error.message)
    }
}
export const getuser= async(data)=>{
    try {
       return await axios.get(`${url}/${data}`)
    } catch (error) {
        console.log('error',error.message)
    }
}
export const edituser= async(data,id)=>{
    try {
       return await axios.put(`${url}/${id}`,data)
    } catch (error) {
        console.log('error',error.message)
    }
}
export const deleteuser= async(id)=>{
    try {
       return await axios.delete(`${url}/${id}`)
    } catch (error) {
        console.log('error',error.message)
    }
}