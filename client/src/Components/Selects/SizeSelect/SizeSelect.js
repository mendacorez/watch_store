import React, {useEffect, useState} from 'react';
import classes from "./SizeSelect.module.css";

function SizeSelect(props){

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
            <select className={classes.sizeSelect} value={props.value} onChange={props.onChange} required>
                <option></option>
                {
                    data.map(m => {
                        return(
                        <option value={m.size_id} key={m.size_id}>{m.size_value}</option>
                        )
                    })
                }
            </select>
        </div>
    )

};


export default SizeSelect;