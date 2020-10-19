export interface OpenGraphProps {
  title: string
  type: string
  image: string
  url: string
}

export default function OpenGraph({
  title,
  type,
  image,
  url
}: OpenGraphProps) {
  return (
    <>
      <meta property='og:title' content={title}/>
      <meta property='og:type' content={type}/>
      <meta property='og:image' content={image}/>
      <meta property='og:url' content={url}/>
    </>
  )
}
