import React, { Fragment, useState, useEffect } from "react";
import classes from "./ListOfGoodsClient.module.css";
import GoodSelect from '../Selects/GoodSelect/GoodSelect';
import CreateOrder from "./CreateOrder/CreateOrder";

const ListOfGoodsClient = () => {
  const [listofgoods, setListofgoods] = useState([]);
  const [query, setQuery] = useState("listofgoodsadmin");
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(10000000);
  const [search, setSearch] = useState("");

  //get all goods
  const getListOfGoods = async () => {
    try {
      const response = await fetch(`http://localhost:5000/${query}`);
      const jsonData = await response.json();
      setListofgoods(jsonData);
      console.log(response);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getListOfGoods();
  }, [query]);


  //filter
  const Filter = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `http://localhost:5000/listofgoodsadmin/filter/${from}/${to}`
      );
      const data = await res.json();

      setListofgoods(data);
    } catch (e) {
      console.log(e.message);
    }
  };

  // search
  const searchHandler = async (query) => {
    if (query.length) {
      try {
        const result = await fetch(
          `http://localhost:5000/listofgoodsadmin/search/${query}`
        );
        const response = await result.json();

        setSearch(query);
        setListofgoods(response);
      } catch (e) {
        console.log(e.message);
      }
    } else {
      await getListOfGoods();
    }
  };

  return (
    <Fragment>
      <h1>Список товара</h1>

      {/* sort by */}
      <div className={classes.operations}>
        <div className={classes.sortBy}>
          <label>Сортировать по:</label>
          <select value={query} onChange={(e) => setQuery(e.target.value)}>
            <option value="listofgoodsadmin/sortBy/alphabet">алфавиту</option>
            <option value="listofgoodsadmin/sortBy/priceAsc">
              возрастанию цены
            </option>
            <option value="listofgoodsadmin/sortBy/priceDesc">
              убыванию цены
            </option>
            <option value="listofgoodsadmin">умолчанию</option>
          </select>
        </div>

        {/* filter */}
        <form className={classes.filter}>
          <p>Фильтрация цены:</p>

          <div className={classes.fromTo}>
            <label>От: &#8195; </label>
            <input
              type="text"
              value={from}
              onChange={(e) => setFrom(Number(e.target.value))}
            />
          </div>

          <div className={classes.fromTo}>
            <label>До: &#8195; </label>
            <input
              type="text"
              value={to}
              onChange={(e) => setTo(Number(e.target.value))}
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

        {/* search */}
        <div className={classes.search}>
          <label>Поиск по названию</label>
          <input
            name="watchSearch"
            minLength={1}
            type="text"
            onChange={(e) => searchHandler(e.target.value)}
          />
        </div>
      </div>
      <table class="highlight">
        <thead>
          <tr>
            <th>Название часов</th>
            <th>Производитель</th>
            <th>Тип механизма</th>
            <th>Тип ремешка</th>
            <th>Цвет</th>
            <th>Пол</th>
            <th>Цена</th>
            <th>Размер скидки</th>
            <th>Цена с учётом скидки</th>
            <th>Количество</th>
          </tr>
        </thead>
        <tbody>
          {listofgoods.map((good) => (
            <tr key={good.watch_id}>
              <td>{good.watch_name}</td>
              <td>{good.manufacturer_id}</td>
              <td>{good.mechanism_type_id}</td>
              <td>{good.strap_type_id}</td>
              <td>{good.color_id}</td>
              <td>{good.gender_id}</td>
              <td>{good.watch_price}</td>
              <td>{good.discount_size}</td>
              <td>{good.price_with_discount}</td>
              <td>{good.watch_quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </Fragment>
  );
};

export default ListOfGoodsClient;
