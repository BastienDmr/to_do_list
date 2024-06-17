const express = require("express");
const client = require("../database/client");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemActions module for handling item-related operations
const itemActions = require("./controllers/itemActions");

// Route to get a list of items
router.get("/items", (req, res) => {
  client
    .query(
      "SELECT items.id, items.name, items.quantity, category.id AS category_id, category.title AS category_title, status.id AS status_id, status.title AS status_title FROM items INNER JOIN category ON items.category_id = category.id INNER JOIN status ON items.status_id = status.id;"
    )
    .then(([items]) => {
      res.status(200).json(items);
    });
});

// Route to get a specific item by ID
router.get("/items/:id", itemActions.read);

// Route to add a new item
router.post("/items", itemActions.add);

/* ************************************************************************* */

module.exports = router;
