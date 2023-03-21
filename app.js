import express from "express";
// import { graphqlHTTP } from "express-graphql";
// import { rootSchema } from "./schema/schema.js";
import { connect } from "mongoose";
import dotenv from "dotenv";

// Enable .env configuration file
dotenv.config();
const app = express();

// connect(process.env.MONGODB_URI)
//   .then(() => console.log("Connected to DB!"))
//   .catch((err) => console.log(err));

// app.use(
//   "/graphql",
//   graphqlHTTP({
//     schema: rootSchema,
//     graphiql: true,
//   })
// );

app.listen(3001, () => {
  console.log("server up and running on port 3001..");
});
