import React, {Fragment, useState, useEffect} from 'react';
import classes from './StrapSize.module.css'

const StrapSize = () => {

    const [strapsize, setStrapSize] = useState([])

    //get all goods
    const getStrapSize = async() => {
        try { 
            const response = await fetch("http://localhost:5000/strapsize")
            const jsonData = await response.json()
            setStrapSize(jsonData)
        } catch (err) {
            console.error(err.message)
        }
    }
    
    useEffect(() => {
        getStrapSize();
    }, [])

    return(
        <Fragment>
            <h1>Размеры ремешков</h1>
            <table className={classes.highlight}>
                <thead>
                    <tr>
                        <th>Размер</th>
                    </tr>
                </thead>
                <tbody>
                    {strapsize.map(strapsize => (
                        <tr key={strapsize.size_id}>
                            <td>{strapsize.size_value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    );
}

export default StrapSize