import React, {Fragment, useState, useEffect} from 'react';
import classes from './MechanismType.module.css'

const MechanismType = () => {

    const [mechanismtype, setMechanismType] = useState([])

    //get all goods
    const getMechanismType = async() => {
        try { 
            const response = await fetch("http://localhost:5000/mechanismtype")
            const jsonData = await response.json()
            setMechanismType(jsonData)
        } catch (err) {
            console.error(err.message)
        }
    }
    
    useEffect(() => {
        getMechanismType();
    }, [])

    return(
        <Fragment>
            <h1>Типы механизмов</h1>
            <table className={classes.highlight}>
                <thead>
                    <tr>
                        <th>Тип механизма:</th>
                    </tr>
                </thead>
                <tbody>
                    {mechanismtype.map(mechanismtype => (
                        <tr key={mechanismtype.mechanism_type_id}>
                            <td>{mechanismtype.mechanism_type}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    );
}

export default MechanismType;