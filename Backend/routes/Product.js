const router=require("express").Router()
const ProductController = require("../controllers/ProductsControllers");


router.get("/",ProductController.getAllProduct) 
router.post("/createproduct", ProductController.createProduct);


module.exports=router