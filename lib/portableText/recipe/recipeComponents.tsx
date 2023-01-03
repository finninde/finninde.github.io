import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { urlFor } from "../../client";
import Ingrediensliste from "./Ingrediensliste";

const recipeComponents = {
  types: {
    image: ({ value }: { value: SanityImageSource }) => (
      <img src={urlFor(value).url()} alt="" />
    ),
    ingrediensliste: ({ value }: { value: any }) => (
      <Ingrediensliste liste={value.liste} id={value._id} />
    ),
  },
};

export default recipeComponents;
