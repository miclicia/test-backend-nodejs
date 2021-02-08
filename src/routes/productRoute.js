const express = require("express")
const router = express.Router()
const controller = require("../controllers/productController")

router.get("/products", controller.getAllProducts)
router.get("/title", controller.getProductByName)
router.get("/category", controller.getProductByCategory)
router.post("/create", controller.createProduct)
router.put("/update/:id", controller.updateProduct)
router.patch("/updatecategory/:id", controller.updateProductCategory)
router.delete("/delete/:id", controller.deleteProduct)


module.exports = router;