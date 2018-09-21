import React from 'react';
import $ from 'jquery';

class Info extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      video: ""
    }
    this.handleVideo = this.handleVideo.bind(this);

  }

  handleVideo(e) {
    e.preventDefault();
    this.setState({
      video: e.target.value
    });
  }

    //   fetch("http://localhost:3000/items", {
    //     method: "POST",
    //     body: JSON.stringify({
    //       name: name,
    //       description: description,
    //       price: price,
    //       category: category,
    //       email: email,
    //       vendor: vendor
    //     }),
    //     headers: {
    //       "Content-Type": "application/json"
    //     }
    //   })
    //
    //     .catch(error => console.error("Error:", error));
    //     alert('Tu producto ha sido enviado con éxito');
    //     // event.preventDefault(); //esto está todo roto
    // }

  render() {
    return (
      <div>
    <center><img src="https://www.aperrados.com/wp-content/uploads/2017/01/bulldog-ingles-700x452.jpeg" alt="aquí van imagenes de perritos bien cute" /></center>
      <center className = "Info">

      <h3>¿Qué quieres vender?:
        <input
          value={this.state.video}
          placeholder="nombre del artículo"
          onChange={this.handleVideo}
        /></h3>

        </center>

      </div>
    );
  }
}

export default Info;
