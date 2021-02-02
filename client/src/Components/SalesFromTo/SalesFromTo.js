import React from "react";
import classes from "./SalesFromTo.module.css";
import { useState, useEffect } from "react";
import PrintButton from "../PrintButton/PrintButton";

const SalesFromTo = (props) => {
  const [popular, setPopular] = useState([]);
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const query = "salesfromto";

  const SalesFromTo = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:5000/${query}/${from}/${to}`);
      const data = await res.json();

      setPopular(data);
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className={classes.button}>

      <div className={classes.prints}>
        <button
          type="button"
          class="btn btn-primary btn-sm"
          data-toggle="modal"
          data-target="#myModal2"
        >
          {props.title}
        </button>
      </div>

      <div class="modal" id="myModal2">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 className={classes.modaltitle}>{props.name}</h4>
              <div className={classes.forprint}>
                <span>&#8986; &#8986; &#8986; &#8986; &#8986; &#8986; &#8986; &#8986; &#8986; &#8986; &#8986; &#8986; &#8986; &#8986;</span>
                <span>&#8986;Отчёт по продажам магазина "STATUS" за выбранный срок</span>
              </div>
              <div className={classes.prints}>
                <button type="button" class="close" data-dismiss="modal">
                  &times;
                </button>
              </div>
            </div> 

            <div class="modal-body">
              <div className={classes.container}>
                <div className={classes.fromTo}>
                  <label>С: &#8195; </label>
                  <input
                    value={from}
                    type="date"
                    onChange={(e) => setFrom(e.target.value)}
                  />
                </div>

                <div className={classes.fromTo}>
                  <label>По: &#8195; </label>
                  <input
                    type="date"
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                  />
                </div>

                <div className={classes.prints}>
                  <button
                    type="submit"
                    className="btn btn-dark btn-sm"
                    onClick={(e) => SalesFromTo(e)}
                  >
                    Просмотреть
                  </button>
                </div>
              </div>

              <table class="highlight">
                <thead>
                  <tr>
                    <th>Код заказа</th>
                    <th>Дата заказа</th>
                    <th>Код клиента</th>
                  </tr>
                </thead>
                <tbody>
                  {popular.map((info) => (
                    <tr key={info.order_id}>
                      <td>{info.order_id}</td>
                      <td>{info.date_of_sale.slice(0, 10)}</td>
                      <td>{info.client_id}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <span className={classes.ps}>{props.ps}</span>
            </div>

            <div class="modal-footer">
              <div className={classes.prints}>
                <PrintButton />
              </div>
              <div className={classes.prints}>
                <button
                  type="button"
                  class="btn btn-danger"
                  data-dismiss="modal"
                >
                  Закрыть
                </button>
              </div>
              <div className={classes.forprint1}>
                    <span>Какой-то текст, возможно здесь будет что-то полезное, но вообще он написан в качестве заглушки</span>
                    
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesFromTo;
