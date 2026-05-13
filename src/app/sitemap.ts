import { MetadataRoute } from 'next'

const BASE_URL = 'https://bowmew-ah.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date()

  const mainPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: currentDate, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE_URL}/about`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/services`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },

    { url: `${BASE_URL}/first-visit`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/access`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/blog`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/faq`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/reservation`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
  ]

  const blogSlugs = [
    'cat-cystitis-symptoms',
    'cat-diabetes',
    'cat-escape-injury',
    'cat-health-checkup',
    'cat-kidney-disease',
    'cat-nail-trimming',
    'cat-neuter-cost',
    'cat-spay-timing',
    'cat-stomatitis',
    'cat-stress-signs',
    'cat-vomiting-causes',
    'dental-care',
    'dog-car-sickness',
    'dog-diarrhea-when-to-visit',
    'dog-ear-infection',
    'dog-epilepsy',
    'dog-food-allergy',
    'dog-foreign-body',
    'dog-fracture-first-aid',
    'dog-health-checkup-cost',
    'dog-heart-disease',
    'dog-neuter-benefits',
    'dog-paw-burn',
    'dog-separation-anxiety',
    'dog-skin-disease',
    'dog-spay-surgery',
    'dog-vaccine-types',
    'emergency-vet-ichihara',
    'filaria-prevention',
    'microchip-registration',
    'obesity-prevention',
    'pet-age-chart',
    'pet-disaster-preparedness',
    'pet-insurance-guide',
    'puppy-first-visit',
    'rabies-vaccination-ichihara',
    'rainy-season-skin',
    'senior-dog-care',
    'summer-heatstroke',
    'tick-prevention',
    'vaccine-schedule',
    'winter-joint-care',
  ]

  const blogPages: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...mainPages, ...blogPages]
}
