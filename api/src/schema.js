const { gql } = require('apollo-server')

/**
 * Type Definitions for our Schema using the SDL.
 */
const typeDefs = gql`
  enum ShoeType{
    JORDAN
    ADIDDAS
    NIKE
  }

  type User {
    id:ID!
    username: String!
  }

  type Pet{
    id:ID!
    createAt: String
    name: String
    type: String
  }

  input PetInput{
    name: String
    type: String
  }

  interface Shoe {
    brand: ShoeType!
    size: Int!
  }

  input ShoesInput {
    brand: ShoeType
    size: Int
  }

  type Query { 
    pets(input: PetInput):[Pet]!
    shoes(input:ShoesInput):[Shoe]!
    pet(input: PetInput):Pet
  }

  input NewShoeInput{
    brand: ShoeType!
    size: Int!
  }

  input NewPetInput{
    name: String!
    type: String!
  }

  type Mutation {
    newPet(input: NewPetInput):Pet!
    newShoe(input: NewShoeInput):Shoe!
  }

`;

module.exports = typeDefs
