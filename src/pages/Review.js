import React, { useContext, useEffect, useState } from 'react';

import Table from 'react-bootstrap/Table';

import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import useTitle from '../hook/useTitle';
import ReviewDetails from './ReviewDetails';

const Review = () => {
    useTitle('Reviews');
    
    const { user, } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
 

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`,{
            headers:{
                authorization:`Bearer ${localStorage.getItem('reviews-token')}`
                
            }
        })
            .then(res => res.json())
            .then(data => setReviews(data))

    }, [user?.email])

    
    const handleDelete=(id)=>{
        const proceed= window.confirm('Are you cancel the review?')
        if(proceed){
            fetch(`http://localhost:5000/reviews/${id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.deletedCount > 0){
                    alert('deleted successfully');

                    

                    const remaining = reviews.filter(rev=> rev._id !==id);
                    setReviews(remaining)
                }
            })
        }
    }

 


    return (
        <div className='mt-5 container'>

            <Table striped bordered hover size="sm">
                
                <tbody>

                    {
                        reviews.map(review => <ReviewDetails 
                            key={review._id} 
                            review={review}
                            handleDelete={handleDelete}
                            >

                            </ReviewDetails>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default Review;
