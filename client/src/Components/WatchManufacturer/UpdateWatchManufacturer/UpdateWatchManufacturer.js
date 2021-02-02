import React, { Fragment, useState } from "react";
import classes from "./UpdateWatchManufacturer.module.css";
import CountrySelect from '../../Selects/CountrySelect/CountrySelect';

const UpdateWatchManufacturer = ({ man }) => {
  const [company_name, setCompany_name] = useState(man.company_name);
  const [manufacturer_country_id, setManufacturer_country_id] = useState(
    man.manufacturer_country_id
  );
  const [company_tel, setCompany_tel] = useState(
    man.company_tel
  );
  const [company_email, setCompany_email] = useState(
    man.company_email
  );

  const Update = async (e) => {
    e.preventDefault();
    try {
      const body = {
        company_name,
        manufacturer_country_id,
        company_tel,
        company_email,
      };
      const response = await fetch(
        `http://localhost:5000/watchmanufacturer/${man.manufacturer_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      console.log(response);
      window.location = "/adminpage/watchmanufacturer";
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
        data-target={`#manufacturer_id${man.manufacturer_id}`}
      >
        &#9998;
      </button>

      <div class="modal" id={`manufacturer_id${man.manufacturer_id}`}>
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
                <label>Название компании:</label>
                <input
                  type="text"
                  className="form-control"
                  value={company_name}
                  onChange={(e) => setCompany_name(e.target.value)}
                />
              </div>

              <div className={classes.block}>
                <label>Страна производителя:</label>
                <CountrySelect
                  address="manufacturercountry"
                  value={manufacturer_country_id}
                  onChange={(e) => setManufacturer_country_id(e.target.value)}
                />
              </div>

              <div className={classes.block}>
                <label>Телефон производителя:</label>
                <input
                  type="text"
                  className="form-control"
                  value={company_tel}
                  onChange={(e) => setCompany_tel(e.target.value)}
                />
              </div>

              <div className={classes.block}>
                <label>Электронная почта производителя:</label>
                <input
                  type="text"
                  className="form-control"
                  value={company_email}
                  onChange={(e) =>
                    setCompany_email(e.target.value)
                  }
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

export default UpdateWatchManufacturer;
