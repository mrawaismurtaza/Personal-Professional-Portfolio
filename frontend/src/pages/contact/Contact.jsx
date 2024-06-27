import React, { useState } from 'react';
import './Contact.css';
import Footer from '../../components/Footer/Footer';

function Contact() {
  const [message, setMessage] = useState('');

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  // Function to encode URL parameters
  const encodeMailtoParams = (params) => {
    return encodeURIComponent(params).replace(/%20/g, '+');
  };

  // Construct the mailto link
  const mailtoLink = `mailto:mrawaismurtaza@gmail.com?subject=${encodeMailtoParams('Your Subject')}&body=${encodeMailtoParams(message)}`;

  return (
    <div className='contact-footer'>
      <div className="Contact">
        <div className="Title-Contact">
          <p>C<span className='sub-title'>ontac</span>t</p>
        </div>
        <div className="Input-Fields">
          <input type="text" placeholder='Awais' readOnly/>
          <input type="text" placeholder='mrawaismurtaza@gmail.com' readOnly/>
          <textarea 
            name="message" 
            id="message" 
            placeholder='Enter here...' 
            value={message} 
            onChange={handleMessageChange}
          ></textarea>
        </div>
        <a href={mailtoLink} className='button cont-button'>Send</a>
      </div>
      <div className="Footer">
        <Footer/>
      </div>
    </div>
  );
}

export default Contact;
