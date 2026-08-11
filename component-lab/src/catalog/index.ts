import type { CatalogItem, Category } from './types'
import fluffyPandaHtml from './tickets/fluffy-panda-74/component.html?raw'
import fluffyPandaCss from './tickets/fluffy-panda-74/component.css?raw'
import breezyTigerHtml from './tickets/breezy-tiger-75/component.html?raw'
import breezyTigerCss from './tickets/breezy-tiger-75/component.css?raw'
import silentBullfrogHtml from './tickets/silent-bullfrog-72/component.html?raw'
import silentBullfrogCss from './tickets/silent-bullfrog-72/component.css?raw'
import hardCobraHtml from './tickets/hard-cobra-13/component.html?raw'
import hardCobraCss from './tickets/hard-cobra-13/component.css?raw'
import garchompHtml from './cards/garchomp-divine/component.html?raw'
import garchompCss from './cards/garchomp-divine/component.css?raw'
import mewtwoHtml from './cards/mewtwo-mythic/component.html?raw'
import mewtwoCss from './cards/mewtwo-mythic/component.css?raw'
import zoroarkHtml from './cards/hisuian-zoroark-tcg/component.html?raw'
import zoroarkCss from './cards/hisuian-zoroark-tcg/component.css?raw'
import tyranitarHtml from './cards/tyranitar-status/component.html?raw'
import tyranitarCss from './cards/tyranitar-status/component.css?raw'

export const categories: Category[] = [
  { id: 'tickets', label: 'Tickets' },
  { id: 'buttons', label: 'Buttons' },
  { id: 'inputs', label: 'Inputs' },
  { id: 'cards', label: 'Cards' },
  { id: 'loaders', label: 'Loaders' },
]

export const catalog: CatalogItem[] = [
  {
    id: 'breezy-tiger-75',
    name: 'Melhor Dia Festival 2026',
    category: 'tickets',
    author: 'Neo Química Arena · SP',
    sourceUrl: '',
    html: breezyTigerHtml,
    css: breezyTigerCss,
    previewBg: '#000010',
  },
  {
    id: 'silent-bullfrog-72',
    name: 'CENA2K 2025',
    category: 'tickets',
    author: 'Neo Química Arena · SP',
    sourceUrl: '',
    html: silentBullfrogHtml,
    css: silentBullfrogCss,
    previewBg: '#1a1a1a',
  },
  {
    id: 'fluffy-panda-74',
    name: 'Homecoming · Icoaraci',
    category: 'tickets',
    author: 'Belém · PA',
    sourceUrl: '',
    html: fluffyPandaHtml,
    css: fluffyPandaCss,
    previewBg: '#0a0c10',
  },
  {
    id: 'hard-cobra-13',
    name: 'On The Radar Freestyle',
    category: 'tickets',
    author: 'On The Radar · SP',
    sourceUrl: '',
    html: hardCobraHtml,
    css: hardCobraCss,
    previewBg: '#0d0d0d',
  },
  {
    id: 'garchomp-divine',
    name: 'Garchomp · Divine',
    category: 'cards',
    author: 'Dragon / Ground',
    sourceUrl: 'https://uiverse.io/AatreyuShau/lovely-pig-54',
    html: garchompHtml,
    css: garchompCss,
    previewBg: '#08071d',
  },
  {
    id: 'mewtwo-mythic',
    name: 'Mewtwo · Mythic',
    category: 'cards',
    author: 'Psychic',
    sourceUrl: 'https://uiverse.io/chirayu-lab/rotten-sloth-56',
    html: mewtwoHtml,
    css: mewtwoCss,
    previewBg: '#000',
  },
  {
    id: 'hisuian-zoroark-tcg',
    name: 'Hisuian Zoroark · TCG',
    category: 'cards',
    author: 'Ghost / Normal',
    sourceUrl: 'https://uiverse.io/ashif_6672/brown-pig-92',
    html: zoroarkHtml,
    css: zoroarkCss,
    previewBg: '#1a1520',
  },
  {
    id: 'tyranitar-status',
    name: 'Tyranitar · Status',
    category: 'cards',
    author: 'Rock / Dark',
    sourceUrl: 'https://uiverse.io/the_5814/hot-turkey-82',
    html: tyranitarHtml,
    css: tyranitarCss,
    previewBg: '#050a0f',
  },
]

export function itemsByCategory(category: Category['id']) {
  return catalog.filter((item) => item.category === category)
}
