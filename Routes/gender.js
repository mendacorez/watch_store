const {Router} = require('express');
const router = Router();
const pool = require('../db');

//get all genders
router.get("/", async(req, res) => {
    try {
        const getGenders = await pool.query("SELECT * FROM gender") 
        res.json(getGenders.rows)
    } catch (err) {
        console.error(err.message)
    }
})

//get a one gender
router.get("/:gender_id", async(req, res) => {
    try {
        console.log(req.params)
        const {gender_id} = req.params
        const Gender = await pool.query(
            "SELECT * FROM gender WHERE gender_id = $1", 
            [gender_id])

        res.json(Gender.rows[0])
    } catch (err) {
        console.error(err.message)
    }
})

module.exports = router;