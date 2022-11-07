import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';


const Register = () => {
    const {createUser} = useContext(AuthContext);


    const handleSubmit =(event)=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password =form.password.value;
        const url = form.url.value;
        if(password.length < 6){
            alert('you should be 6 charter')
        }
        // console.log(name,email,password,url);
        createUser(email,password)
        .then(result=>{
            const user= result.user;
            console.log(user);
            form.reset('')
        })
        .catch(err=>{
            console.error(err)
        })

    }
    return (
        <div className='mt-5'>

            <Card className='container p-5' style={{ width: '30rem' }}>


                <ListGroup>
                    
                        <h2 className='text-black fw-bold p-3'>Please Register Now</h2>
                   
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name='name' placeholder="Enter Your Name" />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Photo Url</Form.Label>
                            <Form.Control type="text" name='url' placeholder="Enter Your url" />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name='email' placeholder="Enter email" required/>

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name='password' placeholder="Password" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Register
                        </Button>
                        <p>You have a no Account..<Link to='/login' className='text-orange-600 text-decoration-none'>Login</Link></p>
                    </Form>
                </ListGroup>
            </Card>

        </div>
    );
};

export default Register;