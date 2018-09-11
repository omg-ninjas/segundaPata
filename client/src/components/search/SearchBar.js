import React, {Component}from "react";


class SearchBar extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
              value: ''};

            // this.handleChange = this.handleChange.bind(this);
            // this.handleSubmit = this.handleSubmit.bind(this);
        }
        handleChange(event) {
            this.setState({value: event.target.value});
        }
        // handleSubmit(event) {
        //     // alert('A name was submitted: ' + this.state.value);
        //     event.preventDefault();
        // }
        render() {
            return (
            <div>

      <button onClick={this.props.handleSubmit} className="js-boton" data-type="bold"><span className="glyphicon glyphicon-bold">Clothes</span></button>

      <button className="js-botonn" data-type="italic"><span className="glyphicon glyphicon-italic">Toys</span></button>

      <button className="js-boto" data-type="justifyLeft"><span className="glyphicon glyphicon-align-left">Beds</span></button>

      <button className="js-botonq" data-type="justifyCenter"><span className="glyphicon glyphicon-align-center">Accessories</span></button>
      
            </div>
            );
        }
    }
export default SearchBar;
