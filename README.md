# AI-HACK-BOOKS

Biblioteca local de referência para trabalhar com **Cursor**, **Claude**, **React/Next.js** e apps com IA.

Use este `README.md` como mapa: em outro PC, basta ter este arquivo e rodar a seção [Reconstruir a pasta](#reconstruir-a-pasta-em-outro-pc).

**Caminho padrão:** `C:\PROJETOS\AI-HACK-BOOKS`

---

## Propósito

Esta pasta concentra cookbooks e packs de rules prontos para:

- Consultar exemplos offline (notebooks, SDK, patterns)
- Copiar rules para `.cursor/rules/` nos seus projetos
- Referenciar no Cursor com `@` (pasta ou arquivo) durante o chat/agent
- Reconstruir a mesma biblioteca em qualquer máquina só a partir deste MD

Não é um monorepo de app. Cada subpasta é um clone independente do GitHub (`git clone --depth 1`).

---

## Como usar no dia a dia

1. Abra `C:\PROJETOS\AI-HACK-BOOKS` (ou uma subpasta específica) no Cursor, ou mantenha como pasta de referência.
2. No chat/agent, referencie com `@` — ex.: `@C:\PROJETOS\AI-HACK-BOOKS\patrickjs-awesome-cursorrules` ou um `.mdc` concreto.
3. Para rules: copie os `.mdc` / `.cursorrules` relevantes para o seu projeto em `.cursor/rules/`.
4. Para cookbooks (Claude / Cursor SDK / AI SDK): leia o README da subpasta e adapte os exemplos; rode só o que precisar (muitos exigem API key).

---

## Guia rápido: quero X → uso Y

| Objetivo | Pasta local | Repo |
|---|---|---|
| Receitas da API Claude (RAG, tools, vision, PDF, JSON…) | `anthropics-claude-cookbooks` | [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) |
| Cookbook oficial do Cursor (SDK, App Builder React/Next) | `cursor-cookbook` | [cursor/cookbook](https://github.com/cursor/cookbook) |
| Maior coleção de Cursor rules (React, Next, shadcn…) | `patrickjs-awesome-cursorrules` | [PatrickJS/awesome-cursorrules](https://github.com/PatrickJS/awesome-cursorrules) |
| Pack production-ready focado em React/Next | `farzannajipour-cursor-react-rules` | [Farzannajipour/cursor-react-rules](https://github.com/Farzannajipour/cursor-react-rules) |
| ~36 rules modulares (react, nextjs, forms, testing…) | `jesseoue-cursor-rules` | [jesseoue/cursor-rules](https://github.com/jesseoue/cursor-rules) |
| Rules organizadas por stack (React, Next, Tailwind…) | `survivorforge-cursor-rules` | [survivorforge/cursor-rules](https://github.com/survivorforge/cursor-rules) |
| Construir UI de chat/agents em React/Next (AI SDK) | `vercel-ai` | [vercel/ai](https://github.com/vercel/ai) |
| Plugins / rules do ecossistema cursor.directory | `cursor-community-plugins` | [cursor/community-plugins](https://github.com/cursor/community-plugins) |

### Atalhos por cenário

- **Gerar melhor código React/Next no Cursor** → comece por `patrickjs-awesome-cursorrules` ou `farzannajipour-cursor-react-rules`.
- **App com chat streaming, tools, generative UI** → `vercel-ai` (+ recipes online em [ai-sdk.dev/resources/recipes](https://ai-sdk.dev/resources/recipes)).
- **Rodar o agent do Cursor a partir do seu código** → `cursor-cookbook` (SDK + App Builder).
- **Exemplos clássicos de LLM (classificação, RAG, vision)** → `anthropics-claude-cookbooks`.
- **Explorar plugins/rules da comunidade** → `cursor-community-plugins` ou o site [cursor.directory](https://cursor.directory/).

---

## Fichas dos repositórios

### 1. anthropics-claude-cookbooks

- **Repo:** https://github.com/anthropics/claude-cookbooks
- **Pasta:** `anthropics-claude-cookbooks`
- **O que é:** Notebooks e guias oficiais da Anthropic (“receitas”) para a API do Claude.
- **Quando usar:** Classificação, RAG, sumarização, tool use, multimodal/vision, PDF, JSON mode, prompt caching, evals.
- **Stack típica:** Python + Claude API (conceitos adaptáveis a outras linguagens).
- **Não é:** Material específico do editor Cursor.

### 2. cursor-cookbook

- **Repo:** https://github.com/cursor/cookbook
- **Pasta:** `cursor-cookbook`
- **O que é:** Cookbook oficial da Cursor — exemplos pequenos para construir com o Cursor SDK.
- **Quando usar:** Quickstart do agent, App Builder (Next/React + preview Vite/React), CLI de coding agent, DAG task runner.
- **Stack típica:** TypeScript, Node, Next.js/React no App Builder.
- **Destaque front:** App Builder demonstra UI React + agent scaffoldando projetos Vite/React.

### 3. patrickjs-awesome-cursorrules

- **Repo:** https://github.com/PatrickJS/awesome-cursorrules
- **Pasta:** `patrickjs-awesome-cursorrules`
- **O que é:** Lista curada (awesome) de Project Rules no formato `.mdc` para Cursor.
- **Quando usar:** Escolher rules prontas de React, TypeScript, Next.js, shadcn/ui, Redux, etc., e copiar para `.cursor/rules/`.
- **Melhor para:** Ampliar o “cérebro” do Cursor no seu stack front.

### 4. farzannajipour-cursor-react-rules

- **Repo:** https://github.com/Farzannajipour/cursor-react-rules
- **Pasta:** `farzannajipour-cursor-react-rules`
- **O que é:** Pack de rules e commands focados em React/Next “production-ready”.
- **Quando usar:** Component patterns, forms (React Hook Form + Zod), performance, a11y, SEO, animações, testes.
- **Melhor para:** Projetos React/Next onde você quer um conjunto coerente, não só regras soltas.

### 5. jesseoue-cursor-rules

- **Repo:** https://github.com/jesseoue/cursor-rules
- **Pasta:** `jesseoue-cursor-rules`
- **O que é:** Coleção de ~36 rules em MDC com globs de auto-attach.
- **Quando usar:** Precisa de módulos separados (`react.mdc`, `nextjs.mdc`, TypeScript, Tailwind, forms, testing, naming…).
- **Melhor para:** Montar um kit modular em `.cursor/rules/` sem um único arquivo gigante.

### 6. survivorforge-cursor-rules

- **Repo:** https://github.com/survivorforge/cursor-rules
- **Pasta:** `survivorforge-cursor-rules`
- **O que é:** Coleção de `.cursorrules` por framework/stack.
- **Quando usar:** Quer pegar só a pasta da stack (React, Next.js, Tailwind, etc.) e dropar no projeto.
- **Melhor para:** Bootstrap rápido de rules por tecnologia.

### 7. vercel-ai

- **Repo:** https://github.com/vercel/ai
- **Pasta:** `vercel-ai`
- **O que é:** AI SDK (TypeScript) da Vercel — toolkit para apps e agents com UI em React/Next (e outros).
- **Quando usar:** Chat UI (`useChat`), streaming, tool calling, generative UI, agents em Next.js App Router.
- **Docs/recipes online:** https://ai-sdk.dev — recipes: https://ai-sdk.dev/resources/recipes
- **Melhor para:** Produto frontend com IA (não só “usar o Cursor como IDE”).

### 8. cursor-community-plugins

- **Repo:** https://github.com/cursor/community-plugins
- **Pasta:** `cursor-community-plugins`
- **O que é:** Repositório comunitário ligado ao [cursor.directory](https://cursor.directory/) (plugins, rules, skills, MCP, etc.).
- **Quando usar:** Explorar o ecossistema de plugins/rules da comunidade Cursor.
- **Site:** https://cursor.directory/

---

## Leituras úteis (não clonadas)

Artigos e sites — só links; não há pasta local.

| Recurso | Link | Para quê |
|---|---|---|
| cursor.directory | https://cursor.directory/ | Buscar rules/plugins Next/React |
| AI SDK Recipes | https://ai-sdk.dev/resources/recipes | Receitas Next/React com AI SDK |
| Builder.io — Cursor + React/Next | https://www.builder.io/blog/cursor-ai-tips-react-nextjs | Setup e workflow |
| Cursor Rules Next/React (2026) | https://skiln.co/blog/best-cursor-rules-nextjs-react-2026 | Configs copy-paste |
| Docs Cursor | https://docs.cursor.com | Documentação oficial do editor |
| Docs Claude | https://docs.claude.com | Documentação Anthropic |

---

## Estrutura esperada

```
C:\PROJETOS\AI-HACK-BOOKS\
  README.md
  anthropics-claude-cookbooks\
  cursor-cookbook\
  patrickjs-awesome-cursorrules\
  farzannajipour-cursor-react-rules\
  jesseoue-cursor-rules\
  survivorforge-cursor-rules\
  vercel-ai\
  cursor-community-plugins\
```

---

## Reconstruir a pasta em outro PC

### PowerShell (Windows)

```powershell
mkdir C:\PROJETOS\AI-HACK-BOOKS -Force
cd C:\PROJETOS\AI-HACK-BOOKS

git clone --depth 1 https://github.com/anthropics/claude-cookbooks.git anthropics-claude-cookbooks
git clone --depth 1 https://github.com/cursor/cookbook.git cursor-cookbook
git clone --depth 1 https://github.com/PatrickJS/awesome-cursorrules.git patrickjs-awesome-cursorrules
git clone --depth 1 https://github.com/Farzannajipour/cursor-react-rules.git farzannajipour-cursor-react-rules
git clone --depth 1 https://github.com/jesseoue/cursor-rules.git jesseoue-cursor-rules
git clone --depth 1 https://github.com/survivorforge/cursor-rules.git survivorforge-cursor-rules
git clone --depth 1 https://github.com/vercel/ai.git vercel-ai
git clone --depth 1 https://github.com/cursor/community-plugins.git cursor-community-plugins
```

Depois, copie este `README.md` para `C:\PROJETOS\AI-HACK-BOOKS\README.md` (ou clone/copie o arquivo junto).

### Bash (macOS / Linux)

```bash
mkdir -p ~/PROJETOS/AI-HACK-BOOKS && cd ~/PROJETOS/AI-HACK-BOOKS

git clone --depth 1 https://github.com/anthropics/claude-cookbooks.git anthropics-claude-cookbooks
git clone --depth 1 https://github.com/cursor/cookbook.git cursor-cookbook
git clone --depth 1 https://github.com/PatrickJS/awesome-cursorrules.git patrickjs-awesome-cursorrules
git clone --depth 1 https://github.com/Farzannajipour/cursor-react-rules.git farzannajipour-cursor-react-rules
git clone --depth 1 https://github.com/jesseoue/cursor-rules.git jesseoue-cursor-rules
git clone --depth 1 https://github.com/survivorforge/cursor-rules.git survivorforge-cursor-rules
git clone --depth 1 https://github.com/vercel/ai.git vercel-ai
git clone --depth 1 https://github.com/cursor/community-plugins.git cursor-community-plugins
```

**Requisito:** Git instalado e acesso à internet. Não é necessário estar logado no GitHub para clonar estes repositórios públicos.

---

## Atualizar os clones

No PowerShell, a partir de `C:\PROJETOS\AI-HACK-BOOKS`:

```powershell
cd C:\PROJETOS\AI-HACK-BOOKS
@(
  "anthropics-claude-cookbooks",
  "cursor-cookbook",
  "patrickjs-awesome-cursorrules",
  "farzannajipour-cursor-react-rules",
  "jesseoue-cursor-rules",
  "survivorforge-cursor-rules",
  "vercel-ai",
  "cursor-community-plugins"
) | ForEach-Object {
  Write-Host "Updating $_ ..."
  git -C $_ pull --ff-only
}
```

> Nota: clones feitos com `--depth 1` são rasos (só o commit mais recente). Para histórico completo: `git -C <pasta> fetch --unshallow` (quando necessário).

---

## Observações

- Isto são **clones locais**, não forks na sua conta GitHub. Para fork remoto: `gh auth login` e depois `gh repo fork <owner/repo>`.
- Não rode `npm install` em tudo por padrão — só nas subpastas que for experimentar.
- Ao copiar rules para um projeto, prefira poucas rules específicas (e exemplos) em vez de jogar dezenas de arquivos genéricos de uma vez.
