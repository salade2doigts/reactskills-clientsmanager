import React from "react";
import { render } from "react-dom";
import Client from "./Client";
import ClientForm from "./ClientForm";

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
    const clients = [...this.state.clients];
    //index cherche l'id correspondant au client puis l'on retire
    //le client correspondant
    const index = clients.findIndex(client => client.id === id);
    clients.splice(index, 1);
    this.setState({ clients });
  };

  //utiliser des foncitons flechées pour de meilleurs performance//
  handleClick = e => {
    e.preventDefault();
    this.setState({ compteur: this.state.compteur + 1 });
  };

  handleAdd = client => {
    //définition de nos objets state
    const clients = [...this.state.clients];
    //ajout plus changement du state
    clients.push(client);
    this.setState({ clients });
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
            <Client
              key={client.id}
              infosClient={client}
              onDelete={this.handleDelete}
            />
          ))}
        </ul>
        <ClientForm onClientAdd={this.handleAdd} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
