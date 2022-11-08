import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import useTitle from '../hook/useTitle';
import { FaStar } from 'react-icons/fa';
import { info } from 'autoprefixer';
import { handler } from 'daisyui';


const DetailsPage = () => {
    const singles = useLoaderData();
    useTitle('Details')
    const [click, setClick]=useState()
   
    return (
        <div className='pt-5 container'>
            <CardGroup>

                <Card >

                    <Card.Img src={singles.image} className='p-2' />
                    <Card.Body>
                        <Card.Title>{singles.name}</Card.Title>
                        <Card.Text>
                            {singles.description}
                        </Card.Text>
                        <p>visit:{singles.visit}</p>
                    </Card.Body>



                </Card>

            </CardGroup>

            <div className='mt-5'>
                <CardGroup>

                    <Card >

                        <h4 className='text-center p-5'>Please Added Reviews</h4>
                        <div className='d-flex list-none pb-5 container'>
                            <li className=' text-3xl'><FaStar></FaStar></li>
                            <li className=' text-3xl'><FaStar></FaStar></li>
                            <li className=' text-3xl'><FaStar></FaStar></li>
                            <li className=' text-3xl'><FaStar></FaStar></li>
                            <li className=' text-3xl'><FaStar></FaStar></li>
                        </div>
                        <input type="text" border/>

                    </Card>

                </CardGroup>
            </div>
        </div>
    );
};

export default DetailsPage;