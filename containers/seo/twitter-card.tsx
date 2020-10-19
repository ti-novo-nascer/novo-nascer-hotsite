import Head from 'next/head'

export interface TwitterCardProps {
  title: string // Must not exceed 70 characters
  site?: string
  description?: string // Must not exceed 200 characters
  image?: string // At least 120×120 pixels and no more than 1MB
  imageAlt?: string // Must not exceed 420 characters
}

export default function TwitterCard({
  site,
  title,
  description,
  image,
  imageAlt
}: TwitterCardProps) {
  return (
    <Head>
      <meta name='twitter:card' content='summary'/>
      <meta name='twitter:title' content={title}/>
      <meta name='twitter:site' content={site}/>
      <meta name='twitter:description' content={description}/>
      <meta name='twitter:image' content={image}/>
      <meta name='twitter:image:alt' content={imageAlt}/>
    </Head>
  )
}
