import React from "react";
import classes from "./TheMostActiveClient.module.css";
import { useState, useEffect } from "react";

const TheMostActiveClient = (props) => {
  const [popular, setPopular] = useState([]);
  const query = "themostactiveclient";

  const getPopular = async () => {
    try {
      const response = await fetch(`http://localhost:5000/${query}`);
      const jsonData = await response.json();
      setPopular(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getPopular();
  }, [query]);


  return (
    <div className={classes.button}>
      <button
        type="button"
        class="btn btn-primary btn-sm"
        data-toggle="modal"
        data-target="#myModal1"
      >
        {props.title}
      </button>

      <div class="modal" id="myModal1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">{props.name}</h4>
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div class="modal-body">
              <table class="highlight">
                <thead>
                  <tr>
                    <th>Код клиента</th>
                    <th>ФИО клиента</th>
                    <th>Количество заказов</th>
                  </tr>
                </thead>
                <tbody>
                  {popular.map((info) => (
                    <tr key={info.client_id}>
                      <td>{info.client_id}</td>
                      <td>{info.fullname}</td>
                      <td>{info.count_or_orders}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <span className={classes.ps}>{props.ps}</span>
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-dismiss="modal">
                Закрыть
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheMostActiveClient;