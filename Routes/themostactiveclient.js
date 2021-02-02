const {Router} = require('express');
const router = Router();
const pool = require('../db');

router.get("/", async(req, res) => {
    try {
        const {client_id, fullname, order_id} = req.params
        const popular = await pool.query("SELECT orders.client_id, clients.fullname, COUNT(orders.order_id) AS count_or_orders FROM orders JOIN clients ON orders.client_id = clients.client_id GROUP BY orders.client_id, clients.fullname HAVING COUNT(orders.order_id) >= ALL(SELECT COUNT(orders.order_id) FROM orders GROUP BY orders.client_id)")
        res.json(popular.rows)
    } catch (err) {
        console.error(err.message)
    }
})




module.exports = router;