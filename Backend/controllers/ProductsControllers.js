const mongoose=require("mongoose") 
const Product =require("../models/Product") 

module.exports={
    createProduct:async(req,res)=>{ 
        const newProduct=new Product(req.body)
        try {
            await newProduct.save() 
            res.status(200).json("Product Created Successfully")
        } catch (error) {
            res.status(200).json("Faileed to create")
        }
    },
     getAllProduct :async (req, res) => {
        try {
            // Use Mongoose to query the database and retrieve all products, sorted by createdAt in descending order
            const products = await Product.find().sort({ createdAt: -1 });
    
            // Send the retrieved products as a JSON response
            res.status(200).json(products);
        } catch (error) {
            console.error("Error fetching products:", error);
           
            res.status(500).json({ error: "Failed to get products" });
        }
    },
    
    getProduct:async(req,res)=>{ 
        try {
            const products=await Product.findbyId(req.params.id)
            res.status(200).json(products)
        } catch (error) {
            res.status(200).json("Faileed to get")
        }
},

}