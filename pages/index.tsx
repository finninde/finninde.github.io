import Head from "next/head";
import { GetStaticProps } from "next";
import client from "../lib/client";
import Link from "next/link";

type Blog = {
  tittel: string;
  slug: string;
};

type Recipe = {
  tittel: string;
  slug: string;
};

export default function Home(props: { blogs: Blog[]; recipes: Recipe[] }) {
  return (
    <>
      <Head>
        <title>Create FinCa App</title>
        <meta
          name="description"
          content="web site created using create-finca-app"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Heia bloggen!!!</h1>
      <h2>Mer mot tech</h2>
      <ul>
        {props.blogs &&
          props.blogs.map((blog, index) => (
            <li key={`bloglist-fp-${index}`}>
              <Link href={`/post/${blog.slug}`}>{blog.tittel}</Link>
            </li>
          ))}
      </ul>
      <h2>Mer mot mat</h2>
      <ul>
        {props.recipes &&
          props.recipes.map((recipe, index) => (
            <li key={`recipelist-fp-${index}`}>
              <Link href={`/recipe/${recipe.slug}`}>{recipe.tittel}</Link>
            </li>
          ))}
      </ul>
    </>
  );
}

export const getStaticProps: GetStaticProps<{}> = async (ctx) => {
  const blogs = await client.fetch(
    `*[_type=="artikkel" && defined(slug) && !(_id in path('drafts.**'))]{tittel, "slug":slug.current}`
  );
  const recipes = await client.fetch(
    `*[_type=="oppskrift" && defined(slug) && !(_id in path('drafts.**'))]{tittel, "slug":slug.current}`
  );
  return { props: { blogs: blogs, recipes: recipes } };
};
