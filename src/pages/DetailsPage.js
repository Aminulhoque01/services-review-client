import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';

const DetailsPage = () => {
    const singles = useLoaderData();
    return (
        <div className='pt-5 container'>
            <CardGroup>

                <Card >

                    <Card.Img src={singles.image} className='p-2' />
                    <Card.Body>
                        <Card.Title>{singles.name}</Card.Title>
                        <Card.Text>
                            {singles.description}
                        </Card.Text>
                        <p>visit:{singles.visit}</p>
                    </Card.Body>



                </Card>

             </CardGroup>
        </div>
    );
};

export default DetailsPage;