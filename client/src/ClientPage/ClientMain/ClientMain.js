import React from 'react';
import { Switch, Route } from 'react-router-dom'
import ClientOrders from '../../Components/ClientOrders/ClientOrders';
import ListOfGoodsClient from '../../Components/ListOfGoodsClient/ListOfGoodsClient';
import Registration from '../../Components/Registration/Registration';
import classes from './ClientMain.module.css';

const ClientMain = () => (
  <main className={classes.main}>
    <Switch>
      <Route exact path='/clientpage/listofgoodsclient' component={ListOfGoodsClient}/>
      <Route exact path='/clientpage/registration' component={Registration}/>
      <Route exact path='/clientpage/orderdetail' component={ClientOrders}/>
    </Switch>
  </main>
)

export default ClientMain;

