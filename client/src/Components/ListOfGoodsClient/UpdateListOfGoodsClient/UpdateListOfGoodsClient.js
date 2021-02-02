import React, { Fragment, useState } from "react";
import classes from "./UpdateListOfGoods.module.css";
import ManufacturerSelect from "../../Selects/ManufacturerSelect/ManufacturerSelect";
import StrapSelect from "../../Selects/StrapSelect/StrapSelect";
import MechanismSelect from "../../Selects/MechanismSelect/MechanismSelect";
import ColorSelect from "../../Selects/ColorSelect/ColorSelect";
import GenderSelect from '../../Selects/GenderSelect/GenderSelect';

const UpdateListOfGoods = ({ good }) => {
  const [watch_name, setWatch_name] = useState(good.watch_name);
  const [manufacturer_id, setManufacturer_id] = useState(good.manufacturer_id);
  const [mechanism_type_id, setMechanism_type_id] = useState(
    good.mechanism_type_id
  );
  const [strap_type_id, setStrap_type_id] = useState(good.strap_type_id);
  const [color_id, setColor_id] = useState(good.color_id);
  const [gender_id, setGender_id] = useState(good.gender_id);
  const [watch_price, setWatch_price] = useState(good.watch_price);
  const [discount_size, setDiscount_size] = useState(good.discount_size);
  const [price_with_discount, setPrice_with_discount] = useState(
    good.price_with_discount
  );
  const [watch_quantity, setWatch_quantity] = useState(good.watch_quantity);

  const Update = async (e) => {
    e.preventDefault();
    try {
      const body = {
        watch_name,
        manufacturer_id,
        mechanism_type_id,
        strap_type_id,
        color_id,
        gender_id,
        watch_price,
        discount_size,
        price_with_discount,
        watch_quantity,
      };
      const response = await fetch(
        `http://localhost:5000/listofgoodsadmin/${good.watch_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      console.log(response);
      window.location = "/adminpage/listofgoodsadmin";
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
        data-target={`#watch_id${good.watch_id}`}
      >
        &#9998;
      </button>

      <div class="modal" id={`watch_id${good.watch_id}`}>
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
                  value={watch_name}
                  onChange={(e) => setWatch_name(e.target.value)}
                />
              </div>

              <div className={classes.block}>
                <label>Производитель:</label>
                <ManufacturerSelect
                  address="watchmanufacturer"
                  value={manufacturer_id}
                  onChange={(e) => setManufacturer_id(e.target.value)}
                />
              </div>

              <div className={classes.block}>
                <label>Тип механизма:</label>
                <MechanismSelect
                  address="mechanismtype"
                  value={mechanism_type_id}
                  onChange={(e) => setMechanism_type_id(e.target.value)}
                />
              </div>

              <div className={classes.block}>
                <label>Тип ремешка:</label>
                <StrapSelect
                  address="straptype"
                  value={strap_type_id}
                  onChange={(e) => setStrap_type_id(e.target.value)}
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

              <div className={classes.block}>
                <label>Пол:</label>
                <GenderSelect
                  address="gender"
                  value={gender_id}
                  onChange={(e) => setGender_id(e.target.value)}
                />
              </div>

              <div className={classes.block}>
                <label>Цена:</label>
                <input
                  type="text"
                  className="form-control"
                  value={watch_price}
                  onChange={(e) => setWatch_price(e.target.value)}
                />
              </div>

              <div className={classes.block}>
                <label>Размер скидки:</label>
                <input
                  type="text"
                  className="form-control"
                  value={discount_size}
                  onChange={(e) => setDiscount_size(e.target.value)}
                />
              </div>

              <div className={classes.block}>
                <label>Цена с учётом скидки:</label>
                <input
                  type="text"
                  className="form-control"
                  value={price_with_discount}
                  onChange={(e) => setPrice_with_discount(e.target.value)}
                />
              </div>

              <div className={classes.block}>
                <label>Количество:</label>
                <input
                  type="text"
                  className="form-control"
                  value={watch_quantity}
                  onChange={(e) => setWatch_quantity(e.target.value)}
                />
              </div>
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
    </Fragment>
  );
};

export default UpdateListOfGoods;
