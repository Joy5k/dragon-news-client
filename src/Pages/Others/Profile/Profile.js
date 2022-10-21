import React, { useContext } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Profile = () => {
    const { user } = useContext(AuthContext)
    const [name, setName] = useState();
    const photoURLRef=useRef(user.photoURL)

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(photoURLRef.current.value);
    }
    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    return (
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control readOnly type="text" value={user.email} placeholder="Enter email" />
     
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" onChange={handleNameChange} defaultValue={name} placeholder="name" />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>photoURL</Form.Label>
          <Form.Control ref={photoURLRef} defaultValue={user?.photoURL} placeholder="Password" />
        </Form.Group>
  
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
};

export default Profile;