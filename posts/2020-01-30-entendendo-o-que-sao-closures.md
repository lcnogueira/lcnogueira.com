---
date: '2020-02-04 11:27:20'
title: Closures
description: >-
  Entenda o que são closures, o que é o escopo léxico e como tirar proveito
  disso.
tags:
  - js
---
## Introdução

É comum utilizarmos frameworks ou mesmo o Vanilla Javascript sem entendermos alguns conceitos que podem nos ajudar bastante durante o nosso dia-a-dia. Hoje vamos ver o conceito de _closures,_ como podem compartilhar o mesmo _escopo léxico_ e o que isso pode trazer de vantagem durante o desenvolvimento. Para isso, utilizarei como referências principais, o [artigo da MDN sobre _closures_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)_._ Sem mais delongas, vamos lá!

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

**Uma _closure_ é a combinação de uma função e o escopo léxico dentro do qual a referida função foi declarada.** Esse escopo inclui quaisquer variáveis que estavam no escopo no momento em que a _closure_ foi criada. Ou seja, `newFunc` é uma referência para a instância da função `logValue` criada quando `showClosureBehaviour` é executada. A instância de `displayName` mantém a referência para o seu escopo léxico, dentro do qual a variável `localValue` existe. Logo, quando `newFunc` é invocada, a variável `localValue` permanece disponível para uso e "Some test value" é impresso no console.

## Blz, mas...para que preciso saber disso? Qual a importância?

Uma vez sabendo o que é uma _closure_ e o que é o _escopo léxico_, é possível, dentre outras utilidades, **emular métodos privados**. Diferentemente de uma linguagem como Java, JavaScript não provê uma forma nativa de declarar métodos privados. Tais métodos são úteis porque restringem o acesso ao seu código e provêem um modo de manter métodos não essenciais de bagunçar a interface pública do seu código. 

Vejamos uma forma de usar _closures_ para definir funções públicas que podem acessar funções e variáveis privadas (conhecido como _Module Pattern_):

```js
const makeCounter = function() {
  //Semelhante à criação de uma classe em POO
  var privateCounter = 0; //Faz parte do escopo léxico compartilhado 
  function changeBy(val) { //Faz parte do escopo léxico compartilhado
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
    }
  };
};

let counter1 = makeCounter(); //Semelhante à criação de uma instância de um objeto em POO
let counter2 = makeCounter(); //Semelhante à criação de uma instância de um objeto em POO

console.log(counter1.privateCounter); //undefined
console.log(counter1.changeBy);       //undefined

console.log(counter1.value()); /* Imprime 0 */
counter1.increment();
counter1.increment();
console.log(counter1.value()); /* Imprime 2 */

console.log(counter2.value()); /* Imprime 0 */
```

Nesse exemplo, um único _escopo léxico_ é criado e compartilhado por 3 funções: `increment`, `decrement` e `value`. Esse escopo, por sua vez, contém 2 itens privados: uma variável chamada `privateCounter` e uma função chamada `changeBy.` Nesse caso, nenhum dos 2 itens podem ser acessados diretamente, mas somente através das 3 funções públicas que são retornadas. Ou seja, **essas 3 funções são _closures_ que compartilham o mesmo escopo, tendo acesso à variável _privateCounter_** **e à função _changeBy_.**

Outra coisa interessante a se perceber é que `counter1` e `counter2` são independentes entre si e cada uma mantém uma versão diferente da variável `privateCounter` através da sua própria _closure_. Cada vez que um desses contadores é chamado, seu _escopo léxico_ muda, mudando assim o valor da variável `privateCounter`. No entanto, mudanças do valor da variável em uma _closure_ não afetam o valor em outra _closure_. Ou seja, esse comportamento é exatamente o que temos quando criamos instâncias de classes em POO (programação Orientada a Objetos).

## Conclusão

Como foi possível perceber durante esse artigo, através do conhecimento do que é uma _closure_ e do que é o _escopo léxico_, podemos ter acesso a uma série de benefícios que, normalmente, são associados com a POO, principalmente o encapsulamento.

Espero que o conhecimento adquirido durante esse artigo possa ser útil no seu dia-a-dia com Javascript xD. Se quiser saber mais a respeito, você pode consultar o [artigo da MDN que trata de _closures_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures) que utilizei como base. Se ficar com alguma dúvida, quiser discutir algo ou mesmo corrigir algum detalhe, fique à vontade para deixar seu comentário logo abaixo.

Até a próxima!
