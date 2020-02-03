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

Perceba que a função `logValue` não tem nenhuma variável dela própria. Porém, como funções internas (ou "filhas") têm acesso às variáveis de funções externas (funções "pai"), `logValue` consegue acessar a variável `localValue` que foi declarada na função pai. Esse é justamente um exemplo de _escopo léxico_. A palavra _léxico_ se refere justamente ao fato de que o escopo léxico usa a localização onde a variável é declarada dentro do código fonte para determinar onde aquela variável está disponível. Então, guarde isso:  **funções aninhadas têm acesso a variáveis declaradas no escopo mais externo.**

## Entendendo melhor o que é uma Closure

Para entender melhor o que é uma _closure**,**_ vejamos um exemplo muito parecido com o anterior, mas com uma pequena diferença.

```js
function showClosureBehaviour() {
  let localValue = 'Some test value'; //variável local criada pela função

  function logValue() { //função interna => uma closure
    console.log(localValue) //utiliza variável declarada na função pai
  }

  return logValue; //retorna a closure criada
}
let newFunc = showClosureBehaviour();newFunc(); // Imprime "Some test value"
```

É possível perceber que a única diferença desse trecho de código para o anterior é que a função filha (`logValue`) é retornada a partir da função pai. Em alguns linguagens de programação não seria possível executar a função newFunc, visto que as variáveis locais dentro da função só existiram durante a execução da função `showClosureBehaviour`. Entretanto, isso não acontece em Javascript, visto que funções formam _closures_.

**Uma _closure_ é a combinação de uma função e o escopo léxico dentro do qual a referida função foi declarada.** Esse escopo inclui quaisquer variáveis que estavam no escopo no momento em que a _closure_ foi criada. Ou seja, `newFunc` é uma referência para a instância da função `logValue` criada quando `showClosureBehaviour` é executada. A instância de `displayName` mantém a referência para o seu escopo léxico, dentro do qual a variável `localValue` ****existe. Logo, quando `newFunc` é invocada, a variável `localValue` permanece disponível para uso e "Some test value" é impresso no console.

## Blz, mas...para que preciso saber disso? Qual a importância?



## Conclusão
