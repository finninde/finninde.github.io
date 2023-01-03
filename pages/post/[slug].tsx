import { PortableTextBlock } from "@portabletext/types";
import { PortableText } from "@portabletext/react";
import { GetStaticProps } from "next";
import client from "../../lib/client";
import blogPostComponents from "../../lib/portableText/blogPost/blogPostComponents";
import Head from "next/head";
import Authors from "../../components/Authors";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

type Author = {
  name: string;
  image: SanityImageSource;
  links: string[];
};

type BlogPost = {
  blog: {
    ikiId: string;
    authors: Author[];
    cudoz: Author[];
    content: PortableTextBlock;
    tittel: string;
  };
};

export default function Post(props: BlogPost) {
  const { blog } = props;
  return (
    <>
      <Head>
        <title>{blog.tittel}</title>
        <meta property="iterate_uuid" content={blog.ikiId}></meta>
      </Head>
      <main>
        <h1>{blog.tittel}</h1>
        <PortableText value={blog.content} components={blogPostComponents} />
      </main>
      <Authors authorHeader="Written by/skrevet av" authors={blog.authors} />
      <Authors authorHeader="Cudoz/Inspirasjon til" authors={blog.cudoz} />
    </>
  );
}

export async function getStaticPaths() {
  const blogs = await client.fetch(
    `*[_type=="artikkel" && defined(slug)]{"slug":slug.current}`
  );

  const paths = blogs.map((blog: { slug: string }) => {
    return { params: { slug: blog.slug } };
  });

  return {
    paths: paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps<{}> = async (ctx) => {
  let slug = "";
  if (ctx && ctx.params && ctx.params.slug) {
    if (Array.isArray(ctx.params.slug)) {
      slug = ctx.params.slug[0];
    } else {
      slug = ctx.params.slug;
    }
  }

  const blog = await client.fetch(
    `*[_type=="artikkel" && slug.current=="${slug}"]{
	"ikiId": _id,
	tittel, "slug":slug.current, content, 
	"authors":authors[]->{image, links, name},
	"cudoz":cudoz[]->{image, links, name}
	}[0]`
  );
  return { props: { blog: blog } };
};
