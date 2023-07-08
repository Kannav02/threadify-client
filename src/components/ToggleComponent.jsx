import { useState } from "react"


const ToggleComponent =({handleSubmit}) => {

    const [userDetails,setUserDetails]=useState({
        email:"",
        username:"",
        password:""
    })
    const handleChange=(event)=>{
        const {name,value}=event.target
        setUserDetails(prevValue=>{
            return {...prevValue,[name]:value}
        })
        console.log(userDetails)

    }

    const [toggleLogin,setLogin]=useState(true)
    const clickColor={backgroundColor:toggleLogin?"hsl(238, 40%, 52%)":"white",
  color:toggleLogin?"white":"black"}
    const notClickColor={backgroundColor:toggleLogin?"white":"hsl(238, 40%, 52%)",
    color:toggleLogin?"black":"white"}
  return (
<div className="w-3/4 h-3/4 bg-white rounded-lg">
        <div className='m-8 w-full'>
            <h1 className='font-bold text-4xl mt-24 justify-self-start '>Hey, Hello 👋</h1>
        </div>
  <div className='flex ml-8'>
  <button onClick={()=>{
    setLogin(true)
    setUserDetails({ email:"",
        username:"",
        password:""})
    }} className='text-sm mr-4 font-semibold border-0 rounded-full py-2 px-4 transition-colors duration-300' style={{...clickColor}}>Login</button>
  <button onClick={()=>{setLogin(false)
      setUserDetails({ email:"",
        username:"",
        password:""})}} className='text-sm font-semibold border-0 rounded-full py-2 px-4 transition-colors duration-300' style={{...notClickColor}}>Sign Up</button>
</div>
{toggleLogin?
<div>
  <div className='flex flex-col w-full p-4 ml-4'>
      <span>Username</span>
      <input name="username" className='p-2 w-3/4 border-2 border-black rounded-md mb-3' placeholder='Enter your username' value={userDetails.username} onChange={handleChange}/>
      <span>Password</span>
      <input name="password" className="p-2 w-3/4 border-2 border-black rounded-md" type="password" placeholder='Enter your password' value={userDetails.password} onChange={handleChange}/>
  </div>
  <span className='ml-8 hover:text-primary-moderateBlue cursor-pointer'>
      <a href>Forgot Your Password?</a>
  </span>
  <div className='mt-6'>
      <button className='ml-8 rounded-full border-2 border-black w-3/4 px-4 py-2 hover:bg-primary-moderateBlue hover:text-white hover:border-white transition-colors duration-300'>Login</button>
  </div>
</div>:<div>
  <div className='flex flex-col w-full p-4 ml-4'>
      <span>Email</span>
      <input name="email" className='p-2 w-3/4 border-2 border-black rounded-md mb-3' placeholder='Enter your Email' value={userDetails.email} onChange={handleChange}/>
      <span>Username</span>
      <input name="username" className="p-2 w-3/4 border-2 border-black rounded-md" placeholder='Enter your username' value={userDetails.username} onChange={handleChange}/>
      <span>Password</span>
      <input name="password" className="p-2 w-3/4 border-2 border-black rounded-md" type="password" placeholder='Enter your password' value={userDetails.password} onChange={handleChange}/>
  </div>
  <div className='mt-6'>
      <button className='ml-8 rounded-full border-2 border-black w-3/4 px-4 py-2 hover:bg-primary-moderateBlue hover:text-white hover:border-white transition-colors duration-300'>Sign Up</button>
  </div>
</div>}
</div>
    )
}

export default ToggleComponent