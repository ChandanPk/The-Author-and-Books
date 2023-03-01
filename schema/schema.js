import { GraphQLObjectType, GraphQLSchema, GraphQLString } from "graphql";
import _ from "lodash";

const books = [
  { name: "game of thrones", genre: "comic", id: "1" },
  { name: "Name of the wind", genre: "scifi", id: "2" },
  { name: "lord of kings", genre: "mystery", id: "3" },
  { name: "the family man", genre: "thriller", id: "4" },
];

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        return _.find(books, { id: args.id });
      },
    },
  },
});

const rootSchema = new GraphQLSchema({
  query: RootQuery,
});

export { rootSchema };
