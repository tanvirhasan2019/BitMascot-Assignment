import React, { useState } from 'react';
import { Container, Nav , Navbar,  NavDropdown, } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { logout } from '../actions/auth';


export default function NavbarMenu() {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const history = useHistory();

    const handleLogout = () =>{
        dispatch(logout(history));
    }


    return (
        
            <Navbar variant="dark" bg="dark" expand="lg">
               <Container fluid>
                    <div style={{width:'100%'}} className="d-flex justify-content-between d-flex align-items-center">
                        <div>
                          <Navbar.Brand href="#home">Navigation</Navbar.Brand>
                        </div>
                        <div>
                            <Navbar.Toggle aria-controls="navbar-dark-example" />
                            <Navbar.Collapse id="navbar-dark-example">
                                <Nav>
                                        <NavDropdown
                                        id="nav-dropdown-dark-example"
                                        title={user ? user.user.email : ''}
                                        menuVariant="dark"
                                        >
                                       
                                        <NavDropdown.Item href="#">Change Password</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item onClick={handleLogout} href="">Logout</NavDropdown.Item>
                                        </NavDropdown>
                                        
                                </Nav>
                            </Navbar.Collapse>

                        </div>
                    </div>
                    
                </Container>
        </Navbar>
       
    )
}
