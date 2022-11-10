import React, { useState, useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import useTitle from '../hook/useTitle';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import { Image } from 'react-bootstrap';
import toast, { Toaster } from 'react-hot-toast';

const DetailsPage = () => {
    const { user } = useContext(AuthContext)
    const { _id, visit, name, description, image, rating } = useLoaderData();
    useTitle('Details');




    return (
        <div className='bg-secondary mb-5'>
            <div className='pt-5 container'>
                <CardGroup>

                    <Card >

                        <Card.Img src={image} className='p-2' />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text>
                                {description}
                            </Card.Text>
                            <p>visit:{visit}</p>
                        </Card.Body>

                        <div className='p-3'>
                            <Link to={`/reviewPage/${_id}`}><Button variant="primary" type="submit" >
                                please Review
                            </Button></Link>
                        </div>

                    </Card>

                </CardGroup>

                <div className='mt-5'>
                    <CardGroup>

                        <Card >


                            <div className='container '>
                                <h4 className=' p-5'>All reviews Reviews</h4>

                                <Card>
                                    <div className=''>
                                        <div className='p-2'>
                                            <Image
                                                name='image'
                                                style={{ height: '30px' }} roundedCircle

                                                src={user?.photoURL}
                                            ></Image>
                                        </div>
                                        <div className='p-2'>
                                            <h5>name:{user.displayName}</h5>
                                        </div>
                                        <div className='p-2'>
                                            <p>rating:{rating}</p>
                                        </div>
                                    </div>
                                </Card>

                            </div>


                        </Card>

                    </CardGroup>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;