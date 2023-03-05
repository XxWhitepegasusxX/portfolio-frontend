import sanityClient, { ClientConfig } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'

const clientConfig: ClientConfig = {
    projectId: "7oyvndd8",
    dataset: 'production',
    useCdn: true,
    token: "skrJpyBG4Hwd7IxAcZ3MordbUK2QVrFu7Hb3J0RZY4puK7DEyeA2z7gxHzlBcRi6C07XvLwwDfFukWZceUzv9XBjyz4v0sQzGJ4MZxKq3Z4gQ2NY2md3qozbgQ55wz0LDp7hM4hFG1oj3e9bisrlsdElW5Zg2BNXW3kdiMkBVOMnAaYZY5Mc",
}

export const client = sanityClient(clientConfig); 

const builder = imageUrlBuilder(client);

export const urlFor = (source: string) => builder.image(source)