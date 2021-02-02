const {Router} = require('express');
const router = Router();
const pool = require('../db');

//create color
router.post("/", async(req, res) => {
    try {
        const {color_name} = req.body
        const addColor = await pool.query("INSERT INTO colors(color_name) VALUES($1)",  [color_name])
        res.json("Color was added")

    } catch (err) {
        console.error(err.message)
    }
})

//get all colors
router.get("/", async(req, res) => {
    try {
        const getColor = await pool.query("SELECT * FROM colors") 
        res.json(getColor.rows)
    } catch (err) {
        console.error(err.message)
    }
})

//get a color
router.get("/:color_id", async(req, res) => {
    try {
        console.log(req.params)
        const {color_id} = req.params
        const color = await pool.query("SELECT * FROM colors WHERE color_id = $1", [color_id])

        res.json(color.rows[0])
    } catch (err) {
        console.error(err.message)
    }
})

//update a color
router.put("/:color_id", async(req, res) => {
    try {
        const {color_id} = req.params
        const {color_name} = req.body
        const updateColor = await pool.query(
            "UPDATE colors SET color_name = $1 WHERE color_id = $2",
            [color_name, color_id]
        )
        res.json("Color was updated!")
    } catch (err) {
        console.error(err.message)
    }
})

//delete color
router.delete("/:color_id", async(req, res) => {
    try {
        const {color_id} = req.params
        const deleteColor = await pool.query(
            "DELETE FROM colors WHERE color_id = $1",
            [color_id]
        )
        res.json("Color was deleted!")
    } catch (err) {
        console.error(err.message)
    }
})

module.exports = router;