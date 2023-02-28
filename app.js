import express from "express";
import { graphqlHTTP } from "express-graphql";

const app = express();

app.use("/graphql", graphqlHTTP({}));

app.listen(3001, () => {
  console.log("server up and running on port 3001..");
});
