---
date: '2020-02-04 11:27:20'
image: /assets/img/js-closure.jpg
title: O que são Closures?
description: >-
  Entenda o que são closures, o que é o escopo léxico e como tirar proveito
  disso.
tags:
  - js
---

## Introdução

É comum utilizarmos frameworks ou mesmo o Vanilla JavaScript sem entendermos alguns conceitos que podem nos ajudar bastante durante o nosso dia-a-dia como desenvolvedor. Hoje vamos ver o conceito de **closures**, como podem compartilhar o mesmo **escopo léxico** e o que isso pode nos trazer de benefício durante o desenvolvimento. Para isso, utilizarei, como referência principal, o [artigo da MDN sobre closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures). Sem mais delongas, vamos lá!

## Em resumo, o que é uma Closure?

Uma closure é a combinação de uma função aninhada com referência ao estado que a circunda (**o escopo léxico**). Dito de outro modo: **uma closure** **te dá acesso ao escopo de uma função externa a partir de uma função interna**. Em Javascript, closures são criadas toda vez que uma função é criada.

## Escopo Léxico

A melhor forma de explicar o que é um **escopo léxico** é através de um exemplo:

```js
function showClosureBehaviour() {
  let localValue = 'Some test value'; //variável local criada pela função

  function logValue() {
    //função interna => uma closure
    console.log(localValue); //utiliza variável declarada na função pai
  }

  logValue();
}

showClosureBehaviour(); // Imprime "Some test value"
```

Perceba que a função `logValue` não possui nenhuma variável própria. Porém, como funções internas (ou "filhas") têm acesso às variáveis de funções externas (funções "pai"), `logValue` consegue acessar a variável `localValue` que foi declarada na função pai. Esse é justamente um exemplo de **escopo léxico**. A palavra **léxico** se refere justamente ao fato de que o escopo usa a localização onde a variável é declarada dentro do código fonte para determinar onde aquela variável está disponível. Então, guarde isso: **funções aninhadas têm acesso a variáveis declaradas no escopo mais externo.**

## Entendendo melhor o que é uma Closure

Para entender melhor o que é uma closure**_,_** vejamos um exemplo muito parecido com o anterior, mas com uma pequena diferença.

```js
function showClosureBehaviour() {
  let localValue = 'Some test value'; //variável local criada pela função

  function logValue() {
    //função interna => uma closure
    console.log(localValue); //utiliza variável declarada na função pai
  }

  return logValue; //retorna a closure criada
}
let newFunc = showClosureBehaviour();
newFunc(); // Imprime "Some test value"
```

É possível perceber que a única diferença desse trecho de código para o anterior é que a função filha (`logValue`) é retornada a partir da função pai. Em algumas linguagens de programação não seria possível executar a função `newFunc`, visto que as variáveis locais dentro da função só existiram durante a execução da função `showClosureBehaviour`. Entretanto, isso não acontece em Javascript, visto que funções formam **closures**.

**Uma _closure_ é a combinação de uma função e o escopo léxico dentro do qual a referida função foi declarada.** Esse escopo inclui quaisquer variáveis que estavam no escopo no momento em que a closure foi criada. Ou seja, `newFunc` é uma referência para a instância da função `logValue` que foi criada quando `showClosureBehaviour` foi executada. Nesse caso, a instância de `logValue` mantém a referência para o seu **escopo léxico**, dentro do qual a variável `localValue` existe. Logo, quando `newFunc` é invocada, a variável `localValue` permanece disponível para uso e "Some test value" é impresso em tela.

## Blz, mas...para que preciso saber disso? Qual a importância?

Uma vez sabendo o que é uma **closure** e o que é o **escopo léxico**, é possível, dentre outras coisas, **emular métodos privados**. Diferentemente de uma linguagem como Java (orientada a objetos), JavaScript não provê uma forma nativa de declarar métodos privados. Tais métodos são úteis porque restringem o acesso ao seu código, evitando assim que métodos auxiliares venham a bagunçar a interface pública do seu código.

Vejamos uma forma de usar closures para definir funções públicas que podem acessar funções e variáveis privadas (conhecido como [Module Pattern](https://coryrylan.com/blog/javascript-module-pattern-basics)):

```js
const makeCounter = function() {
  //Semelhante à criação de uma classe em POO
  var privateCounter = 0; //Faz parte do escopo léxico compartilhado
  function changeBy(val) {
    //Faz parte do escopo léxico compartilhado
    privateCounter += val;
  }

  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    },
  };
};

let counter1 = makeCounter(); //Semelhante à criação de uma instância de um objeto em POO
let counter2 = makeCounter(); //Semelhante à criação de uma instância de um objeto em POO

console.log(counter1.privateCounter); //undefined
console.log(counter1.changeBy); //undefined

console.log(counter1.value()); /* Imprime 0 */
counter1.increment();
counter1.increment();
console.log(counter1.value()); /* Imprime 2 */

console.log(counter2.value()); /* Imprime 0 */
```

Nesse exemplo, um único _escopo léxico_ é criado e compartilhado por 3 funções: `increment`, `decrement` e `value`. Esse escopo, por sua vez, contém 2 itens privados: uma variável chamada `privateCounter` e uma função chamada `changeBy.` Nesse caso, nenhum dos 2 itens podem ser acessados diretamente, mas somente através das 3 funções públicas que são retornadas. Ou seja, **essas 3 funções são _closures_ que compartilham o mesmo escopo, tendo acesso à variável _privateCounter_** **e à função _changeBy_.**

Outra coisa interessante a se perceber é que `counter1` e `counter2` são independentes entre si e cada uma mantém uma versão diferente da variável `privateCounter` através da sua própria _closure_. Cada vez que um desses contadores é chamado, seu _escopo léxico_ muda, mudando assim o valor da variável `privateCounter`. No entanto, **mudanças do valor da variável em uma closure não afetam o valor em outra closure**. Ou seja, esse comportamento é exatamente o que temos quando criamos instâncias de classes em POO (Programação Orientada a Objetos).

## Conclusão

Através do conhecimento do que é uma **closure** e do que é o **escopo léxico**, podemos ter acesso a uma série de benefícios que, normalmente, são associados com a POO (principalmente o encapsulamento). Existem, inclusive, vários outros casos de uso práticos obtidos através do uso de closures. Se quiser saber mais a respeito, você pode consultar o [artigo da MDN que trata de _closures_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures) que utilizei como base para criação do presente artigo.

Espero que o conhecimento adquirido durante esse artigo possa ser útil no seu dia-a-dia de programador Javascript xD. Se ficar com alguma dúvida, quiser discutir algo ou mesmo corrigir algum detalhe, fique à vontade para deixar seu comentário logo abaixo. Terei o maior prazer em respondê-lo!

Nos vemos no próximo artigo! Até lá xD.
