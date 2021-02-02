import React, { Fragment, useState } from "react";
import classes from "./UpdateManufacturerCountry.module.css";


//TODO не подтягивается текущее значение при редактировании
const UpdateManufacturerCountry = ({ country }) => {
  const [country_name, setCountry_name] = useState(country.country_name);

  const Update = async (e) => {
    e.preventDefault();
    try {
      const body = {
        country
      };
      const response = await fetch(
        `http://localhost:5000/manufacturercountry/${country.manufacturer_country_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      console.log(response);
      window.location = "/adminpage/manufacturercountry";
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
        data-target={`#manufacturer_country_id${country.manufacturer_country_id}`}
      >
        &#9998;
      </button>

      <div
        class="modal"
        id={`manufacturer_country_id${country.manufacturer_country_id}`}
      >
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
                <label>Страна:</label>
                <input
                  type="text"
                  className="form-control"
                  value={country_name}
                  onChange={(e) => setCountry_name(e.target.value)}
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

export default UpdateManufacturerCountry;
