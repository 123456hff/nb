import React, { Component } from 'react'
import './index.scss'
import Slider from './Slider'
import axios from 'axios'



export default class Category extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       data: [] 
    }
  }
  

  componentDidMount () {
    axios.get('http://localhost:3000/qinqin.json').then( res => {
      res.data.data.data.map( item => {
        item.title = item.name 
        return ;
      })
      this.setState({
        data: res.data.data.data
      })
    })
  }

  render() {
    return (
      <div className = "container">
          <Slider { ...this.state }/>
      </div>
    )
  }
}
