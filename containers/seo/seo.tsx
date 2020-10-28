import Head from 'next/head'

export interface SeoProps {
  url: string
  siteName: string
  title: string
  description: string
  image: {
    url: string
    type: string
    width: string
    height: string
    alt: string
  }
  locale: string
}

export default function Seo({
  url,
  siteName,
  title,
  description,
  image,
  locale
}: SeoProps) {
  return (
    <Head>
      <meta name='author' content='Lucas Alves Costa'/>
      {/* SERP tags */}
      <title>{title}</title>
      <meta name='description' content={description}/>
      {/* Open Graph tags */}
      <meta property='og:url' content={url}/>
      <meta property='og:site_name' content={siteName}/>
      <meta property='og:title' content={title}/>
      <meta property='og:description' content={description}/>
      <meta property='og:type' content='website'/>
      <meta property='og:image' content={image.url}/>
      <meta property='og:image:type' content={image.type}/>
      <meta property='og:image:width' content={image.width}/>
      <meta property='og:image:height' content={image.height}/>
      <meta property='og:image:alt' content={image.alt}/>
      <meta property='og:locale' content={locale.replace('-', '_')}/>
      {/* Twitter Card tags */}
      <meta name='twitter:card' content='summary'/>
      <meta name='twitter:title' content={title}/>
      <meta name='twitter:description' content={description}/>
      <meta name='twitter:image' content={image.url}/>
      <meta name='twitter:image:alt' content={image.alt}/>
    </Head>
  )
}
