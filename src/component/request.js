import React, { useRef as UseRef, useState as UseSate } from 'react';
import emailjs from '@emailjs/browser'; 

function request() {
    const formRef = UseRef();
    const [done, setDone] = UseSate(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_k8eaft2', 'template_hiurimb', formRef.current, 'g37oRf3Y_-EYekRKF')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
  }
  return (
    <form ref={formRef} onSubmit={handleSubmit}>
        <div className=''>
            <div className="group">
                    <input type="text" name="name" required="required" />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label>Name</label>
            </div>
            <div className="group">
                <input type="tel" name='phoneno' required="required" />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>Phone No</label>
            </div>
            <div className="group">
                <input type="text" name='natchathiram' required="required" />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>Natchathiram</label>
            </div>       
            <div className="group">
                <textarea type="textarea" name='msg' rows="3" required="required"></textarea>
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>Reason</label>
            </div>
            <div className="btn-box">
                <button className="btn btn-submit" type="submit">submit</button>
            </div>
            <div className="clear">{done && <div style={{color: "#fd7e14", marginTop: "15px", fontSize: "18px", textAlign: "center"}}>Thank you </div>}</div>
        </div>
    </form>
  )
}

export default request