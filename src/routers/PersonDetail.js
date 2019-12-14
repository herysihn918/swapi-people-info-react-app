import React, {Component} from 'react'
import {Card} from 'react-bootstrap'

export default class PersonDetail extends Component {
    render() {
        return (
            <Card bg="dark" text="white">
                <Card.Header>Header</Card.Header>
                <Card.Body>
                <Card.Title>Dark Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk
                    of the card's content.
                </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}