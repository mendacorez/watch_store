import React, {useEffect, useState} from 'react';
import classes from "./StrapSelect.module.css";

function StrapSelect(props){

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
                        <option value={m.strap_type_id} key={m.strap_type_id}>{m.strap_type}-{m.size_id}-{m.color_id}</option>
                        )
                    })
                }
            </select>
        </div>
    )

};


export default StrapSelect;