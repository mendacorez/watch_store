import React, {useEffect, useState} from 'react';
import classes from "./ColorSelect.module.css";

function ColorSelect(props){

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
                        <option value={m.color_id} key={m.color_id}>{m.color_name}</option>
                        )
                    })
                }
            </select>
        </div>
    )

};


export default ColorSelect;