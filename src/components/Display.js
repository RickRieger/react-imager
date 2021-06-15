import React, { Component } from 'react'

export class Display extends Component {

  render() {
    const {images} = this.props;
    const {iterator}=this.props;
    return (
      <div id="large-image-container">
        <img src={images[iterator].url} alt="car"/>
      </div>
    )
  }
}

export default Display
