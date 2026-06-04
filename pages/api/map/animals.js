// Live wildlife observations for the AnimalGo dex — proxies the iNaturalist API
// (free open data) server-side and returns the MapExplorer contract.
import { buildInatAnimalsUrl, normalizeInatAnimals } from '@/lib/map/inaturalist'

export default async function handler(req, res) {
  const bbox = req.query.bbox
  try {
    const upstream = await fetch(buildInatAnimalsUrl(bbox), {
      headers: {
        'User-Agent': 'rics-notebook-map/1.0 (https://www.rics-notebook.com)',
        Accept: 'application/json',
      },
    })
    if (!upstream.ok) throw new Error('inat ' + upstream.status)
    const json = await upstream.json()
    res.setHeader('Cache-Control', 's-maxage=43200, stale-while-revalidate=604800')
    res.status(200).json(normalizeInatAnimals(json))
  } catch (e) {
    res.status(200).json({ error: String(e.message || e), points: [] })
  }
}
