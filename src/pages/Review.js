import React from 'react';
import Table from 'react-bootstrap/Table';
import useTitle from '../hook/useTitle';

const Review = () => {
    useTitle('Reviews')
    return (
        <div className='mt-5 container'>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Email</th>
                        <th>text</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td ></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td ></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td ></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td ></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td ></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td ></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td ></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td ></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td ></td>
                        <td></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default Review;
