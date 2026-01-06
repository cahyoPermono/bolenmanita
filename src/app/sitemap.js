export const dynamic = 'force-static'

export default function sitemap() {
  return [
    {
      url: 'https://cahyoPermono.github.io/bolenmanita',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://cahyoPermono.github.io/bolenmanita/artikel',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://cahyoPermono.github.io/bolenmanita/artikel/rekomendasi-oleh-oleh-surabaya',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://cahyoPermono.github.io/bolenmanita/artikel/cara-menyimpan-bolen',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://cahyoPermono.github.io/bolenmanita/artikel/cerita-kami',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}
