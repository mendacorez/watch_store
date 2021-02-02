import React, { Fragment, useState, useEffect } from "react";
import classes from "./Clients.module.css";
import UpdateClients from "../Clients/UpdateClients/UpdateClients";
import AddClients from "./AddClients/AddClients";

const Clients = () => {
  const [clients, setClients] = useState([]);
  const [query, setQuery] = useState("clients");
  const [search, setSearch] = useState("");

  //get all goods
  const getClients = async () => {
    try {
      const response = await fetch("http://localhost:5000/clients");
      const jsonData = await response.json();
      setClients(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getClients();
  }, [query]);

  //delete good
  const deleteClient = async (client_id) => {
    try {
      const deleteClient = await fetch(
        `http://localhost:5000/clients/${client_id}`,
        {
          method: "DELETE",
        }
      );

      console.log(deleteClient);
    } catch (err) {
      console.error(err.message);
    }

    setClients(clients.filter((clients) => clients.client_id !== client_id));
  };

  const searchHandler = async (query) => {
    if (query.length) {
      try {
        const result = await fetch(
          `http://localhost:5000/clients/search/${query}`
        );
        const response = await result.json();

        setSearch(query);
        setClients(response);
      } catch (e) {
        console.log(e.message);
      }
    } else {
      await getClients();
    }
  };

  return (
    <Fragment>
      <h1>Клиенты</h1>

      <div className={classes.search}>
        <label>Поиск по имени</label>
        <input
          name="watchSearch"
          minLength={1}
          type="text"
          onChange={(e) => searchHandler(e.target.value)}
        />
      </div>

      <table class="highlight">
        <thead>
          <tr>
            <th>ФИО</th>
            <th>Номер телефона</th>
            <th>Электронная почта</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr key={client.client_id}>
              <td>{client.fullname}</td>
              <td>{client.client_tel}</td>
              <td>{client.client_email}</td>
              {/* <UpdateClients client = {client} /> */}
              <button
                class="btn btn-danger btn-sm"
                onClick={() => deleteClient(client.client_id)}
              >
                &#128465;
              </button>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default Clients;
