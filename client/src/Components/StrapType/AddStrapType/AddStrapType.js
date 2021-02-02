import React, { Fragment, useState } from "react";
import classes from "./AddStrapType.module.css";
import SizeSelect from "../../Selects/SizeSelect/SizeSelect";
import ColorSelect from '../../Selects/ColorSelect/ColorSelect';;

const AddStrapType = () => {
  const [strap_type, setStrap_type] = useState("");
  const [size_id, setSize_id] = useState("");
  const [color_id, setColor_id] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = {
        strap_type,
        size_id,
        color_id,
      };
      const response = await fetch("http://localhost:5000/straptype", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log(response);
    } catch (err) {
      console.error(err.message);
    }
    window.location = "/adminpage/straptype";
  };

  return (
    <div className={classes.block}>
      <form className={classes.form} onSubmit={onSubmitForm}>
        <h1 className={classes.AddListOfGoods}>Добавление типа ремешка</h1>
        <label>Тип ремешка:</label>
        <input
          required
          type="text"
          className={classes.formControl}
          value={strap_type}
          onChange={(e) => setStrap_type(e.target.value)}
        />
        <label>Размер:</label>
        <SizeSelect
          address="strapsize"
          value={size_id}
          onChange={(e) => setSize_id(e.target.value)}
        />
        <label>Цвет:</label>
        <ColorSelect
          address="color"
          value={color_id}
          onChange={(e) => setColor_id(e.target.value)}
        />

        <button class="button btn-success">Добавить</button>
      </form>
    </div>
  );
};

export default AddStrapType;
