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
import unluckyGoatHtml from './loaders/unlucky-goat-90/component.html?raw'
import unluckyGoatCss from './loaders/unlucky-goat-90/component.css?raw'
import tameSlothHtml from './loaders/tame-sloth-13/component.html?raw'
import tameSlothCss from './loaders/tame-sloth-13/component.css?raw'
import sillyYakHtml from './loaders/silly-yak-46/component.html?raw'
import sillyYakCss from './loaders/silly-yak-46/component.css?raw'
import modernTermiteHtml from './loaders/modern-termite-44/component.html?raw'
import modernTermiteCss from './loaders/modern-termite-44/component.css?raw'
import hungryPigHtml from './loaders/hungry-pig-40/component.html?raw'
import hungryPigCss from './loaders/hungry-pig-40/component.css?raw'
import plasticRabbitHtml from './inputs/plastic-rabbit-38/component.html?raw'
import plasticRabbitCss from './inputs/plastic-rabbit-38/component.css?raw'

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
    sourceUrl: '',
    html: garchompHtml,
    css: garchompCss,
    previewBg: '#08071d',
  },
  {
    id: 'mewtwo-mythic',
    name: 'Mewtwo · Mythic',
    category: 'cards',
    author: 'Psychic',
    sourceUrl: '',
    html: mewtwoHtml,
    css: mewtwoCss,
    previewBg: '#000',
  },
  {
    id: 'hisuian-zoroark-tcg',
    name: 'Hisuian Zoroark · TCG',
    category: 'cards',
    author: 'Ghost / Normal',
    sourceUrl: '',
    html: zoroarkHtml,
    css: zoroarkCss,
    previewBg: '#1a1520',
  },
  {
    id: 'tyranitar-status',
    name: 'Tyranitar · Status',
    category: 'cards',
    author: 'Rock / Dark',
    sourceUrl: '',
    html: tyranitarHtml,
    css: tyranitarCss,
    previewBg: '#050a0f',
  },
  {
    id: 'unlucky-goat-90',
    name: 'Solid 3D Spinner',
    category: 'loaders',
    author: 'Polyhedron',
    sourceUrl: '',
    html: unluckyGoatHtml,
    css: unluckyGoatCss,
    previewBg: '#0a0a0c',
  },
  {
    id: 'tame-sloth-13',
    name: 'Nucleus Rings',
    category: 'loaders',
    author: 'Orbital',
    sourceUrl: '',
    html: tameSlothHtml,
    css: tameSlothCss,
    previewBg: '#050508',
  },
  {
    id: 'silly-yak-46',
    name: 'Perspective Grid',
    category: 'loaders',
    author: 'Grid Warp',
    sourceUrl: '',
    html: sillyYakHtml,
    css: sillyYakCss,
    previewBg: '#000010',
  },
  {
    id: 'modern-termite-44',
    name: 'Sphere Cluster',
    category: 'loaders',
    author: '3D Orbs',
    sourceUrl: '',
    html: modernTermiteHtml,
    css: modernTermiteCss,
    previewBg: '#000',
  },
  {
    id: 'hungry-pig-40',
    name: 'Star Cracks',
    category: 'loaders',
    author: 'Preloader',
    sourceUrl: '',
    html: hungryPigHtml,
    css: hungryPigCss,
    previewBg: '#0c0a10',
  },
  {
    id: 'plastic-rabbit-38',
    name: 'Quantum Nexus',
    category: 'inputs',
    author: 'AI Engine Panel',
    sourceUrl: '',
    html: plasticRabbitHtml,
    css: plasticRabbitCss,
    previewBg: '#030712',
    useTailwind: true,
  },
]

export function itemsByCategory(category: Category['id']) {
  return catalog.filter((item) => item.category === category)
}
