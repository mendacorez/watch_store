import React, {Fragment, useState, useEffect} from 'react';
import classes from './ManufacturerCountry.module.css'
import UpdateManufacturerCountry from '../ManufacturerCountry/UpdateManufacturerCountry/UpdateManufacturerCountry'
import AddManufacturerCountry from '../ManufacturerCountry/AddManufacturerCountry/AddManufacturerCountry';

const ManufacturerCountry = () => {

    const [countries, setCountries] = useState([])

    //get all goods
    const getManufacturerCountry = async() => {
        try { 
            const response = await fetch("http://localhost:5000/manufacturercountry")
            const jsonData = await response.json()
            setCountries(jsonData)
        } catch (err) {
            console.error(err.message)
        }
    }
    
    useEffect(() => {
        getManufacturerCountry();
    }, [])


    //delete good
    const deleteManufacturerCountry = async manufacturer_country_id => {
        try {
            const deleteManufacturerCountry = await fetch(`http://localhost:5000/manufacturercountry/${manufacturer_country_id}`, {
                method: "DELETE"
            })

            console.log(deleteManufacturerCountry)

        } catch (err) {
            console.error(err.message)
        }

        setCountries(countries.filter(countries => countries.manufacturer_country_id !== manufacturer_country_id))
    }

    return(
        <Fragment>
            <h1>Страны производителей</h1>
            <table className={classes.highlight}>
                <thead>
                    <tr>
                        <th>Страна производителя</th>
                    </tr>
                </thead>
                <tbody>
                    {countries.map(country => (
                        <tr key={country.manufacturer_country_id}>
                            <td>{country.country}</td>
                            <UpdateManufacturerCountry country = {country} />
                            <button class="btn btn-danger btn-sm" onClick={() => deleteManufacturerCountry(country.manufacturer_country_id)}>&#128465;</button>
                        </tr>
                    ))}
                </tbody>
            </table>
            
            <AddManufacturerCountry />
        </Fragment>
    );
}

export default ManufacturerCountry