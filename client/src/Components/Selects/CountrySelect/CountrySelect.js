import React, {useEffect, useState} from 'react';
import classes from "./CountrySelect.module.css";

function CountrySelect(props){

    const [data, setData] = useState([]);

    useEffect(() => {
       getData();
    }, []);

    const getData = async () => {
        const get = await fetch('http://localhost:5000/' + props.address);
        const parsedData = await get.json();

        setData(parsedData);
    };

    return(
        <div className={classes.block}>
            <label>{props.label}</label>
            <select value={props.value} onChange={props.onChange} required>
                <option></option>
                {
                    data.map(m => {
                        return(
                        <option value={m.manufacturer_country_id} key={m.manufacturer_country_id}>{m.country}</option>
                        )
                    })
                }
            </select>
        </div>
    )

};


export default CountrySelect;