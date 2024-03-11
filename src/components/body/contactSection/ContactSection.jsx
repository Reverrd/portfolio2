
import axios from 'axios'

import Validate from "./Validate"
import './contact.scss'

import { useCallback, useEffect, useState } from "react";

export default function ContactSection() {
  const [errors, setErrors] = useState({})
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [enquiry, setEnquiry] = useState(undefined)
  const [message, setMessage] = useState('')
  
  const [verified, setVerified] = useState(false);
  const [submitting, setSubmitting] = useState(false)
  // const [submitted, setSubmitted] = useState(false)
  
    
  const handleValidation = ()=>{
    const validationErrors = Validate({name, email, enquiry, message})
    setErrors(validationErrors);
    // return Object.keys(validationErrors).length === 0;
  }
  const allFieldsFilled = useCallback(()=>{
    return name && email && enquiry && message
  },[name,email,enquiry,message])
  useEffect(()=>{
    setVerified(allFieldsFilled());
  },[allFieldsFilled])
    

      const handleSubmit = (e)=>{
          e.preventDefault();
          if (!allFieldsFilled()) {
            return
          }
          setSubmitting(true)
          const data ={
            Name: name,
            Email: email,
            Enquiry: enquiry,
            Message: message
          }
          axios.post('https://sheet.best/api/sheets/87c6d307-6b33-4efd-892e-d873b2ca3760', data)
          .then((response)=>{
            console.log(response);
            if(response.ok) throw{
              
            }
            
            const isValid = handleValidation();
          
            if(isValid){
              console.log({name,email,enquiry,message})
              setVerified(true)}
              else{
                console.log({name,email,enquiry,message})
                setVerified(false)
              setName('');
            setEmail('');
            setEnquiry(undefined);
            setMessage('');
           
            setSubmitting(false)
              }
          })
          .catch((error)=>{
            console.log(error)
            setSubmitting(false)
          })
        }
  return (
    <div id="contact" className=" bg-indigo-900 h-auto text-white static top-10">
      <div id="contactWrapper" className="py-11 lg:px-14 xxs:px-9">
      <h1 className="font-bold text-2xl text-white">Contact Me</h1>
      
      <div id="formWrapper" className=" flex  pt-9 justify-center ">
      <form id='form' onSubmit={handleSubmit} className=" px-4 bg-white   lg:w-4/12 sm:w-9/12 xxs:w-full rounded-lg">
        <div className=" text-black flex flex-col pb-3 ">
        <label className='my-2' htmlFor="name">Name</label>
        <input
        className="px-1  bg-transparent border border-black  active:outline-none  rounded-md py-1 "
         autoComplete="off"
        type="text"
        name="name"
        onChange={(e)=>{setName(e.target.value)
        }}
        value={name} />
        {errors.name && (
          <div className="text-red-500">{errors.name}</div>
        )}
        </div>
        <div className="text-black flex flex-col pb-3">
        <label className='my-2' htmlFor="email">Email Address</label>
        <input
        className="px-1 bg-transparent border border-black rounded-md py-1 " 
        autoComplete="off"
        type="text"
        name="email"
        onChange={(e)=>setEmail(e.target.value)}
        value={email} />
        {errors.email && (
          <div className="text-red-500">{errors.email}</div>
        )}
        </div>
        <div className="text-black flex flex-col pb-3">
          <label className='my-2' htmlFor="enquiry">Type of enquiry</label>
          <select
          className="px-1  bg-transparent border border-black rounded-md py-1 " 
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
        <div className="text-black flex flex-col rounded-md pb-3">
          <label className='my-2' htmlFor="message">Your message</label>
          <textarea 
          className="border-black rounded-lg bg-transparent border px-1 py-1"
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
        
        
        <button type='submit' disabled={!verified || submitting   } className={`relative py-2 mb-3 border rounded-md w-10/12 ${!verified? 'bg-gray-400 text-slate-300':  'bg-purple-600 text-white'}`}>{submitting ? (<div className='loading'></div>) : "Submit"}</button>
        
        </div>
        {verified ? (
              <div className="text-green-500">Thank you for your application. I will get back to you shortly.</div>
            ):'' }
      </form>
      </div>
      </div>
    </div>
    
  )
}
