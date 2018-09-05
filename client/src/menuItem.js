import React, {Component}from "react";
import List from "./list.js";

class menuItem extends React.Component{
  constructor(props){
    super()
    this.state ={
      list:[]
    }
  }
  componentDidMount(){
    this.date();
  }
  date(){
    this.setState({
      list: transactions
    })

  }
  render(){
    console.log(this.state.list)
    return(
      <div>
      <List list={this.state.list}/>
      </div>
    )
  }
}


export default menuItem;
