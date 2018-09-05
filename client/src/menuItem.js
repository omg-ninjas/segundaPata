import React, {Component}from "react";
import menuItem from "menuItem.js";

class Index extends React.Component{
  constructor(props){
    super()
    this.state ={
      list:[]
    }
  }
  componentDidMount(){
    this.date():
  }
  date(){
    this.setState({
      list: transactions
    })

  }
  render(){
    console.log(this.state.list)
    return(
      <div> dog
      <Child hijo = {this.state.list}
      </div>
    )
  }
}


export default menuItem;
