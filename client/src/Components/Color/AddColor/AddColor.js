import React, { Fragment, useState } from "react";
import classes from "./AddColor.module.css";

const AddColor = () => {
    const [color_name, setColorname] = useState("");
  
    const onSubmitForm = async (e) => {
      e.preventDefault();
      try {
        const body = {
          color_name
        };
        const response = await fetch("http://localhost:5000/color", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
        console.log(response);
      } catch (err) {
        console.error(err.message);
      }
      window.location = "/adminpage/color"
    };
  
    return (
      <div className={classes.block}>
        <form className={classes.form} onSubmit={onSubmitForm}>
        <h1 className={classes.AddListOfGoods}>Добавление цвета</h1>
          <label>Цвет:</label>
          <input
            type="text"
            className={classes.formControl}
            value={color_name}
            onChange={(e) => setColorname(e.target.value)}
            required
          />
          <button class="button btn-success">
            Добавить
          </button>
        </form>
      </div>
    );
  };
  
  export default AddColor;