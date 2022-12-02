
import React,{useState} from 'react'
import axios from "axios";

const Register = () => {
    const [data,setData] = useState({
        username:'',
        email:'',
        phoneno : "",
        password:'',
        confirmpassword:'',
        place : ''
  }) 
     const changeHandler = e =>{
           setData({...data,[e.target.name]:e.target.value})
        }
    const submitHandler = e =>{
        e.preventDefault();
        axios.post('http://localhost:6000/register',data).then(
            res => {alert(res.data);setData({
                username:'',
                email:'',
                phoneno : "",
                password:'',
                confirmpassword:'',
                place : ''
            })}
        )
    }



  return (
    <div>
      <center>
        <form onSubmit={submitHandler} >
            <h2>Register</h2>
            <input type='text'  onChange={changeHandler}  name = "username" placeholder='UserName..'/><br/>
            <input type='email'  onChange={changeHandler} name = "email" placeholder='Email..'/><br/>
            <input type='phoneno'   onChange={changeHandler} name = "phoneno" placeholder='Phoneno..'/><br/>
            <input type='password' onChange={changeHandler}  name = "password" placeholder='Password..'/><br/>
            <input type='password'  onChange={changeHandler} name = "confirmpassword" placeholder='confirmpassword..'/><br/>
            <input type='place'   onChange={changeHandler} name = "place" placeholder='place..'/><br/>
            <input type="submit" value="Register"/><br />
        </form>
      </center>
    </div>
  )
}

export default Register


























// import React,{useState} from 'react'
// import axios from 'axios';

// const Register = () => {
//     const [data,setData] = useState({
//         username:'',
//         email:'',
//         phoneno : "",
//         password:'',
//         confirmpassword:'',
//         place : ''
//     })
//     const changeHandler = e =>{
//         setData({...data,[e.target.name]:e.target.value})
//     }
//     const submitHandler = e =>{
//         e.preventDefault();
        // axios.post('http://localhost:6000/register',data).then(
        //     res => {alert(res.data);setData({
        //         username:'',
        //         email:'',
        //         phoneno : "",
        //         password:'',
        //         confirmpassword:'',
        //         place : ''
        //     })}
        // )

//     }
//     return (
//         <div>
//             <center>
//             <form onSubmit={submitHandler} autocomplete="off">
//                 <h3>Register</h3>
//                 <input type="text" onChange={changeHandler} name="username" placeholder="User Name" /><br />
//                 <input type="email" onChange={changeHandler} name="email" placeholder="Email" /><br />
//                 <input type="phoneno" onChange={changeHandler} name="phoneno" placeholder="PhoneNo" /><br />
//                 <input type="password" onChange={changeHandler} name="password" placeholder="Password" /><br />
//                 <input type="password" onChange={changeHandler} name="confirmpassword" placeholder="Confirm Password" /><br />
//                 <input type="place" onChange={changeHandler} name="place" placeholder="Place" /><br />
//                 <input type="submit" value="Register" /><br />
//             </form>
//             </center>
//         </div>
//     )
// }

// export default Register