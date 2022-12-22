import React from 'react';
import { TiCancel } from "react-icons/ti";
import useTitle from '../../hook/useTitle';
const ErrorPage = () => {
    useTitle('Error')
    return (
        <div className='container  w-50'>
        <div className='ms-auto '>
            <h1 className='text-red text-center fw-bold '>404</h1>
            <h1 className='text-red text-center fw-bold '>Not Found</h1>
            <p className='text-red text-center fw-bold '><TiCancel size="580px"></TiCancel></p>
            
        </div>
    </div>
    );
};

export default ErrorPage;