import React from "react";

class ClientForm extends React.Component {
  state = {
    nouveauClient: ""
  };

  handleChange = e => {
    this.setState({ nouveauClient: e.currentTarget.value });
  };

  handleSubmit = e => {
    //copie toujours l'état avant d'agir dessus
    e.preventDefault();
    //définition de la valeur des clefs
    const id = new Date().getTime();
    const nom = this.state.nouveauClient;

    this.props.onClientAdd({ id, nom });

    this.setState({ nouveauClient: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChange}
          value={this.state.nouveauClient}
          type="text"
          placeholder="ajouter un client"
        />
        <button type="submit">Confirmer</button>
      </form>
    );
  }
}

export default ClientForm;
