import React, {Fragment, useState, useEffect} from 'react';
import classes from './Color.module.css'
import UpdateColor from '../Color/UpdateColor/UpdateColor'
import AddColor from './AddColor/AddColor';

const Color = () => {

    const [color, setColor] = useState([])

    //get all goods
    const getColor = async() => {
        try { 
            const response = await fetch("http://localhost:5000/color")
            const jsonData = await response.json()
            setColor(jsonData)
        } catch (err) {
            console.error(err.message)
        }
    }
    
    useEffect(() => {
        getColor();
    }, [])


    //delete good
    const deleteColor = async color_id => {
        try {
            const deleteColor = await fetch(`http://localhost:5000/color/${color_id}`, {
                method: "DELETE"
            })

            console.log(deleteColor)

        } catch (err) {
            console.error(err.message)
        }

        setColor(color.filter(color => color.color_id !== color_id))
    }

    return(
        <Fragment>
            <h1>Цвета</h1>
            <table className={classes.highlight}>
                <thead>
                    <tr>
                        <th>Цвет</th>
                    </tr>
                </thead>
                <tbody>
                    {color.map(color => (
                        <tr key={color.color_id}>
                            <td>{color.color_name}</td>
                            <UpdateColor color = {color} />
                            <button class="btn btn-danger btn-sm" onClick={() => deleteColor(color.color_id)}>&#128465;</button>
                        </tr>
                    ))}
                </tbody>
            </table>

            <AddColor />
        </Fragment>
    );
}

export default Color