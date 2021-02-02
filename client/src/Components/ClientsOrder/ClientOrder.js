import React from "react";
import classes from "./ClientOrder.module.css";
import { useState, useEffect } from "react";
import ClientSelect from "../Selects/ClientSelect/ClientSelect";

const ClientOrder = (props) => {
  const [popular, setPopular] = useState([]);
  const query = "clientorder";
  const [data, setData] = useState([]);
  const [clientId, setClientId] = useState(1)


    useEffect(() => {
       getData();
    }, [clientId]);

    const getData = async () => {
        const get = await fetch(`http://localhost:5000/clients-order/${clientId}`);
        const parsedData = await get.json();

        console.log(parsedData);;

        setData(parsedData);
    };

  return (
    <div className={classes.button}>
      <div className={classes.print}>
        <button
        type="button"
        class="btn btn-primary btn-sm"
        data-toggle="modal"
        data-target="#myModal3"
      >
        {props.title}
      </button>
      </div>
      

      <div class="modal" id="myModal3">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">{props.name}</h4>
              <div className={classes.print}>
                <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
              </div>
              
            </div>

            <div class="modal-body">
                <span>{popular}</span>
                <ClientSelect 
                    address="clients"
                    value={clientId}
                    onChange={(e) => setClientId(e.target.value)}
                />


              <table class="highlight">
                <thead>
                  <tr>
                    <th>Код клиента</th>
                    <th>Количество заказов</th>
                  </tr>
                </thead>
                <tbody>
                  {
                  data.map((info) => {
                      console.log('mapping');
                      
                      return(
                          <tr key={info.client_id}>
                      <td>{info.client_id}</td>
                      <td>{info.count}</td>
                    </tr>
                      )
                
                  })
                }
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

export default ClientOrder;
