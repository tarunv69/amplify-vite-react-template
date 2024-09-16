import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"; 

// Create Apollo Client
const client = new ApolloClient({
  uri: 'https://6jse4x4qgzhe5ifhbrfwzikbvi.appsync-api.eu-central-1.amazonaws.com/graphql', 
  cache: new InMemoryCache(),
});

// Configure Amplify
Amplify.configure(outputs);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}> 
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
