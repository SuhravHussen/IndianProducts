import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
    required: true,
  },
  keywords: {
    type: Array,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

schema.index({ keywords: "text" });

const ProductSchema =
  mongoose.models.Product || mongoose.model("Product", schema);

export default ProductSchema;
