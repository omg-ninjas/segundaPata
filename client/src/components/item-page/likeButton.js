import React from 'react';
import $ from 'jquery';
import axios from 'axios';

class LikeButton extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        like: 0
      }
      this.like = this.like.bind(this);
    }

     like() {
       this.setState({
         like: this.state.like+1
       });
      axios.post("likeButton", {
        like: `${this.like}`
      })
       .then(res => console.log(response))
       .catch(err => {
         console.log(error)
       });

     }

  render() {
    return (
      // Passing in text.
      <div className="num">
        <button className="btn" onClick={this.like}>
        </button>
          {this.state.like}
      </div>
    );
  }
}

export default LikeButton;
