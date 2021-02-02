import React, { useState } from "react";
import classes from "./ClientOrdersAdd.module.css";
import GoodSelect from "../../Selects/GoodSelect/GoodSelect";
import ClientSelect from "../../Selects/ClientSelect/ClientSelect";

const ClientOrdersAdd = () => {
  const [order_id, setOrder_id] = useState();
  const [watch_id, setWatch_id] = useState();
  const [watch_quantity_in_order, setWatch_quantity_in_order] = useState();
  const [client_id, setClient_id] = useState();

  // const [date_of_sale, setDate_of_sale] = useState("");
  console.log(typeof order_id);
  // console.log(typeof );

  const onSubmitForm1 = async (e) => {
    e.preventDefault();
    console.log("submit");
    try {
      const clientsFetch = await fetch(
        "http://localhost:5000/listofgoodsadmin"
      );
      const clients = await clientsFetch.json();
      const date = new Date().toJSON().slice(0, 10).replace(/-/g, "/");

      const bodyOrders = {
        order_id,
        client_id,
        date,
      };

      const responseAdd = await fetch("http://localhost:5000/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bodyOrders),
      });
    } catch (err) {
      console.error(err.message);
    }
    window.location = "/clientpage/orderdetail";
  };

  const onSubmitForm2 = async (e) => {
    e.preventDefault();
    console.log("submit");
    try {
      const clientsFetch = await fetch(
        "http://localhost:5000/listofgoodsadmin"
      );
      const clients = await clientsFetch.json();

      const bodyOrderDetails = {
        order_id,
        watch_id,
        watch_quantity_in_order,
      };

      const responseAdd2 = await fetch("http://localhost:5000/orderdetails", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bodyOrderDetails),
      });
    } catch (err) {
      console.error(err.message);
    }
    window.location = "/clientpage/orderdetail";
  };

  return (
    <div className={classes.block}>
      <form className={classes.form} onSubmit={onSubmitForm1}>
        <h1 className={classes.AddListOfGoods}>Сгенерировать заказ</h1>
        <span>
          <h3>
            <em>Инструкция по формированию заказа!</em>
          </h3>
          <ul>
            <li>
              <em>
                Создайте заказ, заполнив все поля формы{" "}
                <b>"Сгенерировать заказ"</b> и нажав на соответствующую кнопку{" "}
                <b>"Создать заказ"</b>
              </em>
            </li>
            <li>
              <em>
                Перейдите к форме <b>"Добавить детали заказа"</b>
              </em>
            </li>
            <li>
              <em>
                Внесинте в Ваш заказ соответсвующие данные и нажмите на кнопку{" "}
                <b>"Добавить"</b>
              </em>
            </li>
          </ul>
        </span>

        <label>ФИО покупателя:</label>
        <ClientSelect
          address="clients"
          value={client_id}
          onChange={(e) => setClient_id(e.target.value)}
        />

        <button class="button btn-success">Cоздать заказ</button>
      </form>
      <form className={classes.form} onSubmit={onSubmitForm2}>
        <h1 className={classes.AddListOfGoods}>Добавить детали заказа</h1>

        <label>Номер Вашего заказа:</label>
        <input
        className={classes.formControl}
          required
          type="number"
          value={order_id}
          onChange={(e) => setOrder_id(e.target.value)}
        />
        <label>Модель часов:</label>
        <GoodSelect
          address="listofgoodsadmin"
          value={watch_id}
          onChange={(e) => setWatch_id(e.target.value)}
        />
        <label>Количество:</label>
        <input
        className={classes.formControl}
          required
          type="number"
          value={watch_quantity_in_order}
          onChange={(e) => setWatch_quantity_in_order(e.target.value)}
        />

        <button class="button btn-success">Добавить</button>
      </form>
    </div>
  );
};

export default ClientOrdersAdd;
