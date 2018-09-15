import React from "react";
//import Home from "./home.jsx";

class UploadProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      producto: "",
      descripcion: "",
      precio: "",
      categoria: "",
      email: "",
      vendedor: ""
    };
    this.handleName = this.handleName.bind(this);
    this.handleDescripcion = this.handleDescripcion.bind(this);
    this.handlePrice = this.handlePrice.bind(this);
    this.handleMail = this.handleMail.bind(this);
    this.handleVendor = this.handleVendor.bind(this);
    this.submitItem = this.submitItem.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  handleName(e) {
    e.preventDefault();
    this.setState({
      producto: e.target.value
    });
  }

  handleDescripcion(e) {
    e.preventDefault();
    this.setState({
      descripcion: e.target.value
    });
  }

  handlePrice(e) {
    e.preventDefault();
    this.setState({
      precio: e.target.value
    });
  }

  handleMail(e) {
    e.preventDefault();
    this.setState({
      email: e.target.value
    });
  }

  handleVendor(e) {
    e.preventDefault();
    this.setState({
      vendedor: e.target.value
    });
  }

  handleCategory(e) {
    e.preventDefault();
    this.setState({
      categoria: e.target.value
    });
  }

  addItem(name, description, precio, categoria, email, vendedor) {
      fetch("/items", {
        method: "POST",
        body: JSON.stringify({
          producto: name,
          descripcion: description,
          price: precio,
          category: categoria,
          email: email,
          vendor: vendedor
        }),
        headers: {
          "Content-Type": "application/json"
        }
      })
        // .then(() => this.getGroceryList())
        // .catch(error => console.error("Error:", error));
        alert('Tu producto ha sido enviado con éxito');
        event.preventDefault(); //esto está todo roto
    }

  submitItem(event) {
    event.preventDefault();
    this.addItem(this.state.producto, this.state.descripcion, this.state.precio, this.state.categoria, this.state.email, this.state.vendor );

    this.setState({
      producto: "",
      descripcion: "",
      precio: "",
      categoria: "",
      email: "",
      vendedor: ""
    });
  }

  render() {
    return (
      <div>
        ¿Qué quieres vender?:
        <input
          value={this.state.producto}
          placeholder="nombre del artículo"
          onChange={this.handleName}
        />
        <br />
        Describe brevemente el artículo:
        <input
          value={this.state.descripcion}
          placeholder="Cuentas con 150 caracteres"
          onChange={this.handleDescripcion}
        />
        < br/>
        ¿Cuál será el costo?:
        <input
          value={this.state.description}
          placeholder="No olvides especificar con el símbolo de $"
          onChange={this.handleDescription}
        />
        <br />
        Elige una categoría:
        <input
          value={this.state.description}
          placeholder="Recuerda que son: juguetes, accesorios, cyc (camitas y casitas) y accesorios"
          onChange={this.handleDescription}
        />
        <br />
        Pásanos tu mail:
        <input
          value={this.state.description}
          placeholder="Para ponerse en contacto contigo"
          onChange={this.handleDescription}
        />
        <br />
        ¿Cómo quieres que te llamemos?:
        <input
          value={this.state.description}
          placeholder="Éste será el nombre que otros vean"
          onChange={this.handleDescription}
        />
        <br />
        <button onClick={this.submitItem}>¡Añadir Producto!</button>
      </div>
    );
  }
}

export default UploadProduct;
