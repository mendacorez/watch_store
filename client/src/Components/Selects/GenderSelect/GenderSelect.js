import React, {useEffect, useState} from 'react';
import classes from "./GenderSelect.module.css";

function GenderSelect(props){

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
                        <option value={m.gender_id} key={m.gender_id}>{m.gender_name}</option>
                        )
                    })
                }
            </select>
        </div>
    )

};


export default GenderSelect;