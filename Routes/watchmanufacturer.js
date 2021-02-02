const {Router} = require('express');
const router = Router();
const pool = require('../db');

//add 
router.post("/", async(req, res) => {
    try {
        const {company_name, manufacturer_country_id, company_tel, company_email} = req.body
        const addWatchmanufacturer = await pool.query(
            "INSERT INTO watchmanufacturer(company_name, manufacturer_country_id, company_tel, company_email) VALUES($1, $2, $3, $4)",
            [company_name, manufacturer_country_id, company_tel, company_email])
        res.json("Company was added")

    } catch (err) {
        console.error(err.message)
    }
})

//get all 
router.get("/", async(req, res) => {
    try {
        const getWatchmanufacturer = await pool.query("SELECT * FROM watchmanufacturer") 
        res.json(getWatchmanufacturer.rows)
    } catch (err) {
        console.error(err.message)
    }
})

//get some
router.get("/:manufacturer_id", async(req, res) => {
    try {
        console.log(req.params)
        const {manufacturer_id} = req.params
        const watchmanufacturer = await pool.query(
            "SELECT * FROM watchmanufacturer WHERE manufacturer_id = $1", 
            [manufacturer_id])

        res.json(watchmanufacturer.rows[0])
    } catch (err) {
        console.error(err.message)
    }
})

//update
router.put("/:manufacturer_id", async(req, res) => {
    try {
        const {manufacturer_id} = req.params
        const {company_name, manufacturer_country_id, company_tel, company_email} = req.body
        const updateWatchmanufacturer = await pool.query(
            "UPDATE watchmanufacturer SET company_name = $2, manufacturer_country_id = $3, company_tel = $4, company_email = $5 WHERE manufacturer_id = $1",
            [manufacturer_id, company_name, manufacturer_country_id, company_tel, company_email]
        )
        res.json("Manufacturer was updated!")
    } catch (err) {
        console.error(err.message)
    }
})

//delete good
router.delete("/:manufacturer_id", async(req, res) => {
    try {
        const {manufacturer_id} = req.params
        const deleteWatchmanufacturer = await pool.query(
            "DELETE FROM watchmanufacturer WHERE manufacturer_id = $1",
            [manufacturer_id]
        )
        res.json("Manufacturer was deleted!")
    } catch (err) {
        console.error(err.message)
    }
})




//search
router.get('/search/:query', async (req, res) => {
    try{
        const { query } = req.params;

        const manuf = await pool.query(`SELECT * FROM watchmanufacturer WHERE company_name LIKE '%${query}%'`);
        await res.json(manuf.rows);
    }
    catch (e) {
        console.log(e.message());
    }
});

module.exports = router;