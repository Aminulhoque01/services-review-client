import React, { useState, useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import useTitle from '../hook/useTitle';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import { Image } from 'react-bootstrap';


const DetailsPage = () => {
    const { user } = useContext(AuthContext)
    const {_id,visit, name,description,image } = useLoaderData();
    useTitle('Details');
   

    const handlerReview = (event) => {
        event.preventDefault();
        const form = event.target;
        const username = form.name.value;
        const money = visit;
        const phone = form.phone.value;
        const email = user?.email;
        const textarea = form.textarea.value;
        const image= user?.photoURL

        console.log(username, money, email, phone, textarea,image);

        const Review = {

            service:_id,
            userName:username,
            serviceName:name,
            visit,
            email,
            phone,
            textarea,
            image,

        }


        fetch('http://localhost:5000/reviews',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(Review)
        })
        .then(res=>res.json())
        .then(data=>{
            
            console.log(data)
            if(data.acknowledged){
                alert('reviews successfully')
                form.reset('');
            }
        })
        .catch(er=>console.log(er))
    }

    return (
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



                </Card>

            </CardGroup>

            <div className='mt-5'>
                <CardGroup>

                    <Card >

                        <h4 className='text-center p-5'>Please Added Reviews</h4>
                        <div className='container '>
                            <h4 className=' p-5'>You Added Reviews:- {name}</h4>


                            <Form onSubmit={handlerReview}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">

                                    <div className='p-2'>

                                        <Image
                                            name='image'
                                            style={{ height: '30px' }} roundedCircle

                                            src={user?.photoURL}
                                        ></Image>

                                    </div>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" name='name' placeholder="Enter Your Name" required />

                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Visit</Form.Label>
                                    <Form.Control type="text" name='visit' placeholder="Enter Your url" defaultValue={visit} readOnly />

                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control type="text" name='phone' placeholder="Enter Your Phone Number" required  />

                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" name='email' placeholder="Enter email" defaultValue={user.email} readOnly />

                                </Form.Group>

                                <Form.Control
                                    name='textarea'
                                    as="textarea"
                                    placeholder="Leave a comment here"
                                    style={{ height: '100px' }}
                                />

                                <Form.Group className="mb-3" controlId="formBasicPassword">

                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </div>


                    </Card>

                </CardGroup>
            </div>
        </div>
    );
};

export default DetailsPage;