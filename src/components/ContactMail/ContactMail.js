import React from "react";
import "../../style.css";
import '../../App.css';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import emailjs from 'emailjs-com';
import "./contactMail.css";
import {Helmet} from 'react-helmet';
import 'semantic-ui-css/semantic.min.css';


// npm i @emailjs/browser

const SERVICE_ID = "service_s0cruze";
const TEMPLATE_ID = "template_gqxmii8";
const USER_ID = "XEPEOvc2cWZKV_VfM";

const App = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    e.target.reset()
  };

return (
  <div>
    {/* Ignore helmet section, here for testing purposes */}
    <Helmet>
    <link rel="stylesheet" href="./ContactMail/Contact.module.css" />
    </Helmet>

    <div className='Mail'>
      <Form onSubmit={handleOnSubmit} class="box">
        <Form.Field
          id='form-input-control-email'
          control={Input}
          label='Email'
          name='user_email'
          placeholder='Email…'
          required
          icon='mail'
          iconPosition='left'
        />
        <Form.Field
          id='form-input-control-last-name'
          control={Input}
          label='Name'
          name='user_name'
          placeholder='Name…'
          required
          icon='user circle'
          iconPosition='left'
        />
        <Form.Field
          id='form-textarea-control-opinion'
          control={TextArea}
          label='Message'
          name='user_message'
          placeholder='Message…'
          required
        />
        <Button type='submit' color='green'>Submit</Button>
      </Form>
    </div>
  </div>  
  );
}

export default App;









