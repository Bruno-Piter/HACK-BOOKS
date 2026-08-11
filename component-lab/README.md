# Component Lab

Loja local de componentes UI (HTML + CSS) com preview ao vivo e edição.

Foco: colar peças do [Uiverse](https://uiverse.io) **em HTML + CSS** (não React/styled-components) para manter fidelidade.

## Rodar

```bash
cd component-lab
npm install
npm run dev
```

## Adicionar um componente

1. Crie a pasta: `src/catalog/<categoria>/<slug>/`
2. Salve `component.html` e `component.css` (copiados do Uiverse)
3. Registre em `src/catalog/index.ts`

Exemplo já incluso: `tickets/fluffy-panda-74` — [Uiverse Ticket](https://uiverse.io/marcelodolza/fluffy-panda-74) por marcelodolza (MIT).
