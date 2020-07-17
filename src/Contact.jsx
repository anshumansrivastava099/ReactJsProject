import React from 'react'
import { useState } from 'react'

const Contact = ()=>{

    const [data,setData] = useState({
        fullname: '',
        phone: '',
        email: '',
        message: ''
    })

    const inputEvent = (e)=>{
        const {name,value} = e.target;
        setData((preVal)=>{
            return {
                ...preVal,
                [name]: value
            }
        })
    }

   const formSubmit = (e)=>{

    e.preventDefault();
    alert(`My name is ${data.fullname} and my phone number is ${data.phone} and my email address is ${data.email}. I have query that ${data.message}`)

   }



    return (
        <>
        <div className="my-5">
            <h1 className="text-center">Contact Us</h1>
        </div>
        <div className="container contact_div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                <form onSubmit={formSubmit}>
  <div className="form-group">
    <label for="exampleFormControlInput1">Full Name :-</label>
    <input type="text" className="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={inputEvent} placeholder="Enter your full name" />
  </div>
  <div className="form-group">
    <label for="exampleFormControlInput1">Mobile No. :-</label>
    <input type="number" className="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={inputEvent} placeholder="Enter your number" />
  </div>
  <div className="form-group">
    <label for="exampleFormControlInput1">Email address :-</label>
    <input type="email" className="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={inputEvent} placeholder="Email Address" />
  </div>
  
  
  <div className="form-group">
    <label for="exampleFormControlTextarea1">Message :-</label>
    <textarea className="form-control" name="message" value={data.message} onChange={inputEvent} id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <br />
  <div>  
      <button type="submit" className="btn btn-outline-primary">Submit Form</button>
  </div>

</form>
                </div>
            </div>
        </div>
        </>
    )

}

export default Contact;