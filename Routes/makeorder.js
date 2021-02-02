const {Router} = require('express');
const router = Router();
const pool = require('../db');

router.post("/", async(req, res) => {
    try {
        const {watch_name, manufacturer_id, mechanism_type_id, strap_type_id, color_id, gender_id, watch_price, discount_size, priceWithDiscount, watch_quantity} = req.body
        const addGood = await pool.query(
            "INSERT INTO listofgoods(watch_name, manufacturer_id, mechanism_type_id, strap_type_id, color_id, gender_id, watch_price, discount_size, price_with_discount, watch_quantity) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)",
            [watch_name, manufacturer_id, mechanism_type_id, strap_type_id, color_id, gender_id, watch_price, discount_size, priceWithDiscount, watch_quantity])
        res.json("Order was created")

    } catch (err) {
        console.error(err.message)
    }
})

module.exports = router;