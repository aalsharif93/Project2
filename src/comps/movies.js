import React, { Component } from 'react'
import Mov from './mov'
import {Row} from 'react-bootstrap'
export default class Movies extends Component {
    // 
    
    render() {

        let {movies} = this.props
        console.log(this.props)
      return (
        <>
        <div style={{width: '80%',margin: '0 auto'}} >
        <Row>
        {
          movies.map(x=>(
              <Mov key={x.id} movImg={x.poster_path} moveName={x.title} movD={x.popularity} />
          ))

        }
        </Row>
        </div>
     
        </>
      )
    }
  }
  