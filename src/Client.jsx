import React from "react";

class Client extends React.Component {
  render() {
    //const infosClient = this.props.infosClient;
    //const onDelete = this.props.onDelete;
    const { infosClient, onDelete } = this.props;
    return (
      <li>
        {infosClient.nom}
        <button onClick={() => onDelete(infosClient.id)}>X</button>
      </li>
    );
  }
}

export default Client;

/*Or

const Client = ({ details, onDelete }) => (
  <li>
    {details.nom} <button onClick={() => onDelete(details.id)}>X</button>
  </li>
);

export default Client;
*/
