import React, {Component} from 'react'
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'

export default class Header extends Component {
    render() {
        return(
            <>
                <Navbar bg="dark" variant="dark" >
                    <div className="container">
                        <Navbar.Brand href="/">Star War Universe People</Navbar.Brand>
                            <Nav className="mr-auto">
                                
                            </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-info">Search</Button>
                        </Form>
                    </div>
                </Navbar>
                
            </>
        )
        
    }
}