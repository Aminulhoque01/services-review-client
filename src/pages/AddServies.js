import React from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const AddServies = () => {

    const handleAdd=(event)=>{
        event.preventDefault();
        const form = event.target;

        const url = form.url.value;
        const name= form.title.value;
        const description =form.description.value;
        const visit = form.prices.value;
        const rating= form.rating.value;

        console.log(url,name,description, visit,rating);


        const addServices={
            name,
            visit,
            description,
            image:url,
            rating,

        }
        fetch('http://localhost:5000/add',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(addServices)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.acknowledged){
                alert('Your Add successfully')
                form.reset('');
            }
            console.log(data);
        })

    }

    return (
        <div className='container'>
            <h2 className='text-center mb-5'>now add services</h2>
            <Form onSubmit={handleAdd}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>URL</Form.Label>
                    <Form.Control name="url" type="text" placeholder="Enter url" />
                   
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Title</Form.Label>
                    <Form.Control name='title' type="text" placeholder="enter title" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>description</Form.Label>
                    <Form.Control name="description" type="text" placeholder="enter description" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Prices</Form.Label>
                    <Form.Control name="prices" type="text" placeholder="enter Prices" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Ratings</Form.Label>
                    <Form.Control name='rating' type="text" placeholder="enter Ratings" />
                </Form.Group>
             
                <Button variant="primary" type="submit">
                    Add now
                </Button>
            </Form>
        </div>
    );
};

export default AddServies;