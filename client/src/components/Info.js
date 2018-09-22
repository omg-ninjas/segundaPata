import React, {Component} from 'react';
import $ from 'jquery';

class Info extends Component{
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


    //    <div>
      // <iframe width="400" height="315" src="https://www.youtube.com/embed/78ii7obZtQ4" frameborder="9" allow="autoplay; encrypted-media" allowfullscreen></iframe>

    // </div>
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

        <center>
         <h1>
Lenguaje de gato: lo que te está diciendo tu cola de gato</h1>
         <h3>Sumérjase en la comprensión del lenguaje de cola de gato: qué significan los movimientos y las posiciones del apéndice más intrigante de su gato.</h3>
         <div left><img width="400" height="315"src="https://cdn.omlet.co.uk/images/originals/Cat-Cat_Guide-A_little_girl_holding_a_cat.jpg" alt="aquí van imagenes de perritos bien cute" /></div>

        </center>

       </div>
    );
  }
}

export default Info;
