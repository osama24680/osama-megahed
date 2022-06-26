import React, { useRef } from 'react'
import "./Form.css"
import emailjs from 'emailjs-com';
const Form = () => {

    const form = useRef();

    const sendEmail = (e) => {


        emailjs.sendForm('service_f0dhnn6', 'template_aac00ge', form.current, '1o7X5mK6MhxogzwGi')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <form className="form" ref={form} onSubmit={sendEmail}>
            <div className="form_input">
                <input type="text" placeholder="Your Name" name="name" />
            </div>
            <div className="form_input">
                <input type="email" placeholder="Your Email" name="email" />
            </div>
            <div className="form_input">
                <textarea row="10" placeholder='write a message' name="message" ></textarea>
            </div>
                <p style={{color:"red"}}>it desn't work for now</p>
            <button className="submit_button" type="submit">Submit</button>
        </form>
    )
}

export default Form
