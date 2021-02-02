const {Router} = require('express');
const router = Router();
const pool = require('../db');

//add good
router.post("/", async(req, res) => {
    try {
        const {watch_name, manufacturer_id, mechanism_type_id, strap_type_id, color_id, gender_id, watch_price, discount_size, priceWithDiscount, watch_quantity} = req.body
        const addGood = await pool.query(
            "INSERT INTO listofgoods(watch_name, manufacturer_id, mechanism_type_id, strap_type_id, color_id, gender_id, watch_price, discount_size, price_with_discount, watch_quantity) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)",
            [watch_name, manufacturer_id, mechanism_type_id, strap_type_id, color_id, gender_id, watch_price, discount_size, priceWithDiscount, watch_quantity])
        res.json("Good was added")

    } catch (err) {
        console.error(err.message)
    }
})

//get all goods
router.get("/", async(req, res) => {
    try {
        const getGoods = await pool.query("SELECT * FROM listofgoods") 
        res.json(getGoods.rows)
    } catch (err) {
        console.error(err.message)
    }
})

//get a some goods
router.get("/:watch_id", async(req, res) => {
    try {
        console.log(req.params)
        const {watch_id} = req.params
        const listofgoods = await pool.query(
            "SELECT * FROM listofgoods WHERE watch_id = $1", 
            [watch_id])

        res.json(listofgoods.rows[0])
    } catch (err) {
        console.error(err.message)
    }
})

//update a good
router.put("/:watch_id", async(req, res) => {
    try {
        const {watch_id} = req.params
        const {watch_name, manufacturer_id, mechanism_type_id, strap_type_id, color_id, gender_id, watch_price, discount_size, priceWithDiscount, watch_quantity} = req.body
        const updateGood = await pool.query(
            "UPDATE listofgoods SET watch_name = $2, manufacturer_id = $3, mechanism_type_id = $4, strap_type_id = $5, color_id = $6, gender_id = $7, watch_price = $8, discount_size = $9, price_with_discount = $10, watch_quantity = $11  WHERE watch_id = $1",
            [watch_id, watch_name, manufacturer_id, mechanism_type_id, strap_type_id, color_id, gender_id, watch_price, discount_size, priceWithDiscount, watch_quantity]
        )
        res.json("Good was updated!")
    } catch (err) {
        console.error(err.message)
    }
})

//delete good
router.delete("/:watch_id", async(req, res) => {
    try {
        const {watch_id} = req.params
        const deleteGood = await pool.query(
            "DELETE FROM listofgoods WHERE watch_id = $1",
            [watch_id]
        )
        res.json("Good was deleted!")
    } catch (err) {
        console.error(err.message)
    }
})




//sort by ALPHABET
router.get('/sortBy/alphabet', async (req, res) => {
    try{
        const watch = await pool.query("SELECT * FROM listofgoods ORDER BY watch_name");
        await res.json(watch.rows);
    }
    catch (e) {
        console.log(e.message);
    }

});

//sort by PRICE ASC
router.get('/sortBy/priceAsc', async (req, res) => {
    try{
        const price = await pool.query("SELECT * FROM listofgoods ORDER BY price_with_discount");
        await res.json(price.rows);
    }
    catch (e) {
        console.log(e.message);
    }
});

//sort by PRICE DESC
router.get('/sortBy/priceDesc', async (req, res) => {
    try{
        const price = await pool.query("SELECT * FROM listofgoods ORDER BY price_with_discount DESC");
        await res.json(price.rows);
    }
    catch (e) {
        console.log(e.message);
    }
});

//filter PRICE
router.get('/filter/:from/:to', async (req, res) => {
    try{
        const { from, to } = req.params;
        const price = await pool.query("SELECT * FROM listofgoods where price_with_discount between $1 AND $2", [from, to]);
        await res.json(price.rows);
    }
    catch (e) {
        console.log(e.message);
    }
});

//search WATCH_NAME
router.get('/search/:query', async (req, res) => {
    try{
        const { query } = req.params;

        const watch_name = await pool.query(`SELECT * FROM listofgoods WHERE watch_name LIKE '%${query}%'`);
        await res.json(watch_name.rows);
    }
    catch (e) {
        console.log(e.message());
    }
});

module.exports = router;