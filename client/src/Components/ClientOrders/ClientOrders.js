import React from "react";
import classes from "./ClientOrders.module.css";
import OrderDetails from "../OrderDetails/OrderDetails";
import Orders from "../Orders/Orders";
import ClientOrdersAdd from "./ClientOrdersAdd/ClientOrdersAdd";

const ClientOrders = () => {
  return (
    <div className={classes.tables}>
      <Orders />
      <div style={{ marginTop: "70px" }}>
        <OrderDetails />
      </div>
      <div style={{ marginTop: "90px" }}>
        <ClientOrdersAdd />
      </div>
    </div>
  );
};

export default ClientOrders;
