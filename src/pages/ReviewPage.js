import React, { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Button, Image } from 'react-bootstrap';
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../hook/useTitle';

const ReviewPage = () => {
    const { user } = useContext(AuthContext);
    useTitle('ReviewPage')

    const { _id, visit, name, description, image } = useLoaderData();

    const handlerReview = (event) => {
        event.preventDefault();
        const form = event.target;
        const username = form.name.value;
        const money = visit;
        const phone = form.phone.value;
        const email = user?.email;
        const textarea = form.textarea.value;
        const image = user?.photoURL

        console.log(username, money, email, phone, textarea, image);

        const Review = {

            service: _id,
            userName: username,
            serviceName: name,
            visit,
            email,
            phone,
            textarea,
            image,

        }


        fetch(`https://services-review-server-tan.vercel.app/reviews`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(Review)
        })
            .then(res => res.json())
            .then(data => {

                console.log(data)
                if (data.acknowledged) {
                    // alert('reviews successfully')
                    toast('Successfully Review.');
                    form.reset('');
                }
            })
            .catch(er => console.log(er))
    }
    return (
        <div className='bg-secondary'>
            <div className='pt-5 pb-5 container'>
                <CardGroup>

                    <Card >

                        <h4 className='text-center p-5'>Please Added Reviews</h4>
                        <div className='container '>
                            <h4 className=' p-3'>You Added Reviews:- {name}</h4>


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
                                    <Form.Control type="text" name='phone' placeholder="Enter Your Phone Number" required />

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

                                <div className='pb-5'>
                                    <Button variant="primary" type="submit">
                                        Submit Review
                                    </Button>
                                </div>
                                <Toaster />
                            </Form>
                        </div>


                    </Card>

                </CardGroup>
            </div>
        </div>
    );
};

export default ReviewPage;