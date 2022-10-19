import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub,FaFacebook,FaTwitch,FaTwitter,FaWhatsapp } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandsCarousel from '../BrandsCarousel/BrandsCarousel';


const RightSideNav = () => {
    return (
        <div>
           <ButtonGroup vertical>
                <Button className='mb-2' variant="outline-primary"><FaGoogle></FaGoogle> Login with Google</Button>
                <Button variant="outline-dark"><FaGithub></FaGithub> Login with Github</Button>
            </ButtonGroup>
            <div className='mt-4'>
                <h4>Find us on</h4>
                <ListGroup>
      <ListGroup.Item className='mb-2'><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
      <ListGroup.Item className='mb-2'><FaWhatsapp></FaWhatsapp>WhatsApp</ListGroup.Item>
      <ListGroup.Item className='mb-2'><FaTwitter></FaTwitter>Twitter</ListGroup.Item>
      <ListGroup.Item className='mb-2'><FaTwitch/>Twitch</ListGroup.Item>
      <ListGroup.Item className='mb-2'>Vestibulum at eros</ListGroup.Item>
    </ListGroup>
            </div>
            <div>
                <BrandsCarousel></BrandsCarousel>
            </div>
        </div>
    );
};

export default RightSideNav;