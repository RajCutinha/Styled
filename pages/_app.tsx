import Nav from "../components/Nav";
import "../styles/globals.css";
import { Provider, createClient } from "urql";

import { StateContext } from "../lib/context";

const client = createClient({
  url: "http://" + process.env.NEXT_PUBLIC_ENDPOINT + "/graphql",
});

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Provider value={client}>
        <Nav />
        <Component {...pageProps} />
      </Provider>
    </StateContext>
  );
}

export default MyApp;
