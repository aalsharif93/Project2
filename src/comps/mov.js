import React, { Component } from 'react'
import {Card ,Button} from 'react-bootstrap'
import Movies from './movies'
// import './App.css'
export default class mov extends Component {
    movieView(){
        console.log('trying to view ');
        console.log(this.props.id+this.props.moveName);
        window.location.href = 'https://www.themoviedb.org/search?query='+this.props.moveName+'&language=en-US'
      }
    render() {
     
        return (
            
            <Card style={{ width: '18rem' , margin: '10px'}}>
            <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w185'+this.props.movImg} />
            <Card.Body>
            <Card.Title>{this.props.moveName}</Card.Title>
            <Card.Text>
           <b>Rating:</b> {this.props.movD}
            </Card.Text>
           
            <Button onClick={this.movieView.bind(this)} variant="primary">Details</Button>
           
            </Card.Body>
        
            </Card>
            
           
        )
    }
}
