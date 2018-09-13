import axios from "axios";
import React from "react";

/*
dependemcias de material ui
*/
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'coconut'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className = "data">
      <form onSubmit={this.props.handleSubmit}>
        <label className = "data">
        Categoria:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <label>
      Descripcion:<input type="text" name="name" />
      Pecio:<input type="text" name="name" />
      Name:<input type="text" name="name" />
        <input type="submit" value="Submit" />
        </label>
        </form>
        </div>
      );
    }
  }


export default Upload;
