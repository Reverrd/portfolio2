
// import { useState } from "react";
import Validate from "./Validate"
import { useFormik } from "formik"
// import Spinner from '@chakra-ui/react'
export default function ContactSection() {

  // const[isValid, setIsValid] = useState(false)

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
      enquiry: undefined,
    },
    validate: Validate,
    onSubmit: values =>{
      console.log(JSON.stringify(values,null,2));
      formik.resetForm()
    //   isValid ? <Spinner
    //   thickness='4px'
    //   speed='0.65s'
    //   emptyColor='gray.200'
    //   color='blue.500'
    //   size='xl'
    // /> : null

    }
  })
  return (
    <div id="contact" className="bg-indigo-800 h-auto text-white static top-10">
      <div id="contactWrapper" className="py-11 px-14">
      <h1 className="font-bold text-2xl text-white">Contact Me</h1>
      <div id="formWrapper" className=" flex  pt-9 justify-center px-28">
      <form onSubmit={formik.handleSubmit} className="w-11/12 lg:w-8/12 xs:w-screen">
        <div className="flex flex-col pb-3 ">
        <label htmlFor="name">Name</label>
        <input
        className="px-1 bg-transparent border rounded-md py-1 "
         
        type="text"
        name="name"
        onChange={formik.handleChange}
        value={formik.values.name} />
        {formik.errors.name && (
          <div className="text-red-500">{formik.errors.name}</div>
        )}
        </div>
        <div className="flex flex-col pb-3">
        <label htmlFor="email">Email Address</label>
        <input
        className="px-1 bg-transparent border rounded-md py-1 " 
        type="text"
        name="email"
        onChange={formik.handleChange}
        value={formik.values.email} />
        {formik.errors.email && (
          <div className="text-red-500">{formik.errors.email}</div>
        )}
        </div>
        <div className="flex flex-col pb-3">
          <label htmlFor="enquiry">Type of enquiry</label>
          <select
          className="px-1 bg-transparent border rounded-md py-1 " 
          name="enquiry" 
          id="enquiry"
          onChange={formik.handleChange}
          value={formik.values.enquiry}
          >
            <option className="text-black" value="freelance">Freelance project proposal</option>
            <option className="text-black" value="part-time">Part time Employment</option>
            <option className="text-black" value="full time">Full time Employment</option>
          </select>
          {formik.errors.email && (
            <div className="text-red-500">{formik.errors.enquiry}</div>
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
          value={formik.values.message}
          onChange={formik.handleChange}/>
          {formik.errors.message && (
            <div className="text-red-500">{formik.errors.message}</div>
          )}
        </div>
        <div className="flex justify-center">
        <button className="py-1  bg-purple-600 border rounded-md w-full" type="submit">Submit</button>
        </div>
      </form>
      </div>
      </div>
    </div>
    
  )
}
