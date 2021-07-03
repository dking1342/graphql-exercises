import React from 'react'
import logo from './dist/spacex.png';
import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  from,
  ApolloProvider
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Launches from './components/Launches';
import Launch from './components/Launch';

const httpLink = new HttpLink({
  uri: "http://localhost:5000/graphql"
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );

  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const client = new ApolloClient({
  link:from([errorLink,httpLink]),
  cache: new InMemoryCache(),
})

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <main className="container">
          <img 
            src={logo} 
            alt="spacex logo" 
            style={{width:300, display:'block',margin:'auto'}}  
          />
          <Route exact path='/' component={Launches} />
          <Route exact path='/launch/:flight_number' component={Launch} />
        </main>

      </Router>
    </ApolloProvider>
  )
}

export default App;