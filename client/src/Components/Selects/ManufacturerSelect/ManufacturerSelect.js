import React, {useEffect, useState} from 'react';
import classes from "./ManufacturerSelect.module.css";

function ManufacturerSelect(props){

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
                        <option value={m.manufacturer_id} key={m.manufacturer_id}>{m.company_name}</option>
                        )
                    })
                }
            </select>
        </div>
    )

};


export default ManufacturerSelect;