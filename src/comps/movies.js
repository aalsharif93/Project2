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
        <Row>
        {
          movies.map(x=>(
              <Mov key={x.id} movImg={x.poster_path} moveName={x.title} movD={x.overview} />
          ))

        }
        </Row>
     
        </>
      )
    }
  }
  