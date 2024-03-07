


import Validate from "./Validate"


import { useState } from "react";

export default function ContactSection() {
  const [errors, setErrors] = useState({})
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [enquiry, setEnquiry] = useState(undefined)
  const [message, setMessage] = useState('')
  
  const [verified, setVerified] = useState(false);
  
  
      
  const handleValidation = ()=>{
    const validationErrors = Validate({name, email, enquiry, message})
    setErrors(validationErrors);
    // return Object.keys(validationErrors).length === 0;
  }

      const handleSubmit = (e)=>{
          e.preventDefault();
          const isValid = handleValidation();
          if(!isValid)  {setVerified(true) 
          
          setName('');
          setEmail('');
          setEnquiry(undefined);
          setMessage('');
          
    
          
      }};
        
        
   

  return (
    <div id="contact" className="bg-indigo-800 h-auto text-white static top-10">
      <div id="contactWrapper" className="py-11 px-14">
      <h1 className="font-bold text-2xl text-white">Contact Me</h1>
      
      <div id="formWrapper" className=" flex  pt-9 justify-center px-28">
      <form onSubmit={handleSubmit} className="w-11/12 lg:w-8/12 xs:w-screen">
        <div className="flex flex-col pb-3 ">
        <label htmlFor="name">Name</label>
        <input
        className="px-1 bg-transparent border rounded-md py-1 "
         
        type="text"
        name="name"
        onChange={(e)=>setName(e.target.value)}
        value={name} />
        {errors.name && (
          <div className="text-red-500">{errors.name}</div>
        )}
        </div>
        <div className="flex flex-col pb-3">
        <label htmlFor="email">Email Address</label>
        <input
        className="px-1 bg-transparent border rounded-md py-1 " 
        type="text"
        name="email"
        onChange={(e)=>setEmail(e.target.value)}
        value={email} />
        {errors.email && (
          <div className="text-red-500">{errors.email}</div>
        )}
        </div>
        <div className="flex flex-col pb-3">
          <label htmlFor="enquiry">Type of enquiry</label>
          <select
          className="px-1 bg-transparent border rounded-md py-1 " 
          name="enquiry" 
          id="enquiry"
          onChange={e=>setEnquiry(e.target.value)}
          value={enquiry}
          >
            <option className="text-black" value="freelance">Freelance project proposal</option>
            <option className="text-black" value="part-time">Part time Employment</option>
            <option className="text-black" value="full time">Full time Employment</option>
          </select>
          {errors.enquiry && (
            <div className="text-red-500">{errors.enquiry}</div>
          )}
        </div>
        <div className="flex flex-col rounded-md pb-3">
          <label htmlFor="message">Your message</label>
          <textarea 
          className="bg-transparent border px-1 py-1"
          name="message" 
          id="message"                
          cols="30" 
          rows="5"
          value={message}
          onChange={e=>setMessage(e.target.value)}/>
          {errors.message && (
            <div className="text-red-500">{errors.message}</div>
          )}
        </div>
        
        <div className="flex justify-center">
        <button className="py-1  bg-purple-600 border rounded-md w-full" type="submit">Submit</button>
        
        </div>
        {verified && (
              <div className="text-green-500">Thank you for your application. I will get back to you shortly.</div>
            )}
      </form>
      </div>
      </div>
    </div>
    
  )
}
