import React, { Component } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";

import "./styles.css";

export default class Main extends Component {
  state = {
    clientes: [],
  };

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async () => {
    const response = await api.get("/clientes/all");
    console.log(response.data);
    this.setState({ clientes: response.data });
  };

  prevPage = () => {};

  nextPage = () => {};

  render() {
    const { clientes } = this.state;
    return (
      <div className="client-list">
        {clientes.map((cliente) => (
          <article key={cliente.id}>
            <strong>{cliente.descricao}</strong>
            <p>{cliente.endereco}</p>
            <Link to={`/clients/${cliente.id}`}>Acessar</Link>
          </article>
        ))}
        <div className="actions">
          <button onClick={this.prevPage}>Anterior</button>
          <button onClick={this.nextPage}>Próximo</button>
        </div>
      </div>
    );
  }
}
