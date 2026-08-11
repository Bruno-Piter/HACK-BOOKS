import { startTransition, useEffect, useMemo, useState } from 'react'
import { catalog, categories, itemsByCategory } from './catalog'
import type { CategoryId } from './catalog/types'
import { CodePanel } from './components/CodePanel'
import { LivePreview } from './components/LivePreview'
import './App.css'

const initialItem = catalog[0]

function App() {
  const [category, setCategory] = useState<CategoryId>(
    initialItem?.category ?? 'tickets',
  )
  const [selectedId, setSelectedId] = useState(initialItem?.id ?? '')
  const [html, setHtml] = useState(initialItem?.html ?? '')
  const [css, setCss] = useState(initialItem?.css ?? '')
  const [previewFullscreen, setPreviewFullscreen] = useState(false)

  const items = useMemo(() => itemsByCategory(category), [category])
  const selected = catalog.find((item) => item.id === selectedId) ?? items[0]

  useEffect(() => {
    if (!selected) return
    if (selected.category !== category) return
    setHtml(selected.html)
    setCss(selected.css)
  }, [selected, category])

  useEffect(() => {
    if (items.length === 0) {
      setSelectedId('')
      setHtml('')
      setCss('')
      return
    }

    const stillVisible = items.some((item) => item.id === selectedId)
    if (!stillVisible) {
      setSelectedId(items[0].id)
    }
  }, [items, selectedId])

  useEffect(() => {
    if (!previewFullscreen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setPreviewFullscreen(false)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [previewFullscreen])

  return (
    <div
      className={
        previewFullscreen ? 'app-shell is-preview-fullscreen' : 'app-shell'
      }
    >
      <aside className="sidebar">
        <div className="brand">
          <p className="brand__mark">Component Lab</p>
          <p className="brand__sub">Loja local · tickets &amp; game cards</p>
        </div>

        <nav className="tabs" aria-label="Categorias">
          {categories.map((tab) => {
            const count = itemsByCategory(tab.id).length
            return (
              <button
                key={tab.id}
                type="button"
                className={tab.id === category ? 'tab is-active' : 'tab'}
                onClick={() => {
                  startTransition(() => setCategory(tab.id))
                }}
              >
                <span>{tab.label}</span>
                <span className="tab__count">{count}</span>
              </button>
            )
          })}
        </nav>

        <ul className="item-list">
          {items.length === 0 ? (
            <li className="empty">Nenhum componente nesta aba ainda.</li>
          ) : (
            items.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  className={
                    item.id === selected?.id ? 'item is-active' : 'item'
                  }
                  onClick={() => {
                    startTransition(() => {
                      setSelectedId(item.id)
                      setHtml(item.html)
                      setCss(item.css)
                    })
                  }}
                >
                  <span className="item__name">{item.name}</span>
                  <span className="item__meta">{item.author}</span>
                </button>
              </li>
            ))
          )}
        </ul>
      </aside>

      <main className="workspace">
        <header className="workspace__header">
          <div>
            <h1>{selected?.name ?? 'Selecione um componente'}</h1>
            {selected ? (
              <p>
                Local: <span>{selected.author}</span>
                {selected.sourceUrl ? (
                  <>
                    {' · '}
                    <a
                      href={selected.sourceUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      fonte
                    </a>
                  </>
                ) : null}
              </p>
            ) : (
              <p>Selecione um ingresso na lista ao lado.</p>
            )}
          </div>
          <p className="hint">Edite → preview atualiza na hora</p>
        </header>

        <div className="preview-stage">
          <div className="preview-toolbar">
            <button
              type="button"
              className="ghost-btn"
              onClick={() => setPreviewFullscreen((value) => !value)}
            >
              {previewFullscreen ? 'Sair da tela cheia (Esc)' : 'Tela cheia'}
            </button>
          </div>
          {selected ? (
            <LivePreview
              html={html}
              css={css}
              background={selected.previewBg}
              useTailwind={selected.useTailwind}
            />
          ) : (
            <div className="preview-empty">Sem preview</div>
          )}
        </div>

        {selected ? (
          <CodePanel
            html={html}
            css={css}
            onHtmlChange={setHtml}
            onCssChange={setCss}
            onReset={() => {
              setHtml(selected.html)
              setCss(selected.css)
            }}
          />
        ) : null}
      </main>
    </div>
  )
}

export default App
