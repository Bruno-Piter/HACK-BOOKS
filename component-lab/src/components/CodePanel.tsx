type CodePanelProps = {
  html: string
  css: string
  onHtmlChange: (value: string) => void
  onCssChange: (value: string) => void
  onReset: () => void
}

export function CodePanel({
  html,
  css,
  onHtmlChange,
  onCssChange,
  onReset,
}: CodePanelProps) {
  return (
    <section className="code-panel" aria-label="Editores">
      <header className="code-panel__header">
        <h2>Editar</h2>
        <button type="button" className="ghost-btn" onClick={onReset}>
          Resetar
        </button>
      </header>

      <div className="code-grid">
        <label className="editor">
          <span>HTML</span>
          <textarea
            spellCheck={false}
            value={html}
            onChange={(event) => onHtmlChange(event.target.value)}
          />
        </label>

        <label className="editor">
          <span>CSS</span>
          <textarea
            spellCheck={false}
            value={css}
            onChange={(event) => onCssChange(event.target.value)}
          />
        </label>
      </div>
    </section>
  )
}
