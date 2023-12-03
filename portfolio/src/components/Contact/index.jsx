import "./index.scss"
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters"
import {useState } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";


const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm("service_vt0r7bq", "template_502m4ii", form.current, "gJOxd-XEQ45FfRcQn")
        .then((result) => {
            alert('Message successfully sent!');
            window.location.reload(false);
        }, (error) => {
            alert('Failed to send the message, please try again')
        });
      };
   return(
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters 
                        letterClass={letterClass}
                        strArray = {['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                        idx={15} />
                    </h1>
                    <p>I'm seeking for a intern position and I'm also interested in
                    freelance opportunities. If you have a request please fill this out
                    and contact me.
                    </p>
                    <div className="contact-form">
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input type="text" name="name" placeholder="Name" required />
                                </li>
                                <li className="half">
                                    <input type="email" name="email" placeholder="E-Mail" required />
                                </li>
                                <li>
                                <input
                                    placeholder="Subject"
                                    type="text"
                                    name="subject"
                                    required
                                />
                                </li>
                                <li>
                                <textarea
                                    placeholder="Message"
                                    name="message"
                                    required
                                ></textarea>
                                </li>
                                <li>
                                <input type="submit" className="flat-button" value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>

            </div>
            <Loader type="line-scale-pulse-out" />

        </>
    )
}

export default Contact;