const {Router} = require('express');
const router = Router();
const pool = require('../db');

//add
router.post("/", async(req, res) => {
    try {
        const {strap_type, size_id, color_id} = req.body
        const addStraptype = await pool.query(
            "INSERT INTO straptype(strap_type, size_id, color_id) VALUES($1, $2, $3)",
            [strap_type, size_id, color_id])
        res.json("Strap type was added")

    } catch (err) {
        console.error(err.message)
    }
})

//get all 
router.get("/", async(req, res) => {
    try {
        const getStraptype = await pool.query("SELECT * FROM straptype") 
        res.json(getStraptype.rows)
    } catch (err) {
        console.error(err.message)
    }
})

//get some
router.get("/:strap_type_id", async(req, res) => {
    try {
        console.log(req.params)
        const {strap_type_id} = req.params
        const straptype = await pool.query(
            "SELECT * FROM straptype WHERE strap_type_id = $1", 
            [strap_type_id])

        res.json(straptype.rows[0])
    } catch (err) {
        console.error(err.message)
    }
})

//update
router.put("/:strap_type_id", async(req, res) => {
    try {
        const {strap_type_id} = req.params
        const {strap_type, size_id, color_id} = req.body
        const updateStraptype = await pool.query(
            "UPDATE straptype SET strap_type = $2, size_id = $3, color_id = $4 WHERE strap_type_id = $1",
            [strap_type_id, strap_type, size_id, color_id]
        )
        res.json("Strap type was updated!")
    } catch (err) {
        console.error(err.message)
    }
})

//delete
router.delete("/:strap_type_id", async(req, res) => {
    try {
        const {strap_type_id} = req.params
        const deleteStraptype = await pool.query(
            "DELETE FROM straptype WHERE strap_type_id = $1",
            [strap_type_id]
        )
        res.json("Straptype was deleted!")
    } catch (err) {
        console.error(err.message)
    }
})

//filter PRICE
router.get('/filter/:type', async (req, res) => {
    try{
        const { type } = req.params;
        const material = await pool.query("SELECT * FROM straptype WHERE strap_type = $1", [type]);
        await res.json(material.rows);
    }
    catch (e) {
        console.log(e.message);
    }
});

module.exports = router;