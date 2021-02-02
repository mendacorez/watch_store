import React, {Fragment, useState, useEffect} from 'react';
import classes from './OrderDetails.module.css'

const OrderDetails = () => {

    const [details, setDetails] = useState([])

    //get all
    const getOrderDetails = async() => {
        try { 
            const response = await fetch("http://localhost:5000/orderdetails ")
            const jsonData = await response.json()
            setDetails(jsonData)
        } catch (err) {
            console.error(err.message)
        }
    }
    
    useEffect(() => {
        getOrderDetails();
    }, [])

    return(
        <Fragment>
            <h1>Детали заказа</h1>
            <table className={classes.highlight}>
                <thead>
                    <tr>
                        <th>Номер заказа</th>
                        <th>Номер товара</th>
                        <th>Количество в заказе</th>
                    </tr>
                </thead>
                <tbody>
                    {details.map(detail => (
                        <tr key={detail.order_details_id}>
                            <td>{detail.order_id}</td>
                            <td>{detail.watch_id}</td>
                            <td>{detail.watch_quantity_in_order}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    );
}

export default OrderDetails;