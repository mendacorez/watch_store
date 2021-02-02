const {Router} = require('express');
const router = Router();
const pool = require('../db');

//add strap
router.post("/", async(req, res) => {
    try {
        const {size_value} = req.body
        const addStraptype = await pool.query(
            "INSERT INTO strapsize(size_value) VALUES($1)",
            [size_value])
        res.json("Strapsize was added")

    } catch (err) {
        console.error(err.message)
    }
})

//get all strapsize
router.get("/", async(req, res) => {
    try {
        const getStrapsize = await pool.query("SELECT * FROM strapsize") 
        res.json(getStrapsize.rows)
    } catch (err) {
        console.error(err.message)
    }
})

//get a some strapsizes
router.get("/:size_id", async(req, res) => {
    try {
        console.log(req.params)
        const {size_id} = req.params
        const strapsize = await pool.query(
            "SELECT * FROM strapsize WHERE size_id = $1", 
            [size_id])

        res.json(strapsize.rows[0])
    } catch (err) {
        console.error(err.message)
    }
})

//update 
router.put("/:size_id", async(req, res) => {
    try {
        const {size_id} = req.params
        const {size_value} = req.body
        const updateStrapsize = await pool.query(
            "UPDATE strapsize SET size_value = $2 WHERE size_id = $1",
            [size_id, size_value]
        )
        res.json("Size was updated!")
    } catch (err) {
        console.error(err.message)
    }
})

//delete 
router.delete("/:size_id", async(req, res) => {
    try {
        const {size_id} = req.params
        const deleteStrapsize = await pool.query(
            "DELETE FROM strapsize WHERE size_id = $1",
            [size_id]
        )
        res.json("Size was deleted!")
    } catch (err) {
        console.error(err.message)
    }
})

module.exports = router;