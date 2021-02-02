const {Router} = require('express');
const router = Router();
const pool = require('../db');

router.get("/:id", async(req, res) => {
    try {
        const {id} = req.params
        const popular = await pool.query("SELECT client_id, COUNT(order_id) FROM orders WHERE client_id = $1 GROUP BY client_id", [id])
        res.json(popular.rows)
    } catch (err) {
        console.error(err.message)
    }
})




module.exports = router;