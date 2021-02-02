import React from "react";
import classes from "./TheMostPopularWatch.module.css";
import { useState, useEffect } from "react";
import PrintButton from "../PrintButton/PrintButton";

const TheMostPopularWatch = (props) => {
  const [popular, setPopular] = useState([]);
  const query = "themostpopularwatch";

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
      <div className={classes.button1}>
        <button
          type="button"
          class="btn btn-primary btn-sm"
          data-toggle="modal"
          data-target="#myModal"
        >
          {props.title}
        </button>
      </div>

      <div class="modal" id="myModal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 className={classes.modaltitle}>{props.name}</h4>
              <div className={classes.forprint}>
              <span>&#8986; &#8986; &#8986; &#8986; &#8986; &#8986; &#8986; &#8986; &#8986; &#8986; &#8986; &#8986; &#8986; &#8986;</span>
                <span>Отчёт по тройке самых ходовы моделей часов магазина "STATUS"</span>
              </div>
              <div className={classes.button1}>
                <button type="button" class="close" data-dismiss="modal">
                  &times;
                </button>
              </div>
            </div>

            <div class="modal-body">
              <table class="highlight">
                <thead>
                  <tr>
                    <th>Код модели</th>
                    <th>Название модели</th>
                    <th>Количество проданных единиц</th>
                  </tr>
                </thead>
                <tbody>
                  {popular.map((info) => (
                    <tr key={info.watch_id}>
                      <td>{info.watch_id}</td>
                      <td>{info.watch_name}</td>
                      <td>{info.watch_quantity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <span className={classes.ps}>{props.ps}</span>
            </div>

            <div class="modal-footer">
              <PrintButton />
              <div className={classes.button1}>
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

export default TheMostPopularWatch;
