---
date: '2020-01-30 11:27:20'
title: 'Entendendo o que são Closures '
description: >-
  Entenda de uma vez por todas o que é uma closure, o que é o escopo léxico e
  como tirar proveito disso.
tags:
  - js
---
## Introdução

\* Material utilizado principalmente do mdn (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures) e https://github.com/ryanmcdermott/clean-code-javascript#objects-and-data-structures

## Em resumo, o que é uma _Closure?_

Uma closure é a combinação de uma função agrupada (inclusa) com referência ao estado que o circunda (**o escopo léxico**). Dito de outro modo: **uma _closure_** **te dá acesso ao escopo de uma função externa a partir de uma função interna**. Em Javascript, closures são criadas toda vez que uma função é criada, no momento da criação da função.

## Escopo Léxico

A melhor forma de explicar o que é um _escopo léxico_ é através de um exemplo. Então, vamos a um:

```js
function showClosureBehaviour() {
  let localValue = 'Some test value'; //variável local criada pela função

  function logValue() { //função interna => uma closure
    console.log(localValue) //utiliza variável declarada na função pai
  }

  logValue();
}

showClosureBehaviour(); // Imprime "Some test value"
```

Perceba que a função `logValue` não tem nenhuma variável dela própria. Porém, como funções internas (ou "filhas") têm acesso às variáveis de funções externas (funções "pai"), `logValue` consegue acessar a variável `localValue` que foi declarada na função pai. Esse é exatamente um exemplo de _escopo léxico_, que descreve como o parser resolve nomes de variáveis quando funções estão aninhadas.

## Entendendo melhor o que é uma Closure

Agora que sabemos o que é o _escopo léxico_...

## Blz, mas...para que preciso saber disso? Qual a importância?

## Conclusão
