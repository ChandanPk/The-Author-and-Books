import { Schema, model } from "mongoose";

const BookSchema = new Schema({
  name: String,
  genre: String,
  authorID: String,
});

export default model("book", BookSchema);
