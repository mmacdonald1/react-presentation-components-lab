// Code SimpleComponent Here

import React, {Component} from 'react';

export default class SimpleComponent extends Component{
  state ={
    mood:"happy"
  }

  handleClick = (e) =>{
    let newMood = this.state.mood === "happy" ? "sad": "happy";
    console.log(newMood)
    this.setState({mood:newMood})
  }

  render(){
    return(
      <div onClick={this.handleClick}>{this.state.mood}</div>
    )
  }
}
