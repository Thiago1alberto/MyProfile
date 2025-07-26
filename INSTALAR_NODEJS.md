# 🚨 INSTALAÇÃO DO NODE.JS - Guia Passo a Passo

## ❌ Status Atual: Node.js NÃO DETECTADO

O teste mostrou que o Node.js não está instalado ou não está no PATH do sistema.

---

## 📥 INSTALAÇÃO CORRETA DO NODE.JS

### **Passo 1: Download**
1. Acesse: **https://nodejs.org/**
2. Clique em **"Download Node.js (LTS)"** - versão recomendada
3. Baixe o arquivo `.msi` para Windows

### **Passo 2: Instalação**
1. Execute o arquivo baixado como **Administrador**
2. ✅ **IMPORTANTE:** Marque "Add to PATH" durante a instalação
3. ✅ **IMPORTANTE:** Marque "Install additional tools" se aparecer
4. Siga o wizard até o final

### **Passo 3: Verificar Instalação**
1. **FECHE** todos os terminais/PowerShell abertos
2. **REINICIE** o VS Code
3. Abra novo terminal (Ctrl + `)
4. Execute:
```powershell
node --version
npm --version
```

### **Resultado Esperado:**
```
v18.17.0 (ou similar)
9.6.7 (ou similar)
```

---

## 🔧 SOLUÇÃO DE PROBLEMAS

### ❌ **"node não é reconhecido"**

#### Solução 1: Verificar PATH
```powershell
echo $env:PATH
```
- Deve conter: `C:\Program Files\nodejs\`

#### Solução 2: Adicionar ao PATH manualmente
1. Win + R → `sysdm.cpl`
2. Aba **"Avançado"**
3. **"Variáveis de Ambiente"**
4. Em **"PATH"** → Adicionar: `C:\Program Files\nodejs\`
5. **OK** e reiniciar terminal

#### Solução 3: Reinstalar Node.js
1. Desinstalar Node.js atual
2. Baixar nova versão LTS
3. Instalar marcando **"Add to PATH"**

---

## 🎯 TESTE RÁPIDO

### Após instalação, execute:
```powershell
# Teste básico
node --version
npm --version

# Teste mais detalhado
node -e "console.log('Node.js funcionando!')"
npm config get registry
```

### Resultado esperado:
```
v18.17.0
9.6.7
Node.js funcionando!
https://registry.npmjs.org/
```

---

## 🚀 PRÓXIMOS PASSOS (Após Node.js funcionando)

```powershell
# 1. Navegar para o projeto
cd "C:\Users\thiago\Desktop\MyProfile"

# 2. Instalar dependências
npm install

# 3. Rodar projeto
npm run dev

# 4. Acessar no navegador
http://localhost:5173
```

---

## 🆘 ALTERNATIVA TEMPORÁRIA

Se Node.js continuar com problemas, posso criar uma versão HTML pura do portfolio que funciona direto no navegador, sem dependências.

### Quer que eu crie essa versão alternativa?
- ✅ **Vantagem:** Funciona imediatamente
- ❌ **Desvantagem:** Menos recursos (sem React, TypeScript)

---

## 📞 STATUS ATUAL

1. ❌ Node.js não detectado
2. ❌ npm não detectado  
3. ⏳ **Aguardando:** Instalação/configuração do Node.js
4. ⏳ **Próximo:** Continuar ajustes do projeto

**Execute a instalação do Node.js e me avise quando estiver funcionando!** 🎯
