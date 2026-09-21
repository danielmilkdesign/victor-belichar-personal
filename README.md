# Victor Belichar — Personal Trainer | Team Vibe Training

Landing page oficial e responsiva do treinador **Victor Belichar** (CREF 009161-G/AM).

---

## 🚀 Como subir este site para o GitHub e colocar no ar

### Passo 1: Criar o repositório no GitHub
1. Acesse sua conta no [GitHub](https://github.com/) e clique em **New repository** (Novo repositório).
2. Dê um nome (por exemplo: `vibe-personal-site` ou `victor-belichar-personal`).
3. Deixe o repositório como **Public** (Público) para poder usar o GitHub Pages gratuitamente.
4. **Não** marque a opção de adicionar README ou .gitignore (já criamos tudo aqui).
5. Clique em **Create repository**.

---

### Passo 2: Enviar os arquivos pelo terminal
Abra o terminal (PowerShell ou Git Bash) dentro da pasta `D:\VIBE\VIBE PERSONAL SITE FINAL` e rode os comandos abaixo (trocando `SEU-USUARIO` e `NOME-DO-REPOSITORIO` pelos seus):

```bash
git init
git add .
git commit -m "feat: site completo Victor Belichar pronto para publicacao"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/NOME-DO-REPOSITORIO.git
git push -u origin main
```

---

### Passo 3: Ativar o site online no GitHub Pages (Gratuito)

Você tem duas formas muito simples de ativar o site no ar:

#### Opção A (Recomendada - Automática via GitHub Actions):
1. No seu repositório no GitHub, vá na aba **Settings** (Configurações).
2. No menu lateral esquerdo, clique em **Pages**.
3. Em **Build and deployment** > **Source**, escolha **GitHub Actions**.
4. Pronto! O arquivo configurado em `.github/workflows/deploy.yml` publicará o site na pasta `docs/` automaticamente e fornecerá o link `https://seu-usuario.github.io/nome-do-repositorio/`.

#### Opção B (Deploy direto da pasta `/docs`):
1. No seu repositório no GitHub, vá em **Settings** > **Pages**.
2. Em **Build and deployment** > **Source**, mantenha **Deploy from a branch**.
3. Na seção **Branch**, selecione `main` e no seletor de pasta ao lado troque `/ (root)` para **/docs**.
4. Clique em **Save**.
5. Em cerca de 1 a 2 minutos o GitHub gerará o link oficial do seu site!

---

## 📁 Estrutura do Projeto

- **`docs/`**: Contém o site estático 100% pronto para publicação no GitHub Pages (`index.html`, `regras.html`, `assets/`, `css/`, `fotos-alunos/`, `favicon.png`).
- **`SITE_HTML/`**: Cópia de segurança da versão HTML pura.
- **`src/`**: Código-fonte original em React 19, TypeScript, TanStack Start e Tailwind CSS v4.
- **`public/`**: Imagens, fotos e recursos estáticos do projeto React.
- **`.github/workflows/deploy.yml`**: Fluxo de automação para deploy automático do GitHub Pages.
- **`package.json`**: Dependências e scripts do projeto caso deseje rodar o servidor de desenvolvimento.

---

## 💻 Desenvolvimento Local (Opcional)

Se desejar executar o ambiente de desenvolvimento em React localmente:

```bash
# 1. Instalar as dependências
npm install

# 2. Iniciar o servidor de desenvolvimento
npm run dev
```

Acesse em `http://localhost:8080/`.

---

## 📞 Contatos e Redes do Treinador
- **WhatsApp**: [wa.link/or6eyw](https://wa.link/or6eyw)
- **Instagram**: [@treinadorvictorbelichar](https://www.instagram.com/treinadorvictorbelichar/)
- **Registro**: CREF 009161-G/AM
