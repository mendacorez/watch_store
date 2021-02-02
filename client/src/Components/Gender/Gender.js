import React, {Fragment, useState, useEffect} from 'react';
import classes from './Gender.module.css';

const Gender = () => {

    const [gender, setGender] = useState([])

    //get all
    const getGender = async() => {
        try { 
            const response = await fetch("http://localhost:5000/gender")
            const jsonData = await response.json()
            setGender(jsonData)
        } catch (err) {
            console.error(err.message)
        }
    }
    
    useEffect(() => {
        getGender();
    }, [])

    return(
        <Fragment>
            <h1>Гендеры</h1>
            <table className={classes.highlight}>
                <thead>
                    <tr>
                        <th>Название гендера</th>
                    </tr>
                </thead>
                <tbody>
                    {gender.map(gender => (
                        <tr key={gender.gender_id}>
                            <td>{gender.gender_name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    );
}

export default Gender