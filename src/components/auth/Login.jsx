import React, { useState } from 'react'

const Login = ({handleLogin}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e)=>{
        e.preventDefault()
        handleLogin(email,password)
        setEmail("")
        setPassword("")
    }

  return (
    <div className=' flex h-screen w-screen items-center justify-center'>
        <div className='text-white border-2 rounded-xl border-fuchsia-600 p-10'>
        <h1 class=" mb-4 text-3xl font-bold  leading-none text-gray-200
                   ">Login</h1>
            <form 
            onSubmit={(e)=>{
                submitHandler(e)
            }}
            className='flex flex-col items-center justify-center'
            >
                 
                <input 
                value={email}
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}
                required 
                className='text-white outline-none bg-transparent border-2 border-fuchsia-500 font-medium text-lg py-2 px-6 rounded-full placeholder:text-gray-400' type="email" placeholder='Enter your email' 
                />
               
                <input
                value={password}
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                required 
                className='outline-none bg-transparent border-2 border-fuchsia-500 font-medium text-lg py-2 px-6 rounded-full mt-3 placeholder:text-gray-400 text-white' type="password" placeholder='Enter password' />
                <button className='mt-7 text-white border-none outline-none hover:bg-[#7449a6]  font-semibold bg-[#8756bd] text-lg py-2 px-8 w-full rounded-full placeholder:text-white'>Log in</button>
            </form>
        </div>
    </div>
  )
}

export default Login