import React, { useRef } from 'react'
import { Button } from 'reactstrap'
import emailjs from '@emailjs/browser';
import '../../App.css';

function Contact() {
    const buttonStyle = {
        backgroundColor: "#c0311f",
        color: "#fffce5",
        padding: "1vh"
    }
    
    const form = useRef(); 

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_ygvj8ax', 'template_aqxijld', form.current, "cUa9qGG1WddA9kjzD")
            .then((result) => {
                console.log(result.text);
                alert(`Thank you for reaching out! Hannah will be in touch soon.`)
                form.current.reset(); 
            }, (error) => {
                console.log(error.text);
                alert(`Sorry, contact failed! ${error.text}`)
            });
        };
    
  return (
    <div>
        <section style={{padding: "3%", height: "80vh", display: "flex", flexDirection: "column", alignItems: "center"}}>
            <header style={{fontSize: "2em"}}>Connect with Hannah</header>

            <form ref={form} onSubmit={sendEmail} style={{display: "flex", flexDirection: "column", alignItems: "center", width:"75vw"}}>
                <label style={{padding: "1vh", width: "100vw"}}>Name or Business</label>
                <input type="text" name="from_name" required="true" style={{width: "50vw"}} />
                <label style={{padding: "1vh"}}>Email</label>
                <input type="email" name="from_email" required="true" style={{width: "50vw"}}/>
                <label style={{padding: "1vh"}}>What's your reason for reaching out?</label>
                <select type="select" name="select" required="true" style={{width: "50vw", arginBottom: "2vh", backgroundColor: "white"}}>
                    <option></option>
                    <option value={"Custom Creation"}>Custom Creation</option>
                    <option value={"Consultation"} >Consultation</option>
                    <option value={"General Question"}>General Question</option>
                    <option value={"Issue with Order"}>Issue with Order</option>
                    <option value={"Other"}>Other</option>
                </select>
                <label style={{padding: "1vh"}}>Message</label>
                <textarea name="message" style={{height: "15vh", width:"50vw", padding: "1vh"}} required="true"/>
                <label style={{padding: "1vh"}}>How did you hear about Hannah Made Pottery?</label>
                <select type="select" name="hear" style={{width: "50vw", marginBottom: "2vh", backgroundColor: "white"}}>
                    <option></option>
                    <option value={"Instagram"}>Instagram</option>
                    <option value={"Facebook"}>Facebook</option>
                    <option value={"Around Town"}>Around Town</option>
                    <option value={"Friend or Family Member"}>Friend or Family Member</option>
                    <option value={"Other"}>Other</option>
                </select>
                <br />
                <Button style={buttonStyle} className="button" type="submit" value="Send">Send Message</Button>
            </form>
        </section>
    </div>
    )
}

export default Contact