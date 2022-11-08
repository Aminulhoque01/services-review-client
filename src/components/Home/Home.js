import React from 'react';
import CarouselSlider from '../Carousel/CarouselSlider';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Image } from 'react-bootstrap';
import dman from '../../../src/asstes/image/dman.jpg'
import { FaLocationArrow, FaMailBulk, FaPhone, FaPhoneAlt, } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import Button from 'react-bootstrap/Button';


const Home = () => {
    const homeServices = useLoaderData();
    return (
        <div className=''>
            <CarouselSlider></CarouselSlider>
            <div className='p-5 bg-info'>
                <h2 className='text-center text-white'>Services</h2>

                <div className='grid lg:grid-cols-3 container gap-4'>
                    {
                        homeServices.map(service => <HomePage
                            key={service._id}
                            service={service}>

                        </HomePage>)
                    }

                </div>
                <div className='mt-5 container text-center pt-5'>
                    <Link to='/services'><Button variant="primary">See All</Button></Link>
                </div>

            </div>

            <div className='p-5 bg-secondary'>
                <Card className='container' style={{ width: '' }}>
                    <ListGroup >
                        <h2 className='text-center p-5'>About me</h2>

                        <div className='d-flex container '>
                            <div className='w-50 pb-5'>
                                <Image src={dman}>

                                </Image>
                            </div>
                            <div className='w-50'>
                                <h3 className='text-secondary fw-bold text-4xl pt-2'>I am Dr.Zufran</h3>
                                <p className='text-secondary text-1xl pt-2'>I am form usa.my  10 years of experience. My speciality is a cardiology, but I am also pediatrician and dietician.I am Specialist surgeon.arythmia treatment,Deiet,phycal extratner,ECG TESTS.normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English</p>

                            </div>
                        </div>
                    </ListGroup>
                </Card>

            </div>
            <div className='pt-5'>
                <Card className='container bg-dark'>
                    <ListGroup>
                        <h2 className='text-center p-5 text-white fw-bold text-4xl'>Contract Me</h2>

                        <div className='grid lg:grid-cols-3 container '>
                            <div className='container ms-auto'>
                                <h3 className='text-white '>Phone</h3>
                                <p className='text-white text-1xl'><FaPhoneAlt className='text-white text-center '></FaPhoneAlt> zufran@email.com</p>
                            </div>

                            <div>
                                <h3 className='text-white '>Email</h3>
                                <p className='text-white text-1xl'><FaMailBulk className='text-white text-center '></FaMailBulk> zufran@email.com</p>
                            </div>
                            <div>
                                <h3 className='text-white '>Location</h3>
                                <p className='text-white'><FaLocationArrow className='text-white text-3xl'></FaLocationArrow> 77a Gold Street, los Angle Usa </p>
                            </div>
                        </div>
                    </ListGroup>
                </Card>
            </div>

        </div>
    );
};

export default Home;