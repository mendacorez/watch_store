import { Divider } from "@material-ui/core";
import React, { useState } from "react";
import classes from "./Registration.module.css";

const Registration = () => {
  const [fullname, setFullname] = useState("");
  const [client_tel, setClient_tel] = useState("");
  const [client_email, setClient_email] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    console.log("submit");
    try {
      const clientsFetch = await fetch("http://localhost:5000/clients");
      const clients = await clientsFetch.json();

      const body = {
        fullname,
        client_tel,
        client_email,
      };

      const responseAdd = await fetch("http://localhost:5000/clients", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      // const responseEmail = await fetch("http://localhost:5000/email", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(body),
      // });

      //email
    } catch (err) {
      console.error(err.message);
    }
    window.location = "/clientpage/registration";
  };

  return (
    <div className={classes.block}>
      <form className={classes.form} onSubmit={onSubmitForm}>
        <h1 className={classes.AddListOfGoods}>Регистрация</h1>

        <label>ФИО:</label>
        <input
          required
          className={classes.formControl}
          type="text"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
        />

        <label>Номер телефона:</label>
        <input
          required
          className={classes.formControl}
          type="tel"
          value={client_tel}
          onChange={(e) => setClient_tel(e.target.value)}
        />

        <label>Электронная почта:</label>
        <input
          required
          className={classes.formControl}
          type="email"
          value={client_email}
          onChange={(e) => setClient_email(e.target.value)}
        />
        <button class="button btn-success">Зарегестрироваться</button>
      </form>
    </div>
  );
};

export default Registration;
