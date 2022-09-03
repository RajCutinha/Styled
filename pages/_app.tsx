import Nav from "../components/Nav";
import "../styles/globals.css";
import { Provider, createClient } from "urql";

const client = createClient({
  url: "http://" + process.env.NEXT_PUBLIC_ENDPOINT + "/graphql",
});

function MyApp({ Component, pageProps }) {
  return (
    <Provider value={client}>
      <Nav />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
