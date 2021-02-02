import React, { useState } from "react";
import classes from "./AddManufacturerCountry.module.css";

const AddManufacturerCountry = () => {
    const [country, setCountry] = useState("");
    
    const onSubmitForm = async (e) => {
      e.preventDefault();
      try {
        const body = {
            country
        };
        const response = await fetch("http://localhost:5000/manufacturercountry", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
        console.log(response);
      } catch (err) {
        console.error(err.message);
      }
      window.location = "/adminpage/manufacturercountry"
    };
  
    return (
      <div className={classes.block}>
        <form className={classes.form} onSubmit={onSubmitForm}>
        <h1 className={classes.AddListOfGoods}>Добавление страны производителя</h1>
          <label>Страна производителя:</label>
          <input
            required
            type="text"
            className={classes.formControl}
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
          <button class="button btn-success">
            Добавить
          </button>
        </form>
      </div>
    );
  };
  
  export default AddManufacturerCountry;