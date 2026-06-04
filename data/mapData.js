// Map dataset for Ric's Notebook — an "AnimalGo" regional wildlife dex.
// LIVE: fetches real iNaturalist animal observations for the current viewport
// from /api/map/animals, falling back to these Gainesville seed species.
// Observation / education only. (No bars — nightlife places live in BEV.)
const mapData = {
  meta: {
    title: 'Wildlife Dex',
    subtitle:
      'A regional animal dex — live from iNaturalist for wherever you pan. Filter by group and open a sighting for the species, date and grade. Observation & education only.',
    accent: '#0ea5e9',
    center: [-82.34, 29.648],
    zoom: 12,
    endpoint: '/api/map/animals',
    attribution: 'Live observations © iNaturalist (CC); seed fixtures from the BEV map lab (animalGo).',
  },
  categories: [
    { id: 'birds', label: 'Birds', color: '#0ea5e9', glyph: '🦜' },
    { id: 'mammals', label: 'Mammals', color: '#b45309', glyph: '🦌' },
    { id: 'reptiles', label: 'Reptiles', color: '#16a34a', glyph: '🦎' },
    { id: 'insects', label: 'Insects', color: '#d946ef', glyph: '🦋' },
  ],
  points: [
    { id: 'gnv-barred-owl', title: 'Barred owl', lat: 29.6603, lng: -82.3189, category: 'birds', blurb: 'A barred owl observed in the Gainesville wetland/urban edge.', facts: { Scientific: 'Strix varia', Group: 'Aves', Grade: 'candidate' } },
    { id: 'gnv-gopher-tortoise', title: 'Gopher tortoise', lat: 29.6451, lng: -82.3559, category: 'reptiles', blurb: 'A gopher tortoise — a keystone species of Florida sandhills.', facts: { Scientific: 'Gopherus polyphemus', Group: 'Reptilia', Grade: 'candidate' } },
    { id: 'gnv-gator', title: 'American alligator', lat: 29.6603, lng: -82.3189, category: 'reptiles', blurb: 'An American alligator in a Gainesville wetland (observe from a distance).', facts: { Scientific: 'Alligator mississippiensis', Group: 'Reptilia', Grade: 'candidate' } },
    { id: 'gnv-monarch', title: 'Monarch butterfly', lat: 29.6422, lng: -82.3441, category: 'insects', blurb: 'A monarch butterfly observed in Gainesville.', facts: { Scientific: 'Danaus plexippus', Group: 'Insecta', Grade: 'candidate' } },
  ],
}

export default mapData
