import React, { Component } from "react";
import { render } from "react-dom";

class App extends React.Component {
  state = {
    clients: [
      { id: 1, nom: "Jacobson" },
      { id: 2, nom: "Spice inc" },
      { id: 3, nom: "Domo Bank" }
    ]
  };

  handleClick(e) {
    alert("Bonjour");
  }

  render() {
    const title = "Liste des clients";

    return (
      <div>
        <h1>{title}</h1>
        <button onClick={this.handleClick}>click me</button>
        <ul>
          {this.state.clients.map(client => (
            <li>
              {client.nom}
              <button>X</button>
            </li>
          ))}
        </ul>
        <form>
          <input type="text" placeholder="ajouter un client" />
          <button>Confirmer</button>
        </form>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
