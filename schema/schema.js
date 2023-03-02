import {
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from "graphql";
import _ from "lodash";

const books = [
  { name: "game of thrones", genre: "comic", id: "1", authorID: "2" },
  { name: "Name of the wind", genre: "scifi", id: "2", authorID: "2" },
  { name: "lord of kings", genre: "mystery", id: "3", authorID: "1" },
  { name: "the family man", genre: "thriller", id: "4", authorID: "4" },
];

const authors = [
  { name: "William", age: 22, id: "1" },
  { name: "Mario", age: 11, id: "2" },
  { name: "Martias", age: 32, id: "3" },
  { name: "Remya", age: 43, id: "4" },
];

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    id: { type: GraphQLID },
    author: {
      type: AuthorType,
      resolve(parent, args) {
        return _.find(authors, { id: parent.authorID });
      },
    },
  }),
});

const AuthorType = new GraphQLObjectType({
  name: "Author",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        return _.filter(books, { authorID: parent.id });
      },
    },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    // Get book by bookID
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return _.find(books, { id: args.id });
      },
    },
    // Get author by authorID
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return _.find(authors, { id: args.id });
      },
    },
    // Get all books list
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        return books;
      },
    },
    // Get all Authors list
    authors: {
      type: new GraphQLList(AuthorType),
      resolve(parent, args) {
        return authors;
      },
    },
  },
});

const rootSchema = new GraphQLSchema({
  query: RootQuery,
});

export { rootSchema };
