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

           
        </div>
    );
};

export default Login;