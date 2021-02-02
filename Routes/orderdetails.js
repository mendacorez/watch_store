const { Router } = require("express");
const router = Router();
const pool = require("../db");

//add details
router.post("/", async (req, res) => {
  try {
    const {
      watch_id,
      order_id,
      watch_quantity_in_order
    } = req.body;
    const addDetails = await pool.query(
      "INSERT INTO orderdetails(watch_id, order_id, watch_quantity_in_order) VALUES($1, $2, $3)",
      [
        watch_id,
        order_id,
        watch_quantity_in_order
      ]
    );
    res.json("Details were added");
  } catch (err) {
    console.error(err.message);
  }
});

//get all details
router.get("/", async (req, res) => {
  try {
    const getDetails = await pool.query("SELECT * FROM orderdetails ORDER BY order_id");
    res.json(getDetails.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//get a some goods
router.get("/:order_details_id", async (req, res) => {
  try {
    console.log(req.params);
    const { order_details_id } = req.params;
    const orderdetails = await pool.query(
      "SELECT * FROM orderdetails WHERE order_details_id = $1",
      [order_details_id]
    );

    res.json(orderdetails.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//update a detail
router.put("/:order_details_id", async (req, res) => {
  try {
    const { order_details_id } = req.params;
    const {
        watch_id,
        order_id,
        watch_quantity_in_order
    } = req.body;
    const updateDetails = await pool.query(
      "UPDATE orderdetails SET watch_id = $2, order_id = $3, watch_quantity_in_order = $4 WHERE order_details_id = $1",
      [
        order_details_id,
        watch_id,
        order_id,
        watch_quantity_in_order
      ]
    );
    res.json("Dtails were updated!");
  } catch (err) {
    console.error(err.message);
  }
});

//delete details
router.delete("/:order_details_id", async (req, res) => {
  try {
    const { order_details_id } = req.params;
    const deleteDetails = await pool.query(
      "DELETE FROM listofgoods WHERE order_details_id = $1",
      [order_details_id]
    );
    res.json("Details was deleted!");
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
