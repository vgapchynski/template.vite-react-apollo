import { ApolloProvider } from "@apollo/client";
import * as CH from "@chakra-ui/react";
import * as D from "duck";
import React from "react";
import { BrowserRouter } from "react-router-dom";

import App from "./app.tsx";

const AppProvider: React.FC = () => {
  return (
    <ApolloProvider client={D.CLIENT}>
      <CH.ChakraBaseProvider theme={D.THEME}>
        <CH.ColorModeScript
          initialColorMode={D.THEME.config.initialColorMode}
        />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CH.ChakraBaseProvider>
    </ApolloProvider>
  );
};

export default AppProvider;
