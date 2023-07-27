import React from 'react';
import './home.css';
import { Container, Row, Col, Button, Form, InputGroup } from 'react-bootstrap';
import iconlist from './images/icon-list.svg';
import mobiledesign from './images/illustration-sign-up-mobile.svg';
import { Image } from 'react-bootstrap';

import {
  createSearchParams,
  useNavigate
} from 'react-router-dom';  
export const  Home =()=>{

    const [email, setEmail] = React.useState('');
const navigate =useNavigate();
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent page reload on form submission
    const formData = new FormData(event.currentTarget);
    const enteredEmail = formData.get('email') as string | null;
    
    setEmail(enteredEmail || '');

    navigate({
      pathname: "/message",
      search: createSearchParams({
          email: email
      }).toString()
  });  };
    return (<Container className="p-0 justify-content-center">
    <Image src={mobiledesign} className="img w-100" fluid={true} style={{float:'right'}} />
    <Row className="list mt-4 mb-4 ">
      <Col sm={12} className="cols">
        <h1 className="text-start mt-1 ms-4">Stay updated!</h1>
        <p className="text-start ms-4">Join 60,000+ product managers receiving monthly updates on</p>
        <ul className="text-start m-6">
          <li>Product discovery and building what matters</li>
          <li>Measuring to ensure updates are a success</li>
          <li>And much more!</li>
        </ul>
        <div className=" align-items-center d-flex-column">
          <Form onSubmit={handleFormSubmit}>
            <label className="form-label text-start text"><strong>Email address</strong></label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              aria-describedby="emailHelpId"
              placeholder="email@company.com"
            />
            <button type="submit" className="btn btn-dark mt-3 w-100 px-4 py-2.5">
              Subscribe to monthly newsletter
            </button>
          </Form>
        </div>
      </Col>
    </Row>
  </Container>)
}
export default Home;
export {};