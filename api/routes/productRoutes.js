const express = require("express");
const router = express.Router();
const  productsController = require('../controllers/productController');



// Create a new Product
router.post("/", productsController.insert_item);

// Retrieve all Products
router.get("/", productsController.get_all_items);

// Retrieve a single Product with id
router.get("/:id", productsController.get_item_by_id);

// Update a Product with id
router.put("/:id", productsController.update_item);

// // Delete a Product with id
router.delete("/:id", productsController.delete_item);

module.exports = router;