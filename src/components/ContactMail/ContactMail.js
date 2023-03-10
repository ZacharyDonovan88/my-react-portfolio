import React, { useState } from "react";
import "../../style.css";
import '../../App.css';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import emailjs from 'emailjs-com';
import "./contactMail.css";
import {Helmet} from 'react-helmet';
import 'semantic-ui-css/semantic.min.css';

const App = () => {
  const [status, setStatus] = useState('');
  const [error, setError] = useState(false);
  
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const email = e.target.user_email.value;

    // validate email
    if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setError(true);
      return;
    }

    emailjs
      .sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        e.target,
        USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Success");
        },
        (error) => {
          console.log(error.text);
          setStatus("Failed");
        }
      );

    e.target.reset();
  };

  const renderAlert = (status) => {
    if (status === "Success") {
      return <div className="success">The email was sent successfully!</div>;
    } else if (status === "Failed") {
      return <div className="failure">Failed to send the email, please try again later.</div>;
    }
  }

  const renderError = () => {
    if (error) {
      return <div className="error">Invalid email, please enter a valid email.</div>;
    }
  }

  const SERVICE_ID = "service_s0cruze";
  const TEMPLATE_ID = "template_gqxmii8";
  const USER_ID = "XEPEOvc2cWZKV_VfM";

  return (
    <div>
      {/* Ignore helmet section, here for testing purposes */}
      <Helmet>
      <link rel="stylesheet" href="./ContactMail/Contact.module.css" />
      </Helmet>

      <div className='Mail'>
        <h3>{renderAlert(status)}</h3>
        <Form onSubmit={handleOnSubmit} class="box">
          <Form.Field
            id='form-input-control-email'
            control={Input}
            label='Email'
            name='user_email'
            placeholder='Email???'
            required
            icon='mail'
            iconPosition='left'
          />
          <Form.Field
            id='form-input-control-last-name'
            control={Input}
            label='Name'
            name='user_name'
            placeholder='Name???'
            required
            icon='user circle'
            iconPosition='left'
          />
          <Form.Field
            id='form-textarea-control-opinion'
            control={TextArea}
            label='Message'
            name='user_message'
            placeholder='Message???'
            required
          />
          <Button type='submit' color='green'>Submit</Button>
        </Form>
      </div>
    </div>  
  );
  };

export default App;









