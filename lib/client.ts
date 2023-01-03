import SanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

const client = SanityClient({
  projectId: "6yo33vbl",
  dataset: "prod",
  apiVersion: "2023-01-01",
  token:
    "skKMOeTkk4mZI1G7jUx5PklQW8XC0cuu7SVtTItO9yAD5sS04D4YQ9fp1Jov1knWtzS66eTKVoH4USRoYAiuPrP7MNSYC025oaWLBnvQM57GTPAB1AYY84XVRrWh9YMf9OHEW0AsZUBwaN8EIB3hYHoOzLou55v0y7sCq2BQoyH7iwfYE5Iv",
  useCdn: true,
});

export default client;

const urlBuilderFactory = imageUrlBuilder(client);

export function urlFor(image: SanityImageSource) {
  return urlBuilderFactory.image(image);
}
