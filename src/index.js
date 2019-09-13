import React from "react";
import { render } from "react-dom";

class App extends React.Component {
  state = {
    clients: [
      { id: 1, nom: "Jacobson" },
      { id: 2, nom: "Spice inc" },
      { id: 3, nom: "Domo Bank" }
    ],
    compteur: 0,
    nouveauClient: ""
  };

  handleDelete = id => {
    console.log(id);
    const clients = this.state.clients.slice();
    //index cherche l'id correspondant au client puis l'on retire
    //le client correspondant
    const index = clients.findIndex(client => client.id === id);
    clients.splice(index, 1);
    this.setState({ clients: clients });
  };

  //utiliser des foncitons flechées pour de meilleurs performance//
  handleClick = e => {
    e.preventDefault();
    console.log(this.state.clients);
    this.setState({ compteur: this.state.compteur + 1 });
    /* let clients = this.state.clients.slice();
   clients.push({ id: 3, nom: "Domo Bank" });
    this.setState({clients});*/
  };

  handleSubmit = e => {
    //copie toujours l'état avant d'agir dessus
    e.preventDefault();
    //définition de la valeur des clefs
    const id = new Date().getTime();
    const nom = this.state.nouveauClient;
    //définition de nos objets state
    const client = { id: id, nom: nom };
    const clients = this.state.clients.slice();
    //ajout plus changement du state
    clients.push(client);
    this.setState({ clients: clients, nouveauClient: "" });
  };

  handleChange = e => {
    console.log(e.currentTarget.value);
    const value = e.currentTarget.value;
    this.setState({ nouveauClient: value });
  };

  render() {
    const title = "Liste des clients";

    return (
      <div>
        <h1>{title}</h1>
        <button onClick={this.handleClick}>click me</button>
        {this.state.compteur}
        <ul>
          {this.state.clients.map(client => (
            <li key={client.id}>
              {client.nom}
              <button onClick={() => this.handleDelete(client.id)}>X</button>
            </li>
          ))}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            value={this.state.nouveauClient}
            type="text"
            placeholder="ajouter un client"
          />
          <button type="submit">Confirmer</button>
        </form>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
