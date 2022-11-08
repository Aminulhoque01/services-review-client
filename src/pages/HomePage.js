import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const HomePage = ({ service }) => {
    const { _id, name, image, description } = service;
    return (
        <div>
            
            <CardGroup>

                <Card >
                    
                    <Card.Img src={image}  className='rounded'/>
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {description.slice(0, 100) + '...'}
                        </Card.Text>
                        <small> <Link to={`/details/${_id}`}><Button variant="primary">Show Details</Button></Link></small>
                    </Card.Body>
                    

                    
                </Card>
                



            </CardGroup>
             
            
        </div>
    );
};

export default HomePage;