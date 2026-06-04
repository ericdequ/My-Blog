// iNaturalist helper for the AnimalGo wildlife dex. Free open data (CC per
// observation). Server-side only. iNat obscures sensitive/at-risk taxa, so the
// coordinates returned already respect geoprivacy. Observation / education only.
import { tstKey } from '@/lib/map/tst'

const INAT_BASE = 'https://api.inaturalist.org/v1/observations'

// iNat iconic taxon → display category.
const ICONIC_STYLE = {
  Aves: { id: 'birds', label: 'Birds', color: '#0ea5e9', glyph: '🦜' },
  Mammalia: { id: 'mammals', label: 'Mammals', color: '#b45309', glyph: '🦌' },
  Reptilia: { id: 'reptiles', label: 'Reptiles', color: '#16a34a', glyph: '🦎' },
  Amphibia: { id: 'amphibians', label: 'Amphibians', color: '#65a30d', glyph: '🐸' },
  Insecta: { id: 'insects', label: 'Insects', color: '#d946ef', glyph: '🦋' },
  Arachnida: { id: 'arachnids', label: 'Arachnids', color: '#78716c', glyph: '🕷️' },
  Actinopterygii: { id: 'fish', label: 'Fish', color: '#06b6d4', glyph: '🐟' },
  Mollusca: { id: 'mollusks', label: 'Mollusks', color: '#f59e0b', glyph: '🐌' },
}
const OTHER = { id: 'other', label: 'Other animals', color: '#64748b', glyph: '🐾' }

export function buildInatAnimalsUrl(bbox) {
  const [s, w, n, e] = String(bbox || '29.58,-82.45,29.72,-82.28').split(',')
  const params = new URLSearchParams({
    iconic_taxa: 'Aves,Mammalia,Reptilia,Amphibia,Insecta,Arachnida,Actinopterygii,Mollusca,Animalia',
    swlat: s,
    swlng: w,
    nelat: n,
    nelng: e,
    photos: 'true',
    per_page: '60',
    order_by: 'observed_on',
    order: 'desc',
  })
  return `${INAT_BASE}?${params.toString()}`
}

export function normalizeInatAnimals(json) {
  const results = (json && json.results) || []
  const used = {}
  const points = []
  for (const o of results) {
    const coords = o.geojson && o.geojson.coordinates // [lng, lat]
    if (!coords) continue
    const taxon = o.taxon || {}
    const style = ICONIC_STYLE[taxon.iconic_taxon_name] || OTHER
    used[style.id] = style
    const lat = coords[1]
    const lng = coords[0]
    points.push({
      id: `inat-${o.id}`,
      // Unified TST identity: name@geohash@time#type (time = observation date).
      tstKey: tstKey({ name: taxon.preferred_common_name || taxon.name, lat, lng, time: o.observed_on, type: style.id }),
      title: taxon.preferred_common_name || taxon.name || 'Unknown animal',
      lat,
      lng,
      category: style.id,
      blurb: `${taxon.name || 'Animal'} — observed ${o.observed_on || 'recently'}${
        o.place_guess ? ' near ' + o.place_guess : ''
      }.`,
      facts: {
        Scientific: taxon.name || '',
        Group: taxon.iconic_taxon_name || '',
        Grade: o.quality_grade || '',
        Observed: o.observed_on || '',
      },
      url: o.uri || `https://www.inaturalist.org/observations/${o.id}`,
    })
  }
  return {
    categories: Object.values(used),
    points,
    meta: { attribution: 'Live observations © iNaturalist contributors (CC). Observation / education only.' },
  }
}
