import { useDeferredValue, useMemo } from 'react'
import { buildPreviewDocument } from '../lib/buildPreviewDocument'

type LivePreviewProps = {
  html: string
  css: string
  background?: string
  useTailwind?: boolean
}

export function LivePreview({
  html,
  css,
  background,
  useTailwind,
}: LivePreviewProps) {
  const deferredHtml = useDeferredValue(html)
  const deferredCss = useDeferredValue(css)

  const srcDoc = useMemo(
    () =>
      buildPreviewDocument({
        html: deferredHtml,
        css: deferredCss,
        background,
        useTailwind,
      }),
    [deferredHtml, deferredCss, background, useTailwind],
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
