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

      <button onClick={this.props.handleSubmit} data-type="bold"><span >Ropa</span></button>

      <button  data-type="italic"><span>Juguetes</span></button>

      <button data-type="justifyLeft"><span>Camitas</span></button>

      <button  data-type="justifyCenter"><span>Accesorios</span></button>

            </div>
            );
        }
    }
export default SearchBar;
