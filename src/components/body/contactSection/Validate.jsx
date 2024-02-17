


export default function Validate(values) {
    const errors = {};
    if(!values.name){ errors.name = 'Required'}
    else if (
    !values.name.length>15) {errors.name = 'Must be 15 characters or less'}

    if(!values.email){ errors.email = 'Required'}
    else if
    (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))  {errors.email = 'Invalid email address'}
    if(!values.message) {errors.message = 'Required'} else if (!values.message.length>15) {errors.message= 'must be 15 characters or more'}
    if(!values.enquiry){errors.enquiry = 'Please choose a Type'} 
      return errors 
}
