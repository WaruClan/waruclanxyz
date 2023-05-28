import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
//import theme from "./theme";

//Desactivation du ReportWebVitalis
//import reportWebVitals from "./reportWebVitals";

import { ThirdwebProvider } from "@thirdweb-dev/react";
//import { ChakraProvider } from "@chakra-ui/react";

//Fichier CSS livré en standard mais désactivé au profit de Chakra
import "./styles/globals.css";

// const configChakra = {
//   useSystemColorMode: false,
//   initialColorMode: 'dark',
// }

// const theme = extendTheme(configChakra);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <ThirdwebProvider activeChain="polygon">
      {/* <ChakraProvider theme="dark"> */}
      {/* <ColorModeScript initialColorMode={theme.config.initialColorMode}/> */}
        <App/>
      {/* </ChakraProvider> */}
    </ThirdwebProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();