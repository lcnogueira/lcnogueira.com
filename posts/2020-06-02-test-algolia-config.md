---
date: '2020-06-02 09:28:07'
title: Test algolia config
description: Testando configuração do algolia
tags:
  - misc
---
Este teste é para confirmar que os posts não são estão sendo indexados quando um novo PR é aberto, mas somente quando é feito o merge na master do projeto.

Irei fazer os seguintes passos para testar:

* Salvarei esse post para abrir uma nova PR;
* Verificarei no algolia para confirmar que o post não foi indexado;
* Em seguida, farei de fato o **merge** para garantir que o post foi indexado quando chegar à master;
* Após tudo, irei deletar o arquivo do projeto e fazer um novo commit para master, para remover o artigo;
* Por fim, irei verificar no algolia.
