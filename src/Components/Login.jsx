import React, { useState } from 'react';
import { signInWithEmailAndPassword    } from "firebase/auth";
import{auth} from '../Firebase'


const Login = () => {
    const[email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    
 
    const LogIn = ()=>{
        // console.log(email,password);
        signInWithEmailAndPassword   (auth,email,password)
        .then((response)=>{ console.log(response.user);})
        .catch((err)=>{console.log(err.message);})
        setEmail('');
        setPassword('')
    }
    return (
        <div>
            Email:
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <br />
            <br />
            Password:
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <br /><br />
            <button onClick={LogIn}>Log In</button>
        </div>
    )
}

export default Login