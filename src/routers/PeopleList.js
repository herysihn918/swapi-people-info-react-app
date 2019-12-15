import React, {Component} from 'react'
import { Table, Pagination, Row, Col, Button, Spinner, Card } from 'react-bootstrap'
import {Link} from 'react-router-dom'
//fetch functions
import {get_fetch_url} from './../apis/apiFunctions'
//self-components
import Header from './../common/Header'

const API_ROOT = 'https://swapi.co/api/people/'

class PeopleTable extends Component {
    
    render(){
        return (
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Year of Birth</th>
                        <th>Gender</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.list.map((value, id) => {
                        return (
                            <tr key={id}>
                                <td>{id + 1}</td>
                                <td>{value.name}</td>
                                <td>{value.birth_year}</td>
                                <td>{value.gender}</td>
                                <td>
                                    <Button variant="outline-light" size="sm">
                                        <Link 
                                            to={{
                                               pathname: '/detail',
                                               state: {
                                                   url: value.url
                                               } 
                                            }}
                                        >
                                            See Details
                                        </Link>
                                    </Button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        )
    }
}

export default class PeopleList extends Component {
    state={
        isloaded: false,
        page: 1,
        confirmSearch: '',
        search: '',
        count: 0,
        next: null,
        previous: null,
        results: [],
    }
    async componentDidMount() {
        this.setState({isloaded: true})
        let result = await get_fetch_url(API_ROOT)
        this.setState({...result.data, isloaded: false})
    }

    async _recallAPI(pageNum) {
        this.setState({isloaded: true})
        let result = await get_fetch_url(API_ROOT + `?page=${pageNum}&search=${this.state.confirmSearch}`)
        this.setState({...result.data, page: pageNum, search: this.state.confirmSearch, isloaded: false})
    }

    async _recallAPIWithSearch() {
        await this.setState({confirmSearch: this.state.search})
        this._recallAPI(1)
    }

    render() {
        const pageCount = (this.state.count !== 0 && this.state.count % 10 === 0) ? this.state.count / 10 : (this.state.count - this.state.count % 10) / 10 + 1
        let items = []
        for (let i = 0; i < pageCount; i++)
        {
            if (i === this.state.page - 1)
                items.push({active: true})
            else
                items.push({active: false})
        }

        return (
            <>
            <Header MotherComp={this} />
            <Row className="py-3 px-0 container m-auto">
                <Col>
                    {this.state.isloaded ? (
                        <Card bg="dark" text="white" >
                            <Card.Body className="text-center">
                                <Spinner animation="border" variant="light" />
                            </Card.Body>
                        </Card>
                    ) : (
                        <>
                        <PeopleTable list = {this.state.results}/>
                        <Pagination className="justify-content-end">
                            <Pagination.Prev 
                                disabled={this.state.previous === null ? true : false}
                                onClick={() => this._recallAPI(this.state.page - 1)}
                            />
                            {items.map((value, id) => {
                                return (
                                    <Pagination.Item 
                                        key={id} 
                                        active={value.active}
                                        onClick={() => this._recallAPI(id+1)}
                                    >
                                        {id + 1}
                                    </Pagination.Item>
                                )    
                            })}
                            <Pagination.Next
                                disabled={this.state.next === null ? true : false}
                                onClick={() => this._recallAPI(this.state.page + 1)}
                            />
                        </Pagination>
                        </>
                    )}
                    
                </Col>
            </Row>
            </>
        )
    }
}