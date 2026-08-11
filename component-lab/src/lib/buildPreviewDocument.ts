type PreviewOptions = {
  html: string
  css: string
  background?: string
}

export function buildPreviewDocument({
  html,
  css,
  background = '#0a0c10',
}: PreviewOptions) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <style>
    html, body {
      margin: 0;
      width: 100%;
      height: 100%;
      overflow: auto;
      background: ${background};
      font-family: system-ui, sans-serif;
    }
    body {
      display: grid;
      place-items: center;
      position: relative;
      min-height: 100%;
    }
    ${css}
  </style>
</head>
<body>
${html}
</body>
</html>`
}
