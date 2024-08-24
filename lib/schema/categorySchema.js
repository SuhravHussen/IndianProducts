import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  alternatives: {
    type: Array,
    required: false,
  },
});

const CategorySchema =
  mongoose.models.Category || mongoose.model("Category", schema);

export default CategorySchema;
