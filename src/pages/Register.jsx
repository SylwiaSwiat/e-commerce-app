import { useState } from "react";
import { Link } from "react-router-dom";
import './Register.css'
const Register = () => {
   
   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [match, setMatch] = useState('')
   const [errEmpty, setErrEmpty] = useState(false)
   const [flag, setFlag] = useState(true)
   const [success, setSuccess] = useState(false)
   

  const errNameLength = <p className="err">Your name must have at least 8 characters</p>
   const errNameSpace = <p className="err">Your name can not have empty strings</p>
   const errMatch = <p className="err">Passwords are not the same!</p>
const errEmail = <p className="err">Email is not valid</p>
const errPassLength = <p className="err">Your password must have at least 8 characters</p>
const errPass = <p className="err">Your password must have at least one uppercase, one lowercase,<br /> one digit and one special character</p>


const regExEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g
const regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/

const handleCloseSuccess=()=>{
setSuccess(false)
}

const checkForm=()=> {
    if(!name||!email||!password||!match){
        setErrEmpty(true)
        setTimeout(() => {
            setErrEmpty(false) 
        }, 4000)
        
    } else {
        setErrEmpty(false)
    }
}

 const click=()=>{
     if(name.length > 8 && regExEmail.test(email) && regExPass.test(password) && password===match){
        setFlag(false)
     }
        
     
    if(!flag){
        localStorage.setItem('Login', JSON.stringify(name))
        localStorage.setItem('Email', JSON.stringify(email))
        localStorage.setItem('Password', JSON.stringify(password))
    
       console.log('Saved in Local Storage')  
    setSuccess(true)
   }
}

const handleSubmit=(e)=>{
e.preventDefault();
checkForm();
click();
}
   
   
    return ( 
        <div className="container">
           <form onSubmit={handleSubmit} className='registerForm'>
            <h1>Register</h1>
            <div className="formBox">
            
                <label htmlFor="name">
                    <input type="text"
                    placeholder="Your name..."
                     className="formInput"
                     onChange={e=>setName(e.target.value)} />
                    {name.length < 8&&name.length!==0? errNameLength :null}
                    {name.includes(' ')? errNameSpace : null}
                </label>
                <label htmlFor="email">
                    <input type="text"
                    placeholder="Your email..."
                    className="formInput"
                    onChange={e=>setEmail(e.target.value)}/>
                    {!regExEmail.test(email)&&email?errEmail: null}
                </label>
                <label htmlFor="password">
                    <input type="password"
                    placeholder="Your password..."
                    className="formInput"
                    onChange={e=>setPassword(e.target.value)}/>
                    {password&&password.length < 8? errPassLength:null}
                    {password&&!regExPass.test(password)? errPass:null}
                </label>
                <label htmlFor="passwordConfirm">
                    <input type="password"
                    placeholder="Confirm Your password..."
                    className="formInput"
                    onChange={e=>setMatch(e.target.value)}/>
                    {password!==match&&password.length!==0&&match.length!==0? errMatch:null}
                </label>
               {errEmpty?  <p>What's the rush? Fill in all fields</p> : null}
                <button onClick={handleSubmit} className="registerBtn">Register</button>
                <p>Already have an account?<Link
                className="link"
                                to='/sign-in'
                                >Sign In </Link></p>
            </div>
           </form>
           <div className={`success ${success?'':'hide'}`}>
           <button onClick={handleCloseSuccess} className='closeSuccess'> <i className="fas fa-times"></i> </button>
            <img src="./images/new account.png" alt="" />
            <p className="successInfo">Account <br /> created!</p>
           </div>
           <div className="empty"></div>
        </div>
     );
}
 
export default Register;