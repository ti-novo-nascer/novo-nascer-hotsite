import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const clientOptions = {
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  useCdn: process.env.NODE_ENV === 'production'
}

const client = sanityClient(clientOptions)

export interface PageMetadata {
  slug?: string
  title: string
  name?: string
  description: string
  url: string
  image: string
  locale?: string
}

export const getPageMetadata = async (): Promise<PageMetadata> => {
  const slug = process.env.SITE_SLUG
  const pageMetadata = await client.fetch(`
    *[_type == 'pageMetadata' && slug.current == $slug] {
      title,
      name,
      description,
      url,
      image,
      locale,
      phone
    }
  `, { slug })
    .then(res => res[0])
  return pageMetadata
}

const builder = imageUrlBuilder(client)

export interface ImageSource {
  _type: 'image'
  asset: {
    _type: 'reference'
    _ref: string
  }
}

export function urlFor(src: ImageSource) {
  return builder.image(src)
}
