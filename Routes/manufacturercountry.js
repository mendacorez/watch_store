const {Router} = require('express');
const router = Router();
const pool = require('../db');

//add manufacturer country
router.post("/", async(req, res) => {
    try {
        const {country} = req.body
        const addManufacturercountry = await pool.query(
            "INSERT INTO manufacturercountry (country) VALUES($1)",
            [country])
        res.json("Country was added")

    } catch (err) {
        console.error(err.message)
    }
})

//get all manufacturer country
router.get("/", async(req, res) => {
    try {
        const getManufacturercountry = await pool.query("SELECT * FROM manufacturercountry") 
        res.json(getManufacturercountry.rows)
    } catch (err) {
        console.error(err.message)
    }
})

//get a some man country
router.get("/:manufacturer_country_id", async(req, res) => {
    try {
        console.log(req.params)
        const {manufacturer_country_id} = req.params
        const manufacturercountry = await pool.query(
            "SELECT * FROM manufacturercountry WHERE manufacturer_country_id = $1", 
            [manufacturer_country_id])

        res.json(manufacturercountry.rows[0])
    } catch (err) {
        console.error(err.message)
    }
})

//update a manufacturer country
router.put("/:manufacturer_country_id", async(req, res) => {
    try {
        const {manufacturer_country_id} = req.params
        const {country} = req.body
        const updateManufacturercountry = await pool.query(
            "UPDATE manufacturercountry SET country = $2 WHERE manufacturer_country_id = $1",
            [manufacturer_country_id, country]
        )
        res.json("Country was updated!")
    } catch (err) {
        console.error(err.message)
    }
})

//delete man country
router.delete("/:manufacturer_country_id", async(req, res) => {
    try {
        const {manufacturer_country_id} = req.params
        const deleteManufacturercountry = await pool.query(
            "DELETE FROM manufacturercountry WHERE manufacturer_country_id = $1",
            [manufacturer_country_id]
        )
        res.json("Country was deleted!")
    } catch (err) {
        console.error(err.message)
    }
})

module.exports = router;