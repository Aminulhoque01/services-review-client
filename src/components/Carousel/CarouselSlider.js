import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../../../src/asstes/image/d10.webp'
import image2 from '../../../src/asstes/image/Doctor4.jpg'
import image3 from '../../../src/asstes/image/doctor6.webp'
import { Image } from 'react-bootstrap';


const CarouselSlider = () => {
    return (
        <div>
            <Carousel className=''>
                <Carousel.Item >
                    <Image

                        className="d-block w-100"
                        src={image1}
                        alt="First slide"
                        style={{ height: '550px' }}
                    />
                    <Carousel.Caption>
                        <h3 className='fw-bold text-secondary'>Enjoy Your Life — We'll Be Here to Save it! We care for you — inside and out! Taking Care of You Since — Well, Beginning of Time!</h3>
                        
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        className="d-block w-100"
                        src={image2}
                        alt="Second slide"
                        style={{ height: '550px' }}
                    />

                    <Carousel.Caption>
                        <h3 className='fw-bold text-secondary'>Enjoy Your Life — We'll Be Here to Save it! We care for you — inside and out! Taking Care of You Since — Well, Beginning of Time!</h3>
                        
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        className="d-block w-100"
                        src={image3}
                        alt="Third slide"
                        style={{ height: '550px' }}
                    />

                    <Carousel.Caption>
                        <h3 className='fw-bold text-secondary'>Enjoy Your Life — We'll Be Here to Save it! We care for you — inside and out! Taking Care of You Since — Well, Beginning of Time!</h3>
                        
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default CarouselSlider;