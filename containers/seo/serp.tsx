export interface SerpProps {
  title: string
  description: string
  url: string
  lang: string
  isCanonical?: boolean
  isAlternate?: boolean
  isDefaultAlternate?: boolean
}

export default function Serp({
  title,
  description,
  url,
  lang,
  isCanonical,
  isAlternate,
  isDefaultAlternate
}: SerpProps) {
  return (
    <>
      <title>{title}</title>
      <meta name='description' content={description}/>
      {isCanonical && (
        <link rel='canonical' href={url}/>
      )}
      {isAlternate && (
        <link rel='alternate' href={url} hrefLang={lang}/>
      )}
      {isDefaultAlternate && (
        <link rel='alternate' href={url} hrefLang='x-default'/>
      )}
    </>
  )
}
