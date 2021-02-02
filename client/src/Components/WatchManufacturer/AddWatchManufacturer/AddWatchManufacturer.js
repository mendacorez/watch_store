import React, { useState } from "react";
import classes from "./AddWatchManufacturer.module.css";
import CountrySelect from "../../Selects/CountrySelect/CountrySelect";

const AddWatchManufacturer = () => {
  const [company_name, setCompany_name] = useState("");
  const [manufacturer_country_id, setManufacturer_country_id] = useState("");
  const [company_tel, setСompany_tel] = useState("");
  const [company_email, setСompany_email] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = {
        company_name,
        manufacturer_country_id,
        company_tel,
        company_email,
      };
      const response = await fetch("http://localhost:5000/watchmanufacturer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log(response);
    } catch (err) {
      console.error(err.message);
    }
    window.location = "/adminpage/watchmanufacturer";
  };

  return (
    <div className={classes.block}>
      <form className={classes.form} onSubmit={onSubmitForm}>
        <h1 className={classes.AddListOfGoods}>Добавление производителя</h1>
        <label>Название компании:</label>
        <input
          required
          type="text"
          className={classes.formControl}
          value={company_name}
          onChange={(e) => setCompany_name(e.target.value)}
        />
        <label>Страна производителя:</label>
        <CountrySelect
          address="manufacturercountry"
          value={manufacturer_country_id}
          onChange={(e) => setManufacturer_country_id(e.target.value)}
        />
        <label>Телефонный номер производителя:</label>
        <input
          required
          type="text"
          className={classes.formControl}
          value={company_tel}
          onChange={(e) => setСompany_tel(e.target.value)}
        />
        <label>Электронная почта производителя:</label>
        <input
          required
          type="text"
          className={classes.formControl}
          value={company_email}
          onChange={(e) => setСompany_email(e.target.value)}
        />

        <button class="button btn-success">Добавить</button>
      </form>
    </div>
  );
};

export default AddWatchManufacturer;
