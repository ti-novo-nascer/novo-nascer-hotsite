import Head from 'next/head'

function Seo({ title, description, url, image }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={description}/>
      <meta property='og:title' content={title}/>
      <meta property='og:description' content={description}/>
      <meta property='og:url' content={url}/>
      <meta property='og:image' content={image}/>
      <meta property='og:type' content='website'/>
      <meta property='og:locale' content='pt_BR'/>
    </Head>
  )
}

export default Seo