import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId:'d6f70myy',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: 'skXJ17By3SdEWXRzn3ZqdBS3imsADdjt3OInZwyX2If7iX6numQIjj83omSqGAxT5Q4WMsFU6vGdIa6uQDrcjiEtGvw5XDzGRaEyY5bRIraM574g4H47BRIC4gLwXJzcB94je5kmJ2ba9cILMkI07pS1idZTNRUF00Xbhm9N6etfLqhYq2rl',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);