import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import useTitle from '../hook/useTitle';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const AllServices = ({ service }) => {
    const { name, image, description, visit, _id } = service;

    return (
        <div className='container'>
            <Card >
                <PhotoProvider>
                    <PhotoView src={image}>
                        <Card.Img src={image} className='rounded' />
                    </PhotoView>
                </PhotoProvider>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description.slice(0, 250) + '...'}<Link to={`/details/${_id}`}>see more</Link>
                    </Card.Text>
                    <p>Visit:{visit}</p>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default AllServices;
