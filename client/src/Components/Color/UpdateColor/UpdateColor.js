import React, { Fragment, useState } from "react";
import classes from "./UpdateColor.module.css";

const UpdateColor = ({ color }) => {
  const [color_name, setColor_name] = useState(color.color_name);
  const Update = async (e) => {
    e.preventDefault();
    try {
      const body = {
       color_name
      };
      const response = await fetch(
        `http://localhost:5000/color/${color.color_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      console.log(response);
      window.location = "/adminpage/color";
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
        data-target={`#color_id${color.color_id}`}
      >
        &#9998;
      </button>

      <div class="modal" id={`color_id${color.color_id}`}>
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
                <label>Название:</label>
                <input
                  type="text"
                  className="form-control"
                  value={color_name}
                  onChange={(e) => setColor_name(e.target.value)}
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
              <button type="button" class="btn btn-danger" data-dismiss="modal">
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

export default UpdateColor;
