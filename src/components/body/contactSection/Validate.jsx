


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
//https://docs.google.com/spreadsheets/d/18Kw1LvWT2N1pSZ4d6n5lgi5s-XtfbADjoWEd0lL3w0Y/edit?usp=sharing
//https://sheet.best/api/sheets/87c6d307-6b33-4efd-892e-d873b2ca3760