import React, { useContext, useEffect, useState } from 'react';
import { Image, Table } from 'react-bootstrap';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import useTitle from '../hook/useTitle';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    
    const updateReviews = useLoaderData();
    // console.log(updateReviews);

    
    const { user } = useContext(AuthContext);
    const [updates, setUpdates] = useState(updateReviews);
    
    useTitle('update');

  


    const handleUpdateReview =(event)=>{
        event.preventDefault();
       
        

        
            fetch(`http://localhost:5000/reviews/${updateReviews._id}`,{
                method:'PUT',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(updates)
            })
                .then(res => res.json())
                .then(data => {
                    if(data.modifiedCount){
                        alert('update successfully');
                        form.reset('')
                    }
                    console.log(data);
                    
                })

                
                const form = event.target;
                

    }

    const handelInputChange = (event)=>{
        const field = event.target.name;
        const value = event.target.value;
        const newUser ={...user}
        newUser[field]=  value;
        setUpdates(newUser);
    }

    return (
        <div className='container'>
            {/* <h2>update:{updateReviews.serviceName}</h2> */}

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
                        <Form.Control onChange={handelInputChange} type="text" name='name' placeholder="Enter Your Name" defaultValue={updateReviews.serviceName}  />

                    </Form.Group>
               
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>UserName</Form.Label>
                    <Form.Control onChange={handelInputChange} type="text" name='phone' placeholder="Enter Your Phone Number"defaultValue={updateReviews.userName}  />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>visit</Form.Label>
                    <Form.Control onChange={handelInputChange} type="text" name='phone' placeholder="Enter Your Phone Number"defaultValue={updateReviews.visit}  />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control onChange={handelInputChange} type="text" name='phone' placeholder="Enter Your Phone Number"defaultValue={updateReviews.phone}  />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={handelInputChange} type="email" name='email' placeholder="Enter email" defaultValue={updateReviews.email}  />

                </Form.Group>

                <Form.Control
                    defaultValue={updateReviews.textarea}
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
    );
};

export default Update;
