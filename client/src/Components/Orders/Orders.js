import React, { Fragment, useState, useEffect } from "react";
import classes from "./Orders.module.css";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  //get all
  const getOrders = async () => {
    try {
      const response = await fetch(`http://localhost:5000/orders`);
      const jsonData = await response.json();
      setOrders(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <Fragment>
      <h1>Заказы</h1>
      <table className={classes.highlight}>
        <thead>
          <tr>
            <th>Номер заказа</th>
            <th>Дата заказа</th>
            <th>Клиент</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.order_id}>
              <td>{order.order_id}</td>
              <td>{order.date_of_sale.slice(0, 10)}</td>
              <td>{order.client_id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default Orders;
