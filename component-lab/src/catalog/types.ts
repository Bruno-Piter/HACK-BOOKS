export type CategoryId = 'tickets' | 'buttons' | 'inputs' | 'cards' | 'loaders'

export type CatalogItem = {
  id: string
  name: string
  category: CategoryId
  author: string
  sourceUrl: string
  html: string
  css: string
  previewBg?: string
  /** Usa Tailwind CDN no iframe de preview (componentes com utility classes). */
  useTailwind?: boolean
}

export type Category = {
  id: CategoryId
  label: string
}
