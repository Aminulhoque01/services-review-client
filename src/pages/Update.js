import React, { useContext, useEffect, useState } from 'react';
import { Image, Table } from 'react-bootstrap';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import useTitle from '../hook/useTitle';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLoaderData } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const Update = () => {

    const updateReviews = useLoaderData();
    // console.log(updateReviews);


    const { user } = useContext(AuthContext);
    const [updates, setUpdates] = useState(updateReviews);

    useTitle('update');




    const handleUpdateReview = (event) => {
        event.preventDefault();

        console.log(updates);


        fetch(`https://services-review-server-tan.vercel.app/reviews/${updateReviews._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updates)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {

                    toast('Successfully Update.');
                    // form.reset('')
                }
                console.log(data);

            })


        // const form = event.target;


    }

    const handelInputChange = (event) => {
        const field = event.target.name;
        const value = event.target.value;
        const newUser = { ...updates }
        newUser[field] = value;
        setUpdates(newUser);
        // console.log(newUser);
    }

    return (
        <div className='bg-secondary'>
            <div className='container mb-5'>
                <h2 className='text-center text-info pt-5'>Update Now</h2>

                <Card className=''>
                    <div className='p-5 '>
                        <Form onSubmit={handleUpdateReview}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">

                                <div className='p-2'>

                                    <Image
                                        name='image'
                                        style={{ height: '30px' }} roundedCircle

                                        src={user?.photoURL}
                                    ></Image>

                                </div>
                                <Form.Label>ServiceName</Form.Label>
                                <Form.Control onChange={handelInputChange} type="text" name='serviceName' placeholder="Enter Your Name" defaultValue={updateReviews.serviceName} />

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>UserName</Form.Label>
                                <Form.Control onChange={handelInputChange} type="text" name='userName' placeholder="Enter Your Phone Number" defaultValue={updateReviews.userName} />

                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>visit</Form.Label>
                                <Form.Control onChange={handelInputChange} type="text" name='visit' placeholder="Enter Your Phone Number" defaultValue={updateReviews.visit} />

                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control onChange={handelInputChange} type="text" name='phone' placeholder="Enter Your Phone Number" defaultValue={updateReviews.phone} />

                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control onChange={handelInputChange} type="email" name='email' placeholder="Enter email" defaultValue={updateReviews.email} readOnly />

                            </Form.Group>

                            <Form.Control
                                onChange={handelInputChange}
                                name='textarea'
                                as="textarea"
                                placeholder="Leave a comment here"
                                style={{ height: '100px' }}
                            />
                            <Form.Group className="mb-3" controlId="formBasicPassword">

                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Update
                            </Button>
                            <Toaster />
                        </Form>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Update;
