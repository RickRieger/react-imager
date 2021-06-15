import React, { Component } from 'react'

export class Thumbnail extends Component {

  
  
  render() {
    const {  handleImageClicked ,id } = this.props;
    console.log(this.props)
    return (
<div className="children"> <img onClick={()=>handleImageClicked(id)} key={this.props.id} src={this.props.image} alt="car"/></div> 
    )
  }
}

export default Thumbnail
