import React, {useEffect, useState} from 'react';
import classes from "./ClientSelect.module.css";

function ClientSelect(props){

    const [data, setData] = useState([]);

    useEffect(() => {
       getData();
    }, []);

    const getData = async () => {
        const get = await fetch('http://localhost:5000/' + props.address);
        const parsedData = await get.json();
        console.log(parsedData);

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
                        <option value={m.client_id} key={m.client_id}>{m.fullname}</option>
                        )
                    })
                }
            </select>
        </div>
    )

};


export default ClientSelect;