# OKB Distribuidora — Site / Catálogo

Landing page com vitrine e catálogo pesquisável de produtos de limpeza e higiene.
Site 100% estático (HTML + CSS + JS), sem build — pronto para o **GitHub Pages**.

## Estrutura
```
index.html                 página principal
assets/css/style.css       visual (cores da marca: azul #0a3d8f e verde #43b02a)
assets/js/config.js        >>> WhatsApp, telefone, e-mail, Facebook, horário <<<
assets/js/produtos.js      >>> lista de produtos e categorias <<<
assets/js/app.js           busca, filtros, vitrine, modal e orçamento
assets/img/produtos/       fotos/panfletos dos produtos
```

## Editar
- **Número do WhatsApp:** `assets/js/config.js` → `whatsapp: "55DDDNUMERO"` (só números).
- **Adicionar produto:** em `assets/js/produtos.js` copie uma linha:
  ```js
  P("Nome do Produto 5 L", "Marca", "limpeza", { img: IMG + "foto.jpg", top: true, destaque: true, desc: "Descrição" });
  ```
  Categorias: `limpeza, desinf, cozinha, higiene, papel, epi, utensilios, equip, lavanderia, aroma`.
  Sem `img`, o produto aparece com um card padrão da OKB.
- **Fotos:** coloque em `assets/img/produtos/` (de preferência JPG em pé, ~800x1060).
  As atuais foram recortadas de uma colagem de panfletos; para mais nitidez, substitua pelos arquivos originais com o mesmo nome.

## Publicar no GitHub Pages
1. Crie um repositório no GitHub (ex.: `okb-distribuidora`).
2. Na pasta do site:
   ```bash
   git remote add origin https://github.com/SEU-USUARIO/okb-distribuidora.git
   git branch -M main
   git push -u origin main
   ```
3. No GitHub: **Settings → Pages → Source: Deploy from a branch → `main` / `(root)`** → Save.
4. Em ~1 minuto o site fica em `https://SEU-USUARIO.github.io/okb-distribuidora/`.

Domínio próprio (ex.: `okbdistribuidora.com.br`): em Settings → Pages → Custom domain.

## Testar localmente
```bash
python -m http.server 8000
# abra http://localhost:8000
```
