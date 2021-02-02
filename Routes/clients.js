const {Router} = require('express');
const router = Router();
const pool = require('../db');

//add client
router.post("/", async(req, res) => {
    try {
        const {fullname, client_tel, client_email} = req.body
        const addClient= await pool.query(
            "INSERT INTO clients(fullname, client_tel, client_email) VALUES($1, $2, $3)",
            [fullname, client_tel, client_email])
        res.json("Client was registrated")

    } catch (err) {
        console.error(err.message)
    }
})

//get all clients
router.get("/", async(req, res) => {
    try {
        const getClients = await pool.query("SELECT * FROM clients") 
        res.json(getClients.rows)
    } catch (err) {
        console.error(err.message)
    }
})

//get a some clients
router.get("/:client_id", async(req, res) => {
    try {
        console.log(req.params)
        const {client_id} = req.params
        const color = await pool.query(
            "SELECT * FROM clients WHERE client_id = $1", 
            [client_id])

        res.json(color.rows[0])
    } catch (err) {
        console.error(err.message)
    }
})

//update a good
router.put("/:client_id", async(req, res) => {
    try {
        const {client_id} = req.params
        const {fullname, client_tel, client_email} = req.body
        const updateClient = await pool.query(
            "UPDATE clients SET fullname = $2, client_tel = $3, client_email = $4 WHERE client_id = $1",
            [client_id, fullname, client_tel, client_email]
        )
        res.json("Client was updated!")
    } catch (err) {
        console.error(err.message)
    }
})

//delete color
router.delete("/:client_id", async(req, res) => {
    try {
        const {client_id} = req.params
        const deleteClient = await pool.query(
            "DELETE FROM clients WHERE client_id = $1",
            [client_id]
        )
        res.json("Client was deleted!")
    } catch (err) {
        console.error(err.message)
    }
})

//search
router.get('/search/:query', async (req, res) => {
    try{
        const { query } = req.params;

        const client = await pool.query(`SELECT * FROM clients WHERE fullname LIKE '%${query}%'`);
        await res.json(client.rows);
    }
    catch (e) {
        console.log(e.message());
    }
});

module.exports = router;