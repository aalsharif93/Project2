import React, { Component } from 'react'
import {Nav, Navbar, Form, Button, FormControl} from 'react-bootstrap'
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
import About from './Home'
import Movies from './movies'
import Home from './Home'




export default class nav extends Component {
 
  state = {
    searchInfo : ''
  }

  seachHandler = (e) => {
    this.setState({ searchInfo : e.target.value })
  }

  search = () => {
    this.props.searchMovies(this.state.searchInfo)
  }

  render() {
        return (
            <>
            <Router>
                  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">FoodMov</Navbar.Brand>
    <Nav className="mr-auto">

      
      <Nav.Link ><Link to='/home'>Home</Link></Nav.Link>
      

      {/* <Nav.Link href="#features">Foodies</Nav.Link> */}

      
      <Nav.Link ><Link to='/Movies'>Movies</Link></Nav.Link>
    

    </Nav>
   
    <Form inline>
      <FormControl type="text" placeholder="Search" name="search" onChange={this.seachHandler} className="mr-sm-2" />
     
       <Button variant="outline-info" onClick={this.search}>Search</Button>;
    </Form>
    
  </Navbar>
  <Switch>
  <Route path='/Movies' render={()=> <Movies movies={this.props.movies} />}/>
  <Route path='/Home' render={()=> <Home /> }/>
</Switch>
  </Router>
  </>
            
            
        )
    }
}

