import React from 'react'

const Contact = () => {
  return (
    <div class="contact-section">
    <div className="contact-container">
    <div class="text-content">
        <h4>Contact Us</h4>
        <h2>Let's <span>Elevate Your Legal Practice</span></h2>
        <p>Ready to enhance your legal operations? Partner with LSW for top-tier legal support that helps you increase efficiency, reduce costs, and gain a competitive edge.</p>
    </div>
    <div class="form-container">
        <form>
            <div class="contactinput ">
                <input type="text" placeholder="Name*" required/>
                <input type="email" placeholder="Email*" required/>
            </div>
            <div class="contactinput ">
                <input type="text" placeholder="Country*" required/>
                <input type="tel" placeholder="Phone (optional)"/>
            </div>
            <textarea placeholder="Message*" required></textarea>
            <span class="msg-error error"></span>

            <button type="submit" class="submit-btn">Submit Now</button>
        </form>
    </div>
    </div>
   
</div>
  )
}

export default Contact
