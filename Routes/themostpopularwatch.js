const {Router} = require('express');
const router = Router();
const pool = require('../db');

router.get("/", async(req, res) => {
    try {
        const {watch_id, watch_name, watch_quantity_in_order } = req.params
        const popular = await pool.query("SELECT orderdetails.watch_id, listofgoods.watch_name, SUM(orderdetails.watch_quantity_in_order) AS watch_quantity FROM orderdetails JOIN listofgoods ON orderdetails.watch_id = listofgoods.watch_id GROUP BY orderdetails.watch_id, listofgoods.watch_name ORDER BY watch_quantity DESC LIMIT 3")
        res.json(popular.rows)
    } catch (err) {
        console.error(err.message)
    }
})




module.exports = router;