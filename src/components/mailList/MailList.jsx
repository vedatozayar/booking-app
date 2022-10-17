import React from 'react';
import './mailList.css';
const MailList = () => {
  return (
    <div className='mail'>
      <h1 className='mailTitle'>Save time,save money!</h1>
      <h3 className='mailDesc'>
        Sign up and we'll send the best details to you
      </h3>
      <div className='inputContainer'>
        <input className='mailInput' type='text' placeholder='Your Email' />
        <button className='inputBtn'>Subscribe</button>
      </div>
    </div>
  );
};

export default MailList;
