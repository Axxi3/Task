const mongoose=require("mongoose") 

const PRoductSchema= new mongoose.Schema({ 
    title:{type:String,require:true},  
    Supplier:{type:String,require:true}, 
    imageUrl:{type:String,require:true},

    description:{type:String,require:true},
  
    price:{type:String,require:true},
    
},{timestamps:true})


module.exports = mongoose.model("Product", PRoductSchema);
