import React, { Fragment, useState, useEffect } from "react";
// import classes from './WatchManufacturer.module.css'
import UpdateWatchManufacturer from "./UpdateWatchManufacturer/UpdateWatchManufacturer";
import AddWatchManufacturer from "./AddWatchManufacturer/AddWatchManufacturer";
// import { DebounceInput } from "react-debounce-input";
import classes from './WatchManufacturer.module.css';


const WatchManufacturer = () => {
  const [manufacturers, setManufacturers] = useState([]);
  const [query, setQuery] = useState("watchmanufacturer");
  const [search, setSearch] = useState("");

  //get all
  const getWatchManufacturer = async () => {
    try {
      const response = await fetch("http://localhost:5000/watchmanufacturer");
      const jsonData = await response.json();
      setManufacturers(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getWatchManufacturer();
  }, []);

  //delete good
  const deleteWatchManufacturer = async (manufacturer_id) => {
    try {
      const deleteWatchManufacturer = await fetch(
        `http://localhost:5000/watchmanufacturer/${manufacturer_id}`,
        {
          method: "DELETE",
        }
      );

      console.log(deleteWatchManufacturer);
    } catch (err) {
      console.error(err.message);
    }

    setManufacturers(
      manufacturers.filter(
        (manufacturers) => manufacturers.manufacturer_id !== manufacturer_id
      )
    );
  };

  const searchHandler = async (query) => {
    if (query.length) {
      try {
        const result = await fetch(
          `http://localhost:5000/watchmanufacturer/search/${query}`
        );
        const response = await result.json();

        setSearch(query);
        setManufacturers(response);
      } catch (e) {
        console.log(e.message);
      }
    } else {
      await getWatchManufacturer();
    }
  };

  return (
    <Fragment>
      <h1>Производители часов</h1>


      <div className={classes.search}>
        <label>Поиск по названию компании</label>
        <input
          name="watchSearch"
          minLength={1}
          type="text"
          onChange={(e) => searchHandler(e.target.value)}
        />
      </div>


      <table class="highlight">
        <thead>
          <tr>
            <th>Название компании</th>
            <th>Страна производителя</th>
            <th>Номер телефона производителя</th>
            <th>Электронная почта производителя</th>
          </tr>
        </thead>
        <tbody>
          {manufacturers.map((man) => (
            <tr key={man.manufacturer_id}>
              <td>{man.company_name}</td>
              <td>{man.manufacturer_country_id}</td>
              <td>{man.company_tel}</td>
              <td>{man.company_email}</td>
              <UpdateWatchManufacturer man={man} />
              <button
                class="btn btn-danger btn-sm"
                onClick={() => deleteWatchManufacturer(man.manufacturer_id)}
              >
                &#128465;
              </button>
            </tr>
          ))}
        </tbody>
      </table>

      <AddWatchManufacturer />
    </Fragment>
  );
};

export default WatchManufacturer;
