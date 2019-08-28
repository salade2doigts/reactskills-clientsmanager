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

  //utiliser des foncitons flechées pour de meilleurs performance//
  handleClick = e => {
    console.log(this.state.clients);
    this.setState({ compteur: this.state.compteur + 1 });
    /* let clients = this.state.clients.slice();
   clients.push({ id: 3, nom: "Domo Bank" });
    this.setState({clients});*/
  };

  handleClient = () => {
    //
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
            <li>
              {client.nom}
              <button>X</button>
            </li>
          ))}
        </ul>
        <form>
          <input type="text" placeholder="ajouter un client" />
          <button onClick={this.handleClick}>Confirmer</button>
        </form>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
