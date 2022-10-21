import { updateProfile } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Toast } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Register = () => {
  let { createUser,UpdateUserProfile,verifyEmail } = useContext(AuthContext);
  const [error, setError] = useState('');
  const [accepted,setAccepted]=useState(false)
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const password = form.password.value;
        const photoURL = form.photoURL.value;
        console.log(email, name, password, photoURL);

        createUser(email,password)
            .then(result => {
                const user = result.user;
              console.log(user);
              handleUpdateUserProfile(name,photoURL)
              setError('')
              form.reset();
              handleVerifyEmail();
              toast.success('Please verify your email')
            
            })
            .catch(error => {
              console.log(error);
              setError(error.message)
            });
  }
  const handleVerifyEmail = () => {
    verifyEmail()
      .then(() => { })
      .catch(error=>console.log(error))
  }
  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL:photoURL
    }
    UpdateUserProfile(profile)
      .then(() => {})
      .catch(error=>console.log(error))
  }
  const handleAccepted = event => {
    setAccepted(event.target.checked);
  }
  <Toaster></Toaster>
   
    return (
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" name='name' placeholder="Enter your name" />
            </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>photo URL</Form.Label>
          <Form.Control type="text" name='photoURL' placeholder="Photo URL" />
            </Form.Group>
            
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='email' placeholder="Enter email"  required/>
        
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' placeholder="Password" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox"
            onClick={handleAccepted}
            label={<>Accept <Link to='/termsAndConditions'> Terms And Conditions </Link></>} />
      </Form.Group>
        <Button disabled={!accepted} variant="primary" type="submit">
          Register
        </Button>
            <Form.Text className="text-danger">
          {error}
          </Form.Text>
      </Form>
    );
};

export default Register;