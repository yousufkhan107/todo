import React, { useState } from 'react';
import { createUserWithEmailAndPassword   } from "firebase/auth";
import{auth} from '../Firebase'


const SignUp = () => {
    const[email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    
 
    const signUp = ()=>{
        // console.log(email,password);
        createUserWithEmailAndPassword  (auth,email,password)
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
            <button onClick={signUp}>SignUp</button>
        </div>
    )
}

export default SignUp