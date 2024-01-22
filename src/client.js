import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId:"x63it786",
  dataset: "production",
  appVersion: "2021-08-31",
  token:"skq0Bd995kdajHpoWViUm9B0jeJ18YtatNWW8m1LAinSLbAUclt0zaLCam43iGjCbFQRzBv45bwRSCCo92Ymk2lyoFvqxbVa3KXk8LP2iKWnJFhtgWdt4P3ga15BukMU4Q6cJMVy8Tpk0n2UlpXZVDrD4HpGDRqx6tScKFANRxBMjyR1gyU8",
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
  return builder.image(source);
};

export default client
