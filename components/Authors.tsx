import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Link from "next/link";
import { urlFor } from "../lib/client";

type AuthorProps = {
  name: string;
  image: SanityImageSource;
  links: string[];
};

type AuthorsProps = {
  authorHeader: String;
  authors: AuthorProps[];
};

const Authors = ({ authorHeader, authors }: AuthorsProps) => {
  return (
    <>
      <h2>{authorHeader}</h2>
      {authors &&
        authors.map((author, index) => {
          return (
            <Author
              name={author.name}
              image={author.image}
              links={author.links}
              key={`authorlist-${authorHeader}-${index}`}
            />
          );
        })}
    </>
  );
};
export default Authors;

const Author = ({ name, image, links }: AuthorProps) => {
  return (
    <>
      <h3>{name}</h3>
      <img src={urlFor(image).url()} alt="" />
      <ul>
        {links.map((link, index) => (
          <li key={`authorlinks-${name}-${index}`}>
            <Link href={link}>{link}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
