import { ApolloClient } from "apollo-client";
import { getMainDefinition } from "apollo-utilities";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { split } from "apollo-link";
import { WebSocketLink } from "apollo-link-ws";

// Create an Http link
const httpLink = new HttpLink({
  uri:
    process.env.REACT_APP_NETWORK_ID && process.env.REACT_APP_NETWORK_ID !== "1"
      ? "https://api.thegraph.com/subgraphs/name/sablierhq/sablier-rinkeby"
      : "https://api.thegraph.com/subgraphs/name/sablierhq/sablier",
});

// Create a WebSocket link:
const wsLink = new WebSocketLink({
  options: {
    reconnect: true,
  },
  uri:
    process.env.REACT_APP_NETWORK_ID && process.env.REACT_APP_NETWORK_ID !== "1"
      ? "wss://api.thegraph.com/subgraphs/name/sablierhq/sablier-rinkeby"
      : "wss://api.thegraph.com/subgraphs/name/sablierhq/sablier",
});

// Using the ability to split links, you can send data to each link
// depending on what kind of operation is being sent
const link = split(
  // Split based on operation type
  ({ query }) => {
    const definition = getMainDefinition(query);
    return definition.kind === "OperationDefinition" && definition.operation === "subscription";
  },
  wsLink,
  httpLink,
);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

export default client;
