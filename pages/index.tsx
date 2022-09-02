import Head from "next/head";
import Product from "../components/Products";
import { Gallery } from "../styles/Gallary";

import { useQuery } from "urql";
import { PRODUCT_QUERY } from "../lib/query";

export default function Home(): JSX.Element {
  const res: any = useQuery({ query: PRODUCT_QUERY });
  const { fetching, error, data } = res[0];
  const products = data?.products?.data;

  console.log(products);

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Gallery>
          {products &&
            products.map((product: any) => {
              return (
                <Product product={product} key={product.attributes.slug} />
              );
            })}
        </Gallery>
      </main>
    </div>
  );
}
