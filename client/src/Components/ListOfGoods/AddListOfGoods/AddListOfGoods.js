import React, { useState } from "react";
import ManufacturerSelect from "../../Selects/ManufacturerSelect/ManufacturerSelect";
import MechanismSelect from "../../Selects/MechanismSelect/MechanismSelect";
import StrapSelect from '../../Selects/StrapSelect/StrapSelect';
import ColorSelect from '../../Selects/ColorSelect/ColorSelect';
import GenderSelect from '../../Selects/GenderSelect/GenderSelect';
import classes from "./AddListOfGoods.module.css";

const AddListOfGoods = () => {
  const [watch_name, setWatch_name] = useState("");
  const [manufacturer_id, setManufacturer_id] = useState("");
  const [mechanism_type_id, setMechanism_type_id] = useState("");
  const [strap_type_id, setStrap_type_id] = useState("");
  const [color_id, setColor_id] = useState("");
  const [gender_id, setGender_id] = useState("");
  const [watch_price, setWatch_price] = useState("");
  const [discount_size, setDiscount_size] = useState("");
  const [watch_quantity, setWatch_quantity] = useState("");


  const onSubmitForm = async (e) => {
    e.preventDefault();
    console.log('submit');
    try {
      const clientsFetch = await fetch ("http://localhost:5000/listofgoodsadmin")
      const clients = await clientsFetch.json();

      const priceWithDiscount = watch_price - watch_price*discount_size/100;

      const body = {
        watch_name,
        manufacturer_id,
        mechanism_type_id,
        strap_type_id,
        color_id,
        gender_id,
        watch_price,
        discount_size,
        priceWithDiscount,
        watch_quantity,
        clients
      };



      const responseAdd = await fetch("http://localhost:5000/listofgoodsadmin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      
    

      const responseEmail = await fetch("http://localhost:5000/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

    } catch (err) {
      console.error(err.message);
    }
    alert('Письмо с рекламой отправлено всем клиентам!')
    window.location.reload()
  };


  return (
    <div className={classes.block}>
      {/* <button onClick={Email}>Send email</button>   */}
      <form className={classes.form} onSubmit={onSubmitForm}>
        <h1 className={classes.AddListOfGoods}>Добавить товар</h1>
        <label>Название товара:</label>
        <input
          required
          type="text"
          minLength='5'
          maxLength='15'
          className={classes.formControl}
          value={watch_name}
          onChange={(e) => setWatch_name(e.target.value)}
        />

        <label>Производитель:</label>
        <ManufacturerSelect
          address="watchmanufacturer"
          value={manufacturer_id}
          onChange={(e) => setManufacturer_id(e.target.value)}
        />

        <label>Тип механизма:</label>
        <MechanismSelect
          address="mechanismtype"
          value={mechanism_type_id}
          onChange={(e) => setMechanism_type_id(e.target.value)}
        />
        <label>Тип ремешка:</label>
        <StrapSelect
          address="straptype"
          value={strap_type_id}
          onChange={(e) => setStrap_type_id(e.target.value)}
        />
        <label>Цвет:</label>
        <ColorSelect
          address="color"
          value={color_id}
          onChange={(e) => setColor_id(e.target.value)}
        />
        <label>Пол:</label>
        <GenderSelect
          address="gender"
          value={gender_id}
          onChange={(e) => setGender_id(e.target.value)}
        />

        <label>Цена:</label>
        <input
          required
          pattern='[0-9]{,8}'
          type="text"
          className={classes.formControl}
          value={watch_price}
          onChange={(e) => setWatch_price(e.target.value)}
        />
        <label>Размер скидки:</label>
        <input
          required
          minLength = '1'
          maxLength = '2'
          type="text"
          className={classes.formControl}
          value={discount_size}
          onChange={(e) => setDiscount_size(e.target.value)}
        />
        <label>Количество:</label>
        <input
          required
          type="text"
          className={classes.formControl}
          value={watch_quantity}
          onChange={(e) => setWatch_quantity(e.target.value)}
        />

        <button class="button btn-success">Добавить</button>
      </form>
    </div>
  );
};

export default AddListOfGoods;
