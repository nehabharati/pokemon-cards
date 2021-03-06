import gql from "graphql-tag";

export const GET_POKEMONS = gql`
  query pokemons($first: Int!) {
    pokemons(first: $first) {
      id
      name
      maxHP
      maxCP
      image
      attacks {
        special {
          name
          damage
        }
      }
    }
  }
`;
