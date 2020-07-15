import React, { Component } from "react";
import api from "../../services/api";

export default class Client extends Component {
  state = {
    cliente: {},
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const response = await api.get(`/clients/id`);
    this.setState({
      cliente: response.data,
    });
  }
  render() {
    const { cliente } = this.state;
    return (
      <div className="client-info">
        <h1>{cliente.descricao}</h1>
        <p>{cliente.endereco}</p>
        <p>
          URL: <a href={cliente.url}>{cliente.url}</a>
        </p>
      </div>
    );
  }
}
