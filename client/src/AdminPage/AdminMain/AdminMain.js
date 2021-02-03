import React from "react";
import { Switch, Route } from "react-router-dom";
import ListOfGoods from "../../Components/ListOfGoods/ListOfGoods";
import classes from "./AdminMain.module.css";
import Clients from "../../Components/Clients/Clients";
import Gender from "../../Components/Gender/Gender";
import Color from "../../Components/Color/Color";
import StrapType from "../../Components/StrapType/StrapType";
import StrapSize from "../../Components/StrapSize/StrapSize";
import MechanismType from "../../Components/MechanismType/MechanismType";
import WatchManufacturer from "../../Components/WatchManufacturer/WatchManufacturer";
import ManufacturerCountry from "../../Components/ManufacturerCountry/ManufacturerCountry";
import OrderDetails from "../../Components/OrderDetails/OrderDetails";
import Orders from "../../Components/Orders/Orders";

const AdminMain = () => (
  <main className={classes.main}>
    <Switch>
      <Route exact path="/adminpage/listofgoodsadmin" component={ListOfGoods} />

      <Route exact path="/adminpage/clients" component={Clients} />

      <Route exact path="/adminpage/gender" component={Gender} />

      <Route exact path="/adminpage/color" component={Color} />

      <Route exact path="/adminpage/straptype" component={StrapType} />

      <Route exact path="/adminpage/strapsize" component={StrapSize} />

      <Route exact path="/adminpage/mechanismtype" component={MechanismType} />

      <Route
        exact
        path="/adminpage/watchmanufacturer"
        component={WatchManufacturer}
      />

      <Route
        exact
        path="/adminpage/manufacturercountry"
        component={ManufacturerCountry}
      />

      <Route exact path="/adminpage/orderdetails" component={OrderDetails} />

      <Route exact path="/adminpage/orders" component={Orders} />
    </Switch>
  </main>
);

export default AdminMain;
