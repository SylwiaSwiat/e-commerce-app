import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Register.css'
const SignIn = () => {
const [login, setLogin] = useState('')
const [passLog, setPassLog] = useState('')
const [success, setSuccess] = useState(false)

const loginInvalid = <p>Invalid login</p>
const passInvalid = <p>Invalid password</p>
let pass = localStorage.getItem('Password').replace(/"/g, "");
let name = localStorage.getItem('Login').replace(/"/g, "");

const handleLogin=(e)=>{
e.preventDefault();


if(!login||!passLog){
    console.log('Empty');
} else if (passLog!==pass||login!==name){

console.log('No valid login or password')
} else{
    console.log('success!')
    setSuccess(true)
}
}
const handleCloseSuccess=()=>{
    setSuccess(false)
}
    return ( 
        <div className='container'>
            <form onSubmit={handleLogin} className='registerForm'>
                <h1>Sign In</h1>
                <div className='formBox'>
                <input type="text" 
                placeholder="Login" 
                name="login"
                className="formInput"
                onChange={e=> setLogin(e.target.value)}/>
                {login.length>=name.length&&login!==name? loginInvalid: null}
                <input type="password" 
                placeholder="Password" 
                name="password"
                className="formInput"
                onChange={e=>setPassLog(e.target.value)}/>
                {passLog.length>=pass.length&&passLog!==pass? passInvalid:null}
                <button className='registerBtn'>Sign In!</button>
                <Link
                                to='/register'
                                className='link'
                                >Create new account </Link>
                                </div>
            </form>
            <div id='login' className={`success ${success?'':'hide'}`}>
            <button onClick={handleCloseSuccess}  className='closeSuccess'> <i className="fas fa-times"></i></button>
            <p className="successInfo">Welcome,  {login}!</p>
            <img src="./images/login success.png" alt="login success" width={550}/>
           </div>
        </div>
     );
}
 
export default SignIn;