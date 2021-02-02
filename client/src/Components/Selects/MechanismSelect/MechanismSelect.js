import React, {useEffect, useState} from 'react';
import classes from "./MechanismSelect.module.css";

function MechanismSelect(props){

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
                            <option value={m.mechanism_type_id} key={m.mechanism_type_id}>{m.mechanism_type}</option>
                        )
                    })
                }
            </select>
        </div>
    )

};


export default MechanismSelect;