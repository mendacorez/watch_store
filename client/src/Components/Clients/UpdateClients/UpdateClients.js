import React, { Fragment, useState } from "react";
import classes from "./UpdateClients.module.css";

const UpdateClients = ({ client }) => {
  const [fullname, setFullname] = useState(client.fullname);
  const [client_tel, setClient_tel] = useState(client.client_tel);
  const [client_email, setClient_email] = useState(client.client_email);

  const Update = async (e) => {
    e.preventDefault();
    try {
      const body = {
        fullname,
        client_tel,
        client_email
      };
      const response = await fetch(
        `http://localhost:5000/clients/${client.client_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      console.log(response);
      window.location = "/adminpage/clients";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <button
        type="button"
        class="btn btn-warning btn-sm"
        data-toggle="modal"
        data-target={`#client_id${client.client_id}`}
      >
        &#9998;
      </button>

      <div class="modal" id={`client_id${client.client_id}`}>
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Редактирование</h4>
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div class="modal-body">
              <div className={classes.block}>
                <label>ФИО:</label>
                <input
                  type="text"
                  className="form-control"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                />
              </div>

              <div className={classes.block}>
                <label>Телефон:</label>
                <input
                  type="text"
                  className="form-control"
                  value={client_tel}
                  onChange={(e) => setClient_tel(e.target.value)}
                />
              </div>

              <div className={classes.block}>
                <label>Электронная почта:</label>
                <input
                  type="text"
                  className="form-control"
                  value={client_email}
                  onChange={(e) => setClient_email(e.target.value)}
                />
              </div>

              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-warning"
                  data-dismiss="modal"
                  onClick={(e) => Update(e)}
                >
                  Редактировать
                </button>
                <button
                  type="button"
                  class="btn btn-danger"
                  data-dismiss="modal"
                >
                  Закрыть
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default UpdateClients;
