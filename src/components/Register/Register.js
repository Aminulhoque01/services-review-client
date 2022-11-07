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
        })
        .catch(err=>{
            console.error(err)
        })

    }
    return (
        <div className='mt-5'>

            

        </div>
    );
};

export default Register;