import React, { useContext, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext, } from '../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth'
import { FaGoogle } from 'react-icons/fa';
import useTitle from '../../hook/useTitle';
import { Spinner } from 'react-bootstrap';

const Login = () => {
    useTitle('Login')
    const { loginUser, googleLogin, loader } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate();
    const [error, setError] = useState();
    
    const location = useLocation()

    const from = location.state?.from?.pathname || '/';

    


    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        
        loginUser(email, password)
            .then(result => {
                const user = result.user;

                const currentUser = {
                    email: user.email
                }

                console.log(currentUser);

                fetch('https://services-review-server-tan.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);

                        localStorage.setItem('reviews-token', data.token)
                        form.reset('')
                        navigate(from, { replace: true })
                        // .toast('successful login')
                        toast('Successfully Login.');
                        if (loader) {
                            return <Spinner animation="border" variant="info" />
                        }
                    })




            })
            .catch(err => {
                console.log(err)
                setError(err.message)
            })

           
    }

    const handleGoogle = () => {
        googleLogin(googleProvider)
            .then(result => {
                const user = result.user;
                
                const currentUser = {
                    email: user.email
                }

                console.log(currentUser);

                fetch('https://services-review-server-tan.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        

                        localStorage.setItem('reviews-token', data.token)
                       
                        
                       
                        toast('Successfully Login.');
                        if (loader) {
                            return <Spinner animation="border" variant="info" />
                        }
                    })
                    .catch(e=>console.log(e))
                    navigate(from, { replace: true })

            })
            .catch(err => {
                console.log(err);
            })
    }


    return (

        <div className='bg-secondary '>

            <Card className='container p-5 ' style={{ width: '30rem' }}>


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

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            {error}
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                        
                        <Toaster />
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