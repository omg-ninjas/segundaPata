import React, {Component}from "react";


class SearchBar extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
              value: ''};
        }

        render() {
            return (
                <form onSubmit={this.handleSubmit}>
                <label> Name:
                  <input type="text"/>
                </label>
                <input type="submit" value="Submit" />
                </form>
            );
        }
    }
export default SearchBar;
