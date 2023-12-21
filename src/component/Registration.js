import React,{useState , useEffect} from 'react'
import {useNavigate} from "react-router-dom";
const Registration = () => {

    const[name,setname] = useState("");
    const[email,setemail] = useState("");
    const[password,setpassword] = useState("");

    const navigator = useNavigate(); 
      
    useEffect(()=>{
      const auth = localStorage.getItem("users");
       if(auth){
           navigator("/");
      }
    })


    const Submit= async () =>{
        // console.log(name,email,password);

         let result = await fetch( "http://localhost:5000/register" ,{
              method:"Post",
              body: JSON.stringify({name,email,password}),
              headers:{
                "Content-type":"application/json"
              },
         });
           result  = await result.json();
           if(result){
            navigator("/");
           }
           localStorage.setItem("users",JSON.stringify(result));
         console.log(result);
    }

  return (
    <div className='ragistration'>
        <h1>Registration</h1>
        <input className='inputfild' type='text' value={name} onChange={(e)=>setname(e.target.value)} placeholder='Enter Name' />
        <input className='inputfild' type='text' value={email}  onChange={(e)=>setemail(e.target.value)} placeholder='Enter Email' />
        <input className='inputfild' type='password' value={password}  onChange={(e)=>setpassword(e.target.value)} placeholder='Enter Password'/>
        <button className='butn' onClick={Submit} type='button'>Signup</button>

    </div>
  )
}

export default Registration