import React, { useState } from 'react'


const SignUpForm = () => {

    const [email, setEmail] = useState('')
    const [password,  setPassword] = useState('')

    const [message, setMessage] = useState('')

    const handleSubmit = async () => {
        console.log("handle submit");
    }
  return (
    <div className='flex flex-col gap-4 bg-gray-400 p-4'>
        <input type='text' value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>

        <button onClick={handleSubmit}>Sign Up</button>

        <p>{message}</p>
    </div>
  );
};

export default SignUpForm