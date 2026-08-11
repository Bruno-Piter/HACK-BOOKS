import { useDeferredValue, useMemo } from 'react'
import { buildPreviewDocument } from '../lib/buildPreviewDocument'

type LivePreviewProps = {
  html: string
  css: string
  background?: string
}

export function LivePreview({ html, css, background }: LivePreviewProps) {
  const deferredHtml = useDeferredValue(html)
  const deferredCss = useDeferredValue(css)

  const srcDoc = useMemo(
    () =>
      buildPreviewDocument({
        html: deferredHtml,
        css: deferredCss,
        background,
      }),
    [deferredHtml, deferredCss, background],
  )

  return (
    <iframe
      className="preview-frame"
      title="Component preview"
      sandbox="allow-scripts allow-same-origin"
      srcDoc={srcDoc}
    />
  )
}
