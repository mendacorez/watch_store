const {Router} = require('express');
const router = Router();
const pool = require('../db');

//get all mech type
router.get("/", async(req, res) => {
    try {
        const getmMechanismtype = await pool.query("SELECT * FROM mechanismtype") 
        res.json(getmMechanismtype.rows)
    } catch (err) {
        console.error(err.message)
    }
})

//get a some mech type
router.get("/:mechanism_type_id", async(req, res) => {
    try {
        console.log(req.params)
        const {mechanism_type_id} = req.params
        const mechanismtype = await pool.query(
            "SELECT * FROM mechanismtype WHERE mechanism_type_id = $1", 
            [mechanism_type_id])

        res.json(mechanismtype.rows[0])
    } catch (err) {
        console.error(err.message)
    }
})

module.exports = router;