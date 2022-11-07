import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const {user,logOut} = useContext(AuthContext);


    const handleLogOut =()=>{
        logOut();
    }
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container >
                    <Navbar.Brand href="#">Doctor</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link><Link to="/" className='text-decoration-none fw-bold text-secondary'>Home</Link></Nav.Link>
                            <Nav.Link><Link to="/services" className='text-decoration-none fw-bold text-secondary'>Services</Link></Nav.Link>
                            <Nav.Link><Link to="/blog" className='text-decoration-none fw-bold text-secondary'>Blog</Link></Nav.Link>
                            
                           
                        </Nav>
                        <div className="d-flex">
                          {
                            user?.email?
                            <Link to='/login'><Button onClick={handleLogOut} className='mx-2' variant="danger">LogOut</Button></Link>
                            :
                            <>
                             <Link to='/login'><Button className='mx-2' variant="success">Login</Button></Link>
                            <Link to='/register'><Button variant="secondary">Register</Button></Link>
                            </>
                          }
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;