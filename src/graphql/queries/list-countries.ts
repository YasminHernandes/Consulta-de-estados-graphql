import { gql } from "@apollo/client"

export const LIST_COUNTRIES = gql `
  query ListCountries {
      countries(filter: { continent: { eq: "SA" } }) {
        code
        name
        native
        capital
        currency
        languages {
          code
          name
        }
      }
    }
`;