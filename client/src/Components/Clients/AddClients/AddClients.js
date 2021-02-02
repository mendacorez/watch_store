import React, { Fragment, useState } from "react";
import classes from "./AddClients.module.css";

const AddClients = () => {
    const [fullname, setFullname] = useState("");
    const [client_tel, setClient_tel] = useState("");
    const [client_email, setClient_email] = useState("");
  
    const onSubmitForm = async (e) => {
      e.preventDefault();
      try {
        const body = {
          fullname,
          client_tel,
          client_email
        };
        const response = await fetch("http://localhost:5000/clients", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
        console.log(response);
      } catch (err) {
        console.error(err.message);
      }
      window.location = "/adminpage/clients"
    };
  
    return (
      <div className={classes.block}>
        <form className={classes.form} onSubmit={onSubmitForm}>
        <h1 className={classes.AddListOfGoods}>Регистрация клиента</h1>
          <label>ФИО:</label>
          <input
            type="text"
            className={classes.formControl}
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
          <label>Номер телефона:</label>
          <input
            type="text"
            className={classes.formControl}
            value={client_tel}
            onChange={(e) => setClient_tel(e.target.value)}
          />
          <label>Электронная почта:</label>
          <input
            type="text"
            className={classes.formControl}
            value={client_email}
            onChange={(e) => setClient_email(e.target.value)}
          />
          
          <button class="button btn-success">
            Добавить
          </button>
        </form>
      </div>
    );
  };
  
  export default AddClients;