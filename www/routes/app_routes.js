const express = require("express");
const router = express.Router();
const services = require('../services/render');
const productsController = require('../controllers/productController');
//route index
router.get('/', services.homepage);

// Retrieve a single Product with id
router.get("/list_items", productsController.get_item);//

// Create a new Product
router.post("/insert/items" , productsController.insert_item)//

// Update a Product with id
router.post("/update/items", productsController.update_item);

// // Delete a Product with id
router.post("/delete/items", productsController.delete_item);//

module.exports = router;