import mongoose from "mongoose";

let itemSchema = mongoose.Schema({
  name : {
    type : String,
    required : true
  },
  description : String,
  quantity : {
    type : Number,
    default : 0,
  },
})

let itemModel = mongoose.model('Item',itemSchema);

export default itemModel;
