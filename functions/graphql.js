exports.handler = async (event, context, callback) => {
    const processedParam = JSON.parse(event.body).page;
    const { ApolloClient, createHttpLink, InMemoryCache } = require('@apollo/client');
    const setContext = require('@apollo/client/link/context').setContext;
    const fetch = require('cross-fetch');
    const gql = require('@apollo/client').gql;
  
    const httpLink = createHttpLink({
      uri: "https://rickandmortyapi.com/graphql", fetch
    });
    
    const authLink = setContext((_, { headers }) => {
      return {
        headers: {
          ...headers
        }
      };
    });
    
    const client = new ApolloClient({
      link: authLink.concat(httpLink),
      cache: new InMemoryCache()
    });
    const { data } = await client.query({
      query: gql`
      query getCharacters {
        characters(page: ${processedParam}) {
          results {
            id
            name
            species
            status
          }
        }
      }`,
    });
  
    return {
      statusCode: 200,
      body: JSON.stringify(data.characters.results)
    };
  }