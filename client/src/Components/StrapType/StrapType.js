import React, { Fragment, useState, useEffect } from "react";
import classes from "./StrapType.module.css";
import UpdateStrapType from "../StrapType/UpdateStrapType/UpdateStrapType";
import AddStrapType from "./AddStrapType/AddStrapType";

const StrapType = () => {
  const [straptype, setStrapType] = useState([]);
  const [query, setQuery] = useState("straptype");
  const [type, setType] = useState();

  //get all
  const getStrapType = async () => {
    try {
      const response = await fetch("http://localhost:5000/straptype");
      const jsonData = await response.json();
      setStrapType(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getStrapType();
  }, [query]);

  //delete good
  const deleteStrapType = async (strap_type_id) => {
    try {
      const deleteStrapType = await fetch(
        `http://localhost:5000/straptype/${strap_type_id}`,
        {
          method: "DELETE",
        }
      );

      console.log(deleteStrapType);
    } catch (err) {
      console.error(err.message);
    }

    setStrapType(
      straptype.filter((straptype) => straptype.strap_type_id !== strap_type_id)
    );
  };

  const Filter = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:5000/straptype/filter/${type}`);
      const data = await res.json();

      setStrapType(data);
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className={classes.block}>
      <h1>Типы ремешков</h1>

      <form className={classes.filter}>
        <div className={classes.fromTo}>
          <label>Фильтр типа ремешка: </label>
          <input
            type="text"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="btn btn-dark btn-sm"
          onClick={(e) => Filter(e)}
        >
          Просмотреть
        </button>
      </form>

      <table class="highlight">
        <thead>
          <tr>
            <th>Тип ремешка</th>
            <th>Размер</th>
            <th>Цвет</th>
          </tr>
        </thead>
        <tbody>
          {straptype.map((straptype) => (
            <tr key={straptype.strap_type_id}>
              <td>{straptype.strap_type}</td>
              <td>{straptype.size_id}</td>
              <td>{straptype.color_id}</td>
              <UpdateStrapType straptype={straptype} />
              <button
                class="btn btn-danger btn-sm"
                onClick={() => deleteStrapType(straptype.strap_type_id)}
              >
                &#128465;
              </button>
            </tr>
          ))}
        </tbody>
      </table>
      <AddStrapType />
    </div>
  );
};

export default StrapType;
