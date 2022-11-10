import { PhoneAuthCredential } from 'firebase/auth';
import React, { useContext } from 'react';

import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';


const ReviewDetails = ({ review,handleDelete}) => {
    const { user } = useContext(AuthContext);
    const { _id, userName,serviceName, visit, email,phone, textarea, image, status } = review;
   

    return (
        <div>
             

            <Table striped bordered hover size="sm" className='sm'>
              
               
                <tbody>
                    <tr>
                        

                        <td>
                            <Image
                                name='image'
                                style={{ height: '30px' }} roundedCircle

                                src={user?.photoURL}
                            ></Image>
                        </td>
                        <td>{userName}</td>
                        <td>{email}</td>
                        <td>{textarea}</td>
                        <td>{visit}</td>
                        <td>{serviceName}</td>
                        <td>{phone}</td>
                        
                        <Link to={`/reviews/${_id}`}><td><Button variant="warning">Edit review</Button></td></Link>
                        <td><Button onClick={()=>handleDelete(_id)} variant="danger">Delete</Button></td>
                        
                    </tr>
                    
                    
                </tbody>

            </Table>



           


        </div>
    );
};

export default ReviewDetails;