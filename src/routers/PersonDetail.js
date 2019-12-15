import React, { Component } from 'react'
import { Card, Navbar, Spinner, ListGroup, ListGroupItem, Row, Col } from 'react-bootstrap'
// fetch function
import { get_fetch_url } from './../apis/apiFunctions'

export default class PersonDetail extends Component {
    state = {
        isloaded: false,
        loadingText: null,
        films: [],
        species: [],
        vehicles: [],
        starships: [],
    }
    async componentDidMount() {
        this.setState({isloaded: true, loadingText: "loading person data..."})
        let api_url = this.props.location.state.url
        let result = await get_fetch_url(api_url)
        let homeworld = await get_fetch_url(result.data.homeworld)
        //load film data
        this.setState({loadingText: "loading film info..."})
        let films = []
        for (let i = 0; i < result.data.films.length; i++)
            films.push((await get_fetch_url(result.data.films[i])).data.title)
        result.data.films = films
        //load species data
        this.setState({loadingText: "loading species info..."})
        let species = []
        for (let i = 0; i < result.data.species.length; i++)
            species.push((await get_fetch_url(result.data.species[i])).data.name)
        result.data.species = species
        //load vehicle data
        this.setState({loadingText: "loading vehicles info..."})
        let vehicles = []
        for (let i = 0; i < result.data.vehicles.length; i++)
            vehicles.push((await get_fetch_url(result.data.vehicles[i])).data.name)
        result.data.vehicles = vehicles
        //load starships data
        let starships = []
        this.setState({loadingText: "loading starships info..."})
        for (let i = 0; i < result.data.starships.length; i++)
            starships.push((await get_fetch_url(result.data.starships[i])).data.name)
        result.data.starships = starships

        const newState = {...result.data, isloaded: false, homeworldName: homeworld.data.name}
        this.setState({...newState})
        
    }

    
    

    render() {
        return (
            <>
                <Navbar bg="dark" variant="dark" className="mb-5">
                    <div className="container">
                        <Navbar.Brand href="/">Star War Universe People</Navbar.Brand>
                    </div>
                </Navbar>
                <Card bg="dark" text="white" className="container m-auto">
                    <Card.Header as="h4">Person Info</Card.Header>
                    <Card.Body>
                        {this.state.isloaded ? (
                            <div style={{display: 'flex', flexDirection: 'row'}}>
                                <Spinner animation="border" variant="light" className="mr-4" />
                                <div>{this.state.loadingText}</div>
                            </div>
                        ) : (
                            <>
                            <Card.Title as="h3">{this.state.name}</Card.Title>
                            <Row className="mb-3">
                                <Col className="p-0">
                                    <ListGroup variant="flush">
                                        <ListGroupItem style={{backgroundColor: '#555'}}>Year of Birth: {this.state.birth_year}</ListGroupItem>
                                        <ListGroupItem style={{backgroundColor: 'black'}}>Height: {this.state.height}</ListGroupItem>
                                        <ListGroupItem style={{backgroundColor: '#555'}}>Hair Color: {this.state.hair_color}</ListGroupItem>
                                        
                                    </ListGroup>
                                </Col>
                                <Col className="p-0">
                                    <ListGroup variant="flush">
                                        <ListGroupItem style={{backgroundColor: '#555'}}>Gender: {this.state.gender}</ListGroupItem>
                                        <ListGroupItem style={{backgroundColor: 'black'}}>Mass: {this.state.mass}</ListGroupItem>
                                        <ListGroupItem style={{backgroundColor: '#555'}}>Skin Color: {this.state.skin_color}</ListGroupItem>
                                        
                                    </ListGroup>
                                </Col>
                                <Col className="p-0">
                                    <ListGroup variant="flush">
                                        <ListGroupItem style={{backgroundColor: '#555'}}>Homeworld: {this.state.homeworldName}</ListGroupItem>
                                        <ListGroupItem style={{backgroundColor: 'black'}}>&nbsp;</ListGroupItem>
                                        <ListGroupItem style={{backgroundColor: '#555'}}>Eye Color: {this.state.eye_color}</ListGroupItem>
                                        
                                    </ListGroup>
                                </Col>
                            </Row>
                            
                            <Row className="mb-3">
                                <Col className="p-0">
                                    <Card.Title as="h5">Films</Card.Title>
                                    <ListGroup variant="flush">
                                        {this.state.films.map((value, id) =>  {
                                            return (
                                                <ListGroupItem key={id} style={{backgroundColor: '#555'}}>
                                                    {value}
                                                </ListGroupItem>
                                                )
                                            })
                                        }
                                    </ListGroup>
                                </Col>
                                <Col className="p-0">
                                    <Card.Title as="h5">Species</Card.Title>
                                    <ListGroup variant="flush">
                                        {this.state.species.map((value, id) =>  {
                                            return (
                                                <ListGroupItem key={id} style={{backgroundColor: 'black'}}>
                                                    {value}
                                                </ListGroupItem>
                                                )
                                            })
                                        }
                                    </ListGroup>
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col className="p-0">
                                    <Card.Title as="h5">Vehicles</Card.Title>
                                    <ListGroup variant="flush">
                                        {this.state.vehicles.map((value, id) =>  {
                                            return (
                                                <ListGroupItem key={id} style={{backgroundColor: '#555'}}>
                                                    {value}
                                                </ListGroupItem>
                                                )
                                            })
                                        }
                                    </ListGroup>
                                </Col>
                                <Col className="p-0">
                                    <Card.Title as="h5">Starships</Card.Title>
                                    <ListGroup variant="flush">
                                        {this.state.starships.map((value, id) =>  {
                                            return (
                                                <ListGroupItem key={id} style={{backgroundColor: 'black'}}>
                                                    {value}
                                                </ListGroupItem>
                                                )
                                            })
                                        }
                                        
                                    </ListGroup>
                                </Col>
                            </Row>
                            </>
                        )}
                    </Card.Body>
                </Card>
            </>
        )
    }
}