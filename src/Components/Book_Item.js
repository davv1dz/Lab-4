import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export class Book_Item extends React.Component{
    render(){
        return (
    <div>
    <center>
        <Card style={{ width: '18rem' }}>
        <Card.Header><h6>{this.props.book.title}</h6></Card.Header>
            <Card.Body>
            <blockquote>
            <img src={this.props.book.thumbnailUrl}></img>
            <footer>
            <p>{this.props.book.authors[0]}</p>
            </footer>
            </blockquote>
            <Button variant="dark">Learn More</Button>
        </Card.Body>
        </Card>
        <br/>
    </center>
    </div>
    );
  }
}