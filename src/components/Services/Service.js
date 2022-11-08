import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hook/useTitle';
import AllServices from '../../pages/AllServices';

const Service = () => {
    const allServices = useLoaderData();
    useTitle('services')
    return (
        <div>
            <h2 className='text-center p-5'>My All services</h2>
            <div className='grid lg:grid-cols-2 container gap-4'>
                {
                    allServices.map(service => <AllServices
                        key={service._id}
                        service={service}>

                    </AllServices>)
                }
            </div>
        </div>
    );
};

export default Service;