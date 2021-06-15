import React, { Component } from 'react'
import { v4 as uuidv4 } from "uuid";
import './Imager.css'
import Display from './Display'
import Thumbnail from './Thumbnail'

export class Imager extends Component {
   state = {
     images:[
      {
        id: uuidv4(),
        url:"images/car1.jpg",
      },
      {
        id: uuidv4(),
        url:"images/car2.jpg",
      },
      {
        id: uuidv4(),
        url:"images/car3.jpg",
      },
      {
        id: uuidv4(),
        url:"images/car4.jpg",
      },
      {
        id: uuidv4(),
        url:"images/car5.jpg",
      },
      {
        id: uuidv4(),
        url:"images/car6.jpg",
      },
      {
        id: uuidv4(),
        url:"images/car7.jpg",
      },
      {
        id: uuidv4(),
        url:"images/car8.jpg",
      },
      {
        id: uuidv4(),
        url:"images/car9.jpg",
      },
      {
        id: uuidv4(),
        url:"images/car10.jpg",
      },
      {
        id: uuidv4(),
        url:"images/car11.jpg",
      },
      {
        id: uuidv4(),
        url:"images/car12.jpg",
      }
     ],
     iterator:0,
   }
  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
   handleRandomButtonClicked = ()=>{
     let number = this.getRandomInt(12)
     this.setState({
       iterator:number,
     })
   }
   handleLeftButton = ()=>{
  if(this.state.iterator<1){
    this.setState({
      iterator:0
    })
  }else{
    this.setState({
      iterator:this.state.iterator -1})
  } 
  }


   handleRightButton = ()=>{
  if(this.state.iterator>10){
    this.setState({
      iterator:11
    })
  }else{
    this.setState({
      iterator:this.state.iterator +1})
  } 
  }
  handleImageClicked = (event) => {
 
    this.setState({
      iterator:event,
    })
    
  }

  render() {
    console.log(this)
    return (
      <div className="body">
      
      <div className="large-img-container">
        <h1>Fair Lady Z</h1>
        <Display 
        images={this.state.images}
        iterator={this.state.iterator}
        />
      </div>

      <div className="controls">
        <button onClick={
          this.handleRandomButtonClicked}>random</button>
        <div><button onClick={this.handleLeftButton}>{'<'}</button><button onClick={this.handleRightButton} id="btn-right">{'>'}</button></div>
      </div>
      <div className="cars">
      
      {this.state.images.map((img, index) => { 
        
      return ( 
      <Thumbnail
      image={img.url}
      key={img.id}
      id={index}
      handleImageClicked={this.handleImageClicked}

      />
      );
      })}
      </div>
      </div>
    );
  }
}

export default Imager
