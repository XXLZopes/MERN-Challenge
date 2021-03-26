// import the gql tagged template function
const { gql } = require('apollo-server-express')

//create typeDefs
const typeDefs = gql`
    type User {
        _id: ID
        username: String!
        email: String!
        password: String!
        savedBooks: [bookSchema]
    }

    type Query {
        me: User
        users: [User]
        user(username: String!): User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBooks( username: String!, savedBooks: [bookSchema]): 
    }

    type Auth {
        token: ID!
        user: User
    }

    
`;

//export typeDefs;
module.exports = typeDefs;