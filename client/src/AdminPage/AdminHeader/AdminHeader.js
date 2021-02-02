import React from "react";
import { NavLink } from "react-router-dom";
import ClientOrder from "../../Components/ClientsOrder/ClientOrder";
import SalesFromTo from "../../Components/SalesFromTo/SalesFromTo";
import TheMostActiveClient from "../../Components/TheMostActiveClient/TheMostActiveClient";
import TheMostPopularWatch from "../../Components/TheMostPopularWatch/TheMostPopularWatch";
import classes from "./AdminHeader.module.css";

const AdminHeader = () => {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();
  today = dd + "." + mm + "." + yyyy;

  return (
    <div className={classes.AdminHeader}>
      <nav className={classes.nav}>
        <NavLink to="adminpage/listofgoodsadmin" className={classes.button1}>
          СПИСОК ТОВАРОВ
        </NavLink>
        <NavLink to="adminpage/clients" className={classes.button1}>
          КЛИЕНТЫ
        </NavLink>
        <NavLink to="adminpage/gender" className={classes.button1}>
          ГЕНДЕР
        </NavLink>
        <NavLink to="adminpage/color" className={classes.button1}>
          ЦВЕТ
        </NavLink>
        <NavLink to="adminpage/straptype" className={classes.button1}>
          ТИП РЕМЕШКА
        </NavLink>
        <NavLink to="adminpage/strapsize" className={classes.button1}>
          РАЗМЕР РЕМЕШКА
        </NavLink>
        <NavLink to="adminpage/mechanismtype" className={classes.button1}>
          ТИП МЕХАНИЗМА
        </NavLink>
        <NavLink to="adminpage/watchmanufacturer" className={classes.button1}>
          ПРОИЗВОДИТЕЛЬ
        </NavLink>
        <NavLink to="adminpage/manufacturercountry" className={classes.button1}>
          СТРАНА ПРОИЗВОДИТЕЛЯ
        </NavLink>
        <NavLink to="adminpage/orderdetails" className={classes.button1}>
          ДЕТАЛИ ЗАКАЗА
        </NavLink>
        <NavLink to="adminpage/orders" className={classes.button1}>
          ЗАКАЗЫ
        </NavLink>

        <TheMostPopularWatch
          title={"Топ-3 популярных моделей"}
          name={"Топ-3 популярных моделей"}
          ps={`Информация актуальна на ${today}`}
        />

        <TheMostActiveClient
          title={"Самый активный клиент"}
          name={"Самый активный клиент"}
          ps={`Информация актуальна на ${today}`}
        />

        <SalesFromTo
          title={"Заказы за определённый промежуток времени"}
          name={"Заказы за промежуток"}
          ps={`Информация актуальна на ${today}`}
        />

        <ClientOrder
          title={"Покупки конкретного клиента за всё время"}
          name={"Покупки конкретного клиента за всё время"}
          ps={`Информация актуальна на ${today}`}
        />
      </nav>
    </div>
  );
};

export default AdminHeader;
