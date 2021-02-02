import React, { Fragment, useState } from "react";
import classes from "./UpdateStrapType.module.css";
import SizeSelect from "../../Selects/SizeSelect/SizeSelect";
import ColorSelect from '../../Selects/ColorSelect/ColorSelect';

const UpdateStrapType = ({ straptype }) => {
  const [strap_type, setStrap_type] = useState(straptype.strap_type);
  const [size_id, setSize_id] = useState(straptype.size_id);
  const [color_id, setColor_id] = useState(straptype.color_id);

  const Update = async (e) => {
    e.preventDefault();
    try {
      const body = {
        strap_type,
        size_id,
        color_id,
      };
      const response = await fetch(
        `http://localhost:5000/straptype/${straptype.strap_type_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      console.log(response);
      window.location = "/adminpage/straptype";
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
        data-target={`#strap_type_id${straptype.strap_type_id}`}
      >
        &#9998;
      </button>

      <div class="modal" id={`strap_type_id${straptype.strap_type_id}`}>
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
                <label>Тип ремешка:</label>
                <input
                  type="text"
                  className="form-control"
                  value={strap_type}
                  onChange={(e) => setStrap_type(e.target.value)}
                />
              </div>

              <div className={classes.block}>
                <label>Размер:</label>
                <SizeSelect
                  address="strapsize"
                  value={size_id}
                  onChange={(e) => setSize_id(e.target.value)}
                />
              </div>

              <div className={classes.block}>
                <label>Цвет:</label>
                <ColorSelect
                  address="color"
                  value={color_id}
                  onChange={(e) => setColor_id(e.target.value)}
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

export default UpdateStrapType;
