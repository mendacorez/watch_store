import React from 'react';
import { Switch, Route } from 'react-router-dom'
import ClientPage from '../../ClientPage/ClientPage';
import AdminPage from '../../AdminPage/AdminPage';
import Clients from '../../Components/Clients/Clients'
import ListOfGoods from '../ListOfGoods/ListOfGoods';
import Gender from '../Gender/Gender';
import Color from '../Color/Color';
import StrapType from '../StrapType/StrapType';
import StrapSize from '../StrapSize/StrapSize';
import MechanismType from '../MechanismType/MechanismType';
import WatchManufacturer from '../WatchManufacturer/WatchManufacturer';
import ManufacturerCountry from '../ManufacturerCountry/ManufacturerCountry';
import OrderDetails from '../OrderDetails/OrderDetails';
import Orders from '../Orders/Orders';
import ListOfGoodsClient from '../../Components/ListOfGoodsClient/ListOfGoodsClient'
import classes from './Main.module.css'
import Registration from '../Registration/Registration';
import ClientOrders from '../ClientOrders/ClientOrders';

const Main = () => (
  <main className={classes.main}>
    <Switch>
      <Route exact path='/clientpage' component={ClientPage}/>
    </Switch>
    <Switch>
      <Route exact path='/clientpage/listofgoodsclient' component={ListOfGoodsClient}/>
    </Switch>
    <Switch>
      <Route exact path='/clientpage/registration' component={Registration}/>
    </Switch>
    <Switch>
      <Route exact path='/clientpage/orderdetail' component={ClientOrders}/>
    </Switch>

    <Switch className="router">
      <Route exact path='/adminpage' component={AdminPage}/>
    </Switch>
    <Switch className="router">
      <Route exact path='/adminpage/listofgoodsadmin' component={ListOfGoods}/>
    </Switch>
    <Switch className="router">
      <Route exact path='/adminpage/clients' component={Clients}/>
    </Switch>
    <Switch className="router">
      <Route exact path='/adminpage/gender' component={Gender}/>
    </Switch>
    <Switch className="router">
      <Route exact path='/adminpage/color' component={Color}/>
    </Switch>
    <Switch className="router">
      <Route exact path='/adminpage/straptype' component={StrapType}/>
    </Switch>
    <Switch className="router">
      <Route exact path='/adminpage/strapsize' component={StrapSize}/>
    </Switch>
    <Switch className="router">
      <Route exact path='/adminpage/mechanismtype' component={MechanismType}/>
    </Switch>
    <Switch className="router">
      <Route exact path='/adminpage/watchmanufacturer' component={WatchManufacturer}/>
    </Switch>
    <Switch className="router">
      <Route exact path='/adminpage/manufacturercountry' component={ManufacturerCountry}/>
    </Switch>
    <Switch className="router">
      <Route exact path='/adminpage/orderdetails' component={OrderDetails}/>
    </Switch>
    <Switch className="router">
      <Route exact path='/adminpage/orders' component={Orders}/>
    </Switch>
  </main>
)

export default Main;

