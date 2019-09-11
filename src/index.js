import React from "react";
import { render } from "react-dom";

class App extends React.Component {
  state = {
    clients: [
      { id: 1, nom: "Jacobson" },
      { id: 2, nom: "Spice inc" },
      { id: 3, nom: "Domo Bank" }
    ],
    compteur: 0
  };

  handleDelete = id => {
    console.log(id);
    const clients = this.state.clients.slice();
    //index cherche l'id correspondant au client puis l'on retire
    //le client correspondant
    const index = clients.findIndex(function(client) {
      return client.id === id;
    });
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

  handleClient = () => {
    //copie toujours l'état avant d'agir dessus
    const clients = this.state.clients.slice();
    clients.push({ id: 4, nom: "Dupont andco" });
    this.setState({ clients: clients });
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
        <form>
          <input type="text" placeholder="ajouter un client" />
          <button onClick={this.handleClient}>Confirmer</button>
        </form>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
