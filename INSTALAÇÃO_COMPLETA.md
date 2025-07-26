# 📋 Lista de Instalação - Portfolio MyProfile

## 🎯 Ferramentas Principais (OBRIGATÓRIAS)

### 1. **Node.js** (Versão LTS - Recomendado v18 ou superior)
- **Download:** https://nodejs.org/
- **Escolha:** LTS (Long Term Support) 
- **Verificar instalação:** `node --version` e `npm --version`
- **Por que precisa:** Runtime JavaScript para executar o projeto

### 2. **Git** (Para controle de versão)
- **Download:** https://git-scm.com/download/win
- **Verificar instalação:** `git --version`
- **Por que precisa:** Controle de versão e deploy

### 3. **VS Code** (Você já tem)
- ✅ **Já instalado**

---

## 🚀 Gerenciadores de Pacotes (Escolha UM)

### Opção 1: **npm** (Vem com Node.js)
- ✅ **Já vem com Node.js**
- **Comando para instalar dependências:** `npm install`
- **Comando para rodar:** `npm run dev`

### Opção 2: **Bun** (Mais rápido - RECOMENDADO)
- **Download:** https://bun.sh/
- **Windows:** `powershell -c "irm bun.sh/install.ps1 | iex"`
- **Comando para instalar dependências:** `bun install`
- **Comando para rodar:** `bun dev`

### Opção 3: **pnpm** (Alternativa rápida)
- **Instalar:** `npm install -g pnpm`
- **Comando para instalar dependências:** `pnpm install`
- **Comando para rodar:** `pnpm dev`

---

## 🔧 Extensões VS Code (RECOMENDADAS)

### Essenciais para React/TypeScript:
1. **ES7+ React/Redux/React-Native snippets** - `dsznajder.es7-react-js-snippets`
2. **TypeScript Importer** - `pmneo.tsimporter`
3. **Auto Rename Tag** - `formulahendry.auto-rename-tag`
4. **Bracket Pair Colorizer 2** - `coenraads.bracket-pair-colorizer-2`

### Para Tailwind CSS:
5. **Tailwind CSS IntelliSense** - `bradlc.vscode-tailwindcss`
6. **PostCSS Language Support** - `csstools.postcss`

### Para Produtividade:
7. **Prettier - Code formatter** - `esbenp.prettier-vscode`
8. **ESLint** - `dbaeumer.vscode-eslint`
9. **GitLens** - `eamodio.gitlens`
10. **Thunder Client** - `rangav.vscode-thunder-client` (para testar APIs)

---

## 📦 Dependências do Projeto (Instalam automaticamente)

### Framework e Core:
- React 18.3.1
- TypeScript 5.5.3
- Vite 5.4.1
- React Router DOM 6.26.2

### Animações:
- GSAP 3.13.0 (animações avançadas)
- Locomotive Scroll 4.1.4

### UI/UX:
- Tailwind CSS 3.4.11
- Radix UI (componentes acessíveis)
- Phosphor React (ícones)
- Lucide React (ícones alternativos)

### Utilitários:
- React Hook Form 7.53.0
- Zod 3.23.8 (validação)
- Class Variance Authority
- React Query/TanStack Query

---

## 🎨 Fontes (Automáticas via CSS)

### Já configuradas no projeto:
- **Inter** - Google Fonts (carrega automaticamente)
- **Font weight:** 300 (light) como padrão

---

## ⚡ Comandos de Instalação (Execute em ordem)

### 1. Após instalar Node.js, abra PowerShell/CMD no projeto:
```powershell
cd "C:\Users\thiago\Desktop\MyProfile"
```

### 2. Instalar dependências:
```powershell
# Com npm (padrão)
npm install

# OU com bun (mais rápido)
bun install

# OU com pnpm
pnpm install
```

### 3. Rodar projeto:
```powershell
# Com npm
npm run dev

# OU com bun
bun dev

# OU com pnpm
pnpm dev
```

### 4. Acessar no navegador:
- **URL:** http://localhost:5173

---

## 🐛 Solução de Problemas Comuns

### Erro: "node não é reconhecido"
- **Solução:** Reiniciar o terminal após instalar Node.js
- **Ou:** Adicionar Node.js ao PATH manualmente

### Erro: "npm não é reconhecido"
- **Solução:** Reinstalar Node.js marcando "Add to PATH"

### Erro: "Cannot find module 'react'"
- **Solução:** Executar `npm install` ou `bun install`

### Erro: "Port 5173 already in use"
- **Solução:** Usar `npm run dev -- --port 3000`

### Erro: GSAP não carrega
- **Solução:** Verificar se todas dependências foram instaladas

---

## 🌐 Links Úteis

- **Node.js:** https://nodejs.org/
- **Bun:** https://bun.sh/
- **Git:** https://git-scm.com/
- **VS Code Extensions:** https://marketplace.visualstudio.com/
- **Tailwind CSS Docs:** https://tailwindcss.com/docs
- **React Docs:** https://react.dev/
- **GSAP Docs:** https://greensock.com/docs/

---

## 🎯 Checklist Final

- [ ] Node.js instalado e funcionando
- [ ] Git instalado
- [ ] Extensões VS Code instaladas
- [ ] Dependências do projeto instaladas (`npm install`)
- [ ] Projeto rodando (`npm run dev`)
- [ ] Navegador abrindo em localhost:5173
- [ ] Todas as seções aparecendo corretamente
- [ ] Animações funcionando suavemente

---

**📝 Nota:** Se usar ambiente virtual ou Docker, as dependências Node.js ficam isoladas. Para desenvolvimento local, siga esta lista completa.
