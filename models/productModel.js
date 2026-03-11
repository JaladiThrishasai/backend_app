import mongoose from "mongoose";
const productSchema = mongoose.Schema({
  name:{type:String, requried:true},
  desc: {type:String, requried:true},
  price:{type:Number, requried:true},
  imageUrl: {type:String},
});
const productModel = mongoose.model("products",productSchema)

export default productModel;
