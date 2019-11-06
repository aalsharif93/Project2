import React, { Component } from 'react'
import './mov.css'
import Movies from './comps/movies'
import Nav from './comps/nav'
// import Mov from './comps/mov'
import { BrowserRouter as Router , Switch, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
import Home from './comps/Home'
export default class App extends Component {

    state={
      data : [],
      search : ' ',
      urls: ''
    }
  
    

  getMovies = (query='marvel') => {
    console.log(query)
    fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=467b99190762c525e0407fc3f52d654c`)
    .then(res => res.json())
    .then(data => {
      console.log(data)

      this.setState({data:data.results})
    })
    .catch(e => console.log(e))
  }

  searchBar = (event) => {
    this.getMovies(event)
  }  

  
  componentDidMount() {
   this.getMovies()
  }

 
  render() {
    return (
      <>
      <Nav searchMovies={this.searchBar} movies = {this.state.data}/>
      {/* {(this.state.data.length > 0) ? <Movies movies={this.state.data} /> : null} */}
      <Router>
  
  {/* <Route path='/about' component={About}/> */}
 
</Router>
      </>
    )
  }
}
