import express from "express";
import { graphqlHTTP } from "express-graphql";
import { rootSchema } from "./schema/schema.js";

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: rootSchema,
    graphiql: true,
  })
);

app.listen(3001, () => {
  console.log("server up and running on port 3001..");
});
