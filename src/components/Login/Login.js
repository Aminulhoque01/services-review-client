import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import { AuthContext, } from '../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth'
import { FaGoogle } from 'react-icons/fa';

const Login = () => {
    const { loginUser, googleLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider()

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email,password);
        loginUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset('')
            })
            .catch(err => {
                console.log(err);
            })
    }

    const handleGoogle = () => {
        googleLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                

            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div className='mt-5'>

            <Card className='container p-5' style={{ width: '30rem' }}>


                <ListGroup>

                    <h2 className='text-black fw-bold p-5'>Please Login Now</h2>

                    <Form onSubmit={handleLogin}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name='email' placeholder="Enter email" required />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name='password' placeholder="Password" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                        <p>You have a no Account..<Link to='/register' className='text-orange-600 text-decoration-none'>register</Link></p>
                    </Form>
                    <div className='mt-5 '>
                        <Button variant="warning" onClick={handleGoogle}> <FaGoogle></FaGoogle> <p>Sign In With Google</p></Button>
                    </div>
                </ListGroup>

            </Card>

        </div>
    );
};

export default Login;