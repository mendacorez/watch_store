const { Router } = require('express');
const router = Router();
const pool = require('../db');

router.get('/:dateFrom/:dateTo', async (req, res) => {
    const {dateFrom , dateTo} = req.params;
    const query = "SELECT * FROM orders WHERE date_of_sale BETWEEN $1 AND $2";
    try{
        const report = await pool.query(query, [dateFrom, dateTo]);
        await res.json(report.rows);
    }
    catch (err){
        console.log(err.message);
    }
});


module.exports = router;