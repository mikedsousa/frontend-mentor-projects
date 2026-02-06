# Frontend Mentor - Testimonials Grid Section

Uma solução moderna e responsiva para o desafio Testimonials Grid Section do Frontend Mentor.

## 📋 Índice

- [Visão Geral](#visão-geral)
  - [O Desafio](#o-desafio)
  - [Designs de Referência](#designs-de-referência)
- [Meu Processo](#meu-processo)
  - [Construído com](#construído-com)
  - [O que Aprendi](#o-que-aprendi)
  - [Desafios Superados](#desafios-superados)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Autor](#autor)

## Visão Geral

### O Desafio

Os usuários devem ser capazes de:

- ✅ Visualizar o layout ideal do site dependendo do tamanho de tela do dispositivo
- ✅ Experimentar efeitos de hover nos elementos interativos

### Designs de Referência

#### Design Desktop

![Desktop Design](./design/desktop-design.jpg)

#### Design Mobile

![Mobile Design](./design/mobile-design.jpg)

## Meu Processo

### Construído com

- **Semantic HTML5** - Marcação semântica e acessível
- **Tailwind CSS** - Framework CSS utilitário para estilização rápida
- **CSS Grid** - Layout responsivo com grid de 4 colunas
- **Flexbox** - Alinhamento e distribuição de componentes
- **Mobile-first Workflow** - Abordagem responsiva começando pelo mobile
- **Google Fonts** - Tipografia Barlow Semi Condensed
- **Frontend Mentor** - Design e desafio

### O que Aprendi

#### 1. **CSS Grid**

Aprendi a trabalhar com grid responsivo que se adapta a diferentes tamanhos de tela:

- Grid de 2 colunas em mobile (`md:grid-cols-2`)
- Grid de 4 colunas em desktop (`lg:grid-cols-4`)
- Uso de `col-span` e `row-span` para elementos que ocupam múltiplas células
- `col-start` para posicionamento específico de items

```html
<main class="grid md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
  <div class="lg:col-span-2 lg:row-span-2">Daniel</div>
  <div class="lg:col-start-4 lg:row-span-2">Kira</div>
</main>
```

#### 2. **Layout Responsivo com Tailwind CSS**

Implementei classes responsivas para diferentes viewports:

```html
<!-- Mobile: 1 coluna -->
<!-- Tablet (md): 2 colunas -->
<!-- Desktop (lg): 4 colunas com grid rows -->
<div class="md:col-span-2 lg:col-span-2">Card</div>
```

#### 3. **Custom Properties (Design Tokens)**

Criei um sistema de tipografia personalizada no `app.css`:

```css
.text-preset-1 {
  font-size: 20px;
  line-height: 120%;
  font-weight: 600;
}
.text-preset-2 {
  font-size: 13px;
  line-height: 110%;
  font-weight: 500;
}
```

#### 4. **Acessibilidade**

- Contraste de cores adequado segundo WCAG
- Estrutura semântica clara

### Desafios Superados

1. **Ajuste de Alturas do Grid** - Os cards tinham alturas desproporcionais inicialmente. Resolvido com:

   ```html
   <main class="items-stretch gap-8 lg:grid-rows-2"></main>
   ```

   Isso garante que ambas as linhas tenham altura igual.

2. **Posicionamento do Card Kira** - O card deveria ocupar a coluna direita inteira (2 linhas):

   ```html
   <div class="lg:col-start-4 lg:row-span-2"></div>
   ```

   `col-start-4` posiciona a Kira na 4ª coluna, `row-span-2` faz ocupar ambas as linhas.

3. **Responsividade Mobile** - Garantir fluxo correto em telas pequenas:
   ```html
   <div class="md:col-span-2 order-5 lg:order-3"></div>
   ```
   `md:col-span-2` faz cards ocuparem 2 colunas em tablet, `order-*` reordena no desktop.

## Estrutura do Projeto

```
testimonials-grid-section/
├── index.html          # Arquivo HTML principal
├── app.css             # Estilos customizados Tailwind
├── images/             # Imagens de perfil dos depoentes
│   ├── image-daniel.jpg
│   ├── image-jonathan.jpg
│   ├── image-kira.jpg
│   ├── image-jeanette.jpg
│   ├── image-patrick.jpg
│   └── favicon-32x32.png
├── design/             # Designs de referência
│   ├── desktop-design.jpg
│   └── mobile-design.jpg
├── style-guide.md      # Guia de estilos do projeto
├── README-template.md  # Template original do desafio
└── README.md           # Este arquivo
```

### Arquivos Principais

- **index.html** - Estrutura HTML com 5 cards de depoimentos
- **app.css** - Classes customizadas para tipografia (`text-preset-1`, `text-preset-2`, etc.)


---

**Desenvolvido com ❤️ como parte do desafio Frontend Mentor**
