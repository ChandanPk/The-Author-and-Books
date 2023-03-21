import { Schema, model } from "mongoose";

const AuthorSchema = new Schema({
  name: String,
  age: Number,
});

export default model("author", AuthorSchema);
