# Como colocar o site da OKB no GitHub

Em 3 passos, sem instalar nada no computador, o site da OKB fica no ar de graça em um endereço como `https://seu-usuario.github.io/okb-distribuidora/`. Leva uns 15 minutos.

## Antes de começar

Você precisa só de duas coisas:

- **Um e-mail** para criar a conta no GitHub (é grátis).
- **A pasta do site**, que você recebeu. Se veio em `.zip`, clique com o botão direito → **Extrair tudo** antes de seguir.

Dentro da pasta tem que aparecer isto:

| Item | O que é |
| --- | --- |
| `index.html` | A página do site |
| `assets` (pasta) | Visual, fotos e lista de produtos |
| `README.md` | Anotações técnicas |

## Passo 1 — Criar a conta e o repositório

O repositório é a "pasta online" onde o site vai morar.

1. Acesse [github.com/signup](https://github.com/signup) e crie a conta com seu e-mail.
    - O **nome de usuário** vira parte do endereço do site. Algo como `okbdistribuidora` fica bom.
    - Confirme o código que chega no e-mail.
2. Já logado, clique no **+** no canto superior direito → **New repository**.
3. Em **Repository name**, escreva `okb-distribuidora`.
4. Deixe marcado **Public** (o GitHub Pages grátis só funciona em repositório público).
5. Não marque mais nada e clique em **Create repository**.

## Passo 2 — Enviar os arquivos

1. Na página do repositório recém-criado, clique no link **uploading an existing file** (fica no texto "Get started by creating a new file or uploading an existing file").
2. Abra a pasta do site no Windows, selecione **tudo o que está dentro dela** (Ctrl+A) e arraste para a área do navegador.
    - Arraste o **conteúdo** da pasta, não a pasta em si. O `index.html` tem que ficar na "raiz", fora de qualquer subpasta.
    - A pasta `assets` vai junto, com tudo dentro.
3. Espere a lista de arquivos terminar de carregar (aparecem uns 20 arquivos).
4. Lá embaixo, em **Commit changes**, clique no botão verde **Commit changes**.

Pronto: na página do repositório você deve ver `index.html`, `assets` e `README.md` listados.

## Passo 3 — Colocar o site no ar

1. No repositório, clique em **Settings** (ícone de engrenagem, no menu de cima).
2. No menu da esquerda, clique em **Pages**.
3. Em **Build and deployment → Source**, deixe **Deploy from a branch**.
4. Em **Branch**, escolha **main** e a pasta **/ (root)**. Clique em **Save**.
5. Espere 1 a 2 minutos e recarregue a página (F5). Aparece no topo: **"Your site is live at…"** com o link.

O endereço fica assim: `https://SEU-USUARIO.github.io/okb-distribuidora/`. É esse link que você coloca no Facebook, no WhatsApp Business e manda pros clientes.

Teste no celular: busque um produto, adicione ao orçamento e veja se o WhatsApp abre com a mensagem pronta para o (12) 99219-2346.

## Como mudar o site depois

Dá pra editar tudo direto no navegador. Toda alteração salva aparece no site em 1 a 2 minutos.

**Para editar um texto:** abra o arquivo no repositório → clique no ícone de **lápis** (Edit this file) → altere → botão verde **Commit changes**.

| O que mudar | Arquivo |
| --- | --- |
| WhatsApp, telefone, e-mail, horário, Facebook | `assets/js/config.js` |
| Incluir, tirar ou renomear produtos | `assets/js/produtos.js` |
| Fotos dos produtos | pasta `assets/img/produtos/` |

**Para incluir um produto**, copie uma linha parecida em `produtos.js` e troque os textos:

```
P("Detergente Neutro 5 L", "Sevengel", "limpeza");
```

A ordem é: nome, marca, categoria. As categorias possíveis são `limpeza`, `desinf`, `cozinha`, `higiene`, `papel`, `epi`, `utensilios`, `equip`, `lavanderia` e `aroma`. Cuidado para não apagar aspas, vírgulas ou o `;` do fim.

**Para trocar ou incluir uma foto:**

1. Entre na pasta `assets/img/produtos/` → **Add file** → **Upload files** → arraste a foto → **Commit changes**.
2. Para trocar uma foto que já existe, envie com **o mesmo nome** do arquivo antigo (ex.: `seven-free.jpg`).
3. Para uma foto nova, use na linha do produto: `{ img: IMG + "nome-da-foto.jpg" }`.

Use fotos em pé (vertical), em `.jpg`, com menos de 1 MB.

## Se algo der errado

| Problema | Solução |
| --- | --- |
| Link dá erro 404 | Espere mais 2 minutos. Depois confira se o `index.html` está na raiz do repositório, e não dentro de outra pasta. |
| Site aparece sem cores ou sem fotos | A pasta `assets` não foi enviada inteira. Envie de novo arrastando a pasta `assets`. |
| Opção **Pages** não liga | O repositório está como Private. Em **Settings → General**, lá embaixo, mude para **Public**. |
| Mudei um arquivo e nada mudou | Espere 2 minutos e recarregue com **Ctrl+F5**. No celular, abra numa aba anônima. |
| Os produtos sumiram depois de editar | Faltou uma aspa, vírgula ou `;` no `produtos.js`. Abra o arquivo → **History** e volte para a versão anterior. |

**Endereço próprio (opcional):** se quiser algo como `www.okbdistribuidora.com.br`, registre o domínio no [registro.br](https://registro.br) e coloque em **Settings → Pages → Custom domain**. O GitHub mostra quais configurações fazer no registro.br.
