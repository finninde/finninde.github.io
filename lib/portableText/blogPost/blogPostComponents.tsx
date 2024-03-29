import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { urlFor } from "../../client";
import Code from "./Code";

const blogPostComponents = {
  types: {
    image: ({ value }: { value: SanityImageSource }) => (
      <img src={urlFor(value).url()} alt="" />
    ),
    code: ({ value }: { value: { code: string; language: string } }) => (
      <Code language={value.language} code={value.code} />
    ),
  },
};

export default blogPostComponents;
