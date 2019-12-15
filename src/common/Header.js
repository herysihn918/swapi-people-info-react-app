import React, {Component} from 'react'
import {Navbar, Nav, FormControl, Button} from 'react-bootstrap'

export default class Header extends Component {
    
    _changeSearchString = e => {
        let search= e.target.value
        this.props.MotherComp.setState({ search })       
    }
    _sendSearchString = async () => {
        this.props.MotherComp._recallAPIWithSearch()
    }

    render() {
        return(
            <>
                <Navbar bg="dark" variant="dark" >
                    <div className="container">
                        <Navbar.Brand href="/">Star War Universe People</Navbar.Brand>
                            <Nav className="mr-auto">
                                
                            </Nav>
                        <Nav>
                            <FormControl type="text" placeholder="Search" value={this.props.MotherComp.state.search} className="mr-sm-2" onChange={ e => this._changeSearchString(e)} />
                            <Button variant="outline-info" type="button" onClick={() => this._sendSearchString()}>Search</Button>
                        </Nav>
                    </div>
                </Navbar>
                
            </>
        )
        
    }
}