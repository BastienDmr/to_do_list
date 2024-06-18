// Import access to database tables
const client = require("../../database/client");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all items from the database
    const [items] = await client.query(
      "SELECT items.id, items.name, items.quantity, category.id AS category_id, category.title AS category_title, status.id AS status_id, status.title AS status_title FROM items INNER JOIN category ON items.category_id = category.id INNER JOIN status ON items.status_id = status.id"
    );

    // Respond with the items in JSON format
    res.status(200).json(items);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific item from the database based on the provided ID
    const [item] = await client.query(
      "SELECT items.id, items.name, items.quantity, category.id AS category_id, category.title AS category_title, status.id AS status_id, status.title AS status_title FROM items INNER JOIN category ON items.category_id = category.id INNER JOIN status ON items.status_id = status.id WHERE items.id = ? LIMIT 1",
      [[req.params.id]]
    );

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the item in JSON format
    if (item == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(item[0]);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
// This operation is not yet implemented

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the item data from the request body
  const item = req.body;

  try {
    // Insert the item into the database
    const insertId = await client.query("INSERT INTO items(title) VALUES (?)", [
      item.title,
    ]);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted item
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented

// Ready to export the controller functions
module.exports = {
  browse,
  read,
  // edit,
  add,
  // destroy,
};
