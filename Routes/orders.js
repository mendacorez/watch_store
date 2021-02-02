const {Router} = require('express');
const router = Router();
const pool = require('../db');

//add orders
router.post("/", async(req, res) => {
    try {
        const {date, client_id} = req.body
        const addOrders = await pool.query(
            "INSERT INTO orders(date_of_sale, client_id) VALUES($1, $2)",
            [date, client_id])
        res.json("order was added")

    } catch (err) {
        console.error(err.message)
    }
})

//get all orders
router.get("/", async(req, res) => {
    try {
        const getOrders = await pool.query("SELECT * FROM orders")
        res.json(getOrders.rows)
    } catch (err) {
        console.error(err.message)
    }
})

//get a some orders
router.get("/:order_id", async(req, res) => {
    try {
        console.log(req.params)
        const {order_id} = req.params
        const orders = await pool.query(
            "SELECT * FROM orders WHERE order_id = $1", 
            [order_id])

        res.json(orders.rows[0])
    } catch (err) {
        console.error(err.message)
    }
})

//update an order
router.put("/:order_id", async(req, res) => {
    try {
        const {order_id} = req.params
        const {date_of_sale, client_id} = req.body
        const updateOrder = await pool.query(
            "UPDATE orders SET date_of_sale = $2, client_id = $3 WHERE order_id = $1",
            [order_id, date_of_sale, client_id]
        )
        res.json("Order was updated!")
    } catch (err) {
        console.error(err.message)
    }
})

//delete good
router.delete("/:order_id", async(req, res) => {
    try {
        const {order_id} = req.params
        const deleteGood = await pool.query(
            "DELETE FROM orders WHERE order_id = $1",
            [order_id]
        )
        res.json("Order was deleted!")
    } catch (err) {
        console.error(err.message)
    }
})

module.exports = router;