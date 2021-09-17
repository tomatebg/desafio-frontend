# Desafio Front-end Ticto

Desafio realizado por Rogério Bayer Ghizi

## A implementação

Para implementar esse desafio foi utilizado o framework _Vue.js_ junto a estrutura do _Nuxt.js_ e com gerenciamento de estado por _Vuex_. A biblioteca de estilos utilizada foi o _Vuetify_.

A tela inicial foi desenvolvida dentro de `pages/index.vue`, importando os componentes responsáveis pela exibição dos cards (`components/sections/ProductDialog`) e exibição de modal de produto comprado (`components/sections/ProductsCards`). A store está presente em `store/index.js`, seguindo a implementação padrão do _Vuex_ em projetos _Nuxt_.

## O funcionamento

Ao montar o componente `ProductDialog`, a action _getProducts()_ é disparada na store, invocando a requisição da API de produtos e armazenando no estado global da aplicação. O getter `isProductsLoaded`, aponta se o estado já foi preenchido, permitindo o indicador de carregamento. Após o sucesso na request, os itens recebidos da API são obtidos dentro do componente por meio do getter _products_.

---

<img src="https://app.ticto.com.br/assets/images/horizontal1.png" width="250" height="auto">

## O Desafio

Esse desafio, tem o objetivo de avaliar seus conhecimentos nas tecnologias da web moderna.

## Requisitos

- Hospedar o projeto usando o vercel.com;
- Consumir o endpoint https://yd3szwgkse.execute-api.us-east-1.amazonaws.com/v1/products.

Use o framework de sua escolha para fazer uma listagem de produtos consumindo o endpoint acima.
Exemplo de desafio: https://exemplo-desafio-ajncsosl9.vercel.app

## Como envio meu desafio?

Faça um fork desse repositório e envie o link do app no Vercel para rh@ticto.com.br
