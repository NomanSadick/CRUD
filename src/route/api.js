const express = require('express');
const ProductsController = require('../controller/ProductsController');
const router = express.Router();

// API ROUTER END POINT
// C = Create 
router.post('/CreateProduct', ProductsController.CreateProduct);

// R = Read 
router.post('/ReadProduct', ProductsController.ReadProduct);


router.post('/ReadProductById/:id', ProductsController.ReadProductById);

// U = Update 
router.post('/UpdateProduct/:id', ProductsController.UpdateProduct);

// D = Delete 
router.delete('/DeleteProduct/:id', ProductsController.DeleteProduct);

module.exports = router;
