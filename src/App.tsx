import Wrapper from "./components/Wrapper";
import Card from "./components/Card";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { countriesClient } from "./clients/graphql.";
import { HomePage } from "./pages";
import { CountryPage } from "./pages/";

function App() {
  return (
    <ApolloProvider client={countriesClient}>
      <BrowserRouter>
        <Wrapper>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/paises/:countryCode">
              <CountryPage />
            </Route>
          </Switch>
        </Wrapper>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
