[![Maintainability](https://api.codeclimate.com/v1/badges/ef50be3f8c0e1debda5a/maintainability)](https://codeclimate.com/github/krav-ets/project-lvl1-s236/maintainability)
[![Build Status](https://travis-ci.org/krav-ets/project-lvl1-s236.svg?branch=master)](https://travis-ci.org/krav-ets/project-lvl1-s236)


# Project #1: Brain Games

### Цель

Первый проект нацелен на знакомство с экосистемой JavaScript. Она достаточно сложна по сравнению с языками вроде PHP, Ruby или Python. Количество понятий, инструментов и их связок настолько большое, что даже у опытных разработчиков иногда голова идет кругом. Чтобы стартануть по всем канонам даже простейший проект придется как следует повозиться. Вот неполный перечень ключевых компонентов любого современного js-приложения:

* Пакетный менеджер (`npm`, `yarn`). Управляет зависимостями, выполняет хуки и описывает проект.
* [Babel](https://babeljs.io/) (Транспайлер). Позволяет использовать новые фичи, даже если они не поддерживаются средой исполнения.
* [Eslint](http://eslint.org/) - линтер. Проверяет корректность кода на соответствие [стандартам кодирования](https://github.com/airbnb/javascript).

После прохождения проекта вы сможете легко настраивать свои собственные проекты, подключать новые библиотеки, ориентироваться в структуре кода, а также получите базовые навыки отладки. Вы прокачаете себя в использовании модулей js, работе с исполняемыми файлами и опубликуете свой первый пакет в **npm**.

### Описание

В рамках проекта необходимо реализовать набор мини-игр, запускаемых из консоли. Эти игры похожи на то, что обычно называют &quot;Brain Games&quot;.

Пример игры:

```sh
$ brain-progression

Welcome to the Brain Game!
What number is missing in this progression?

May I have your name? Roman
Hello, Roman!

Question: 14 .. 18 20 22 24 26 28
Your answer: 16
Correct!
Question: 5 6 7 8 9 .. 11 12
Your answer: 10
Correct!
Question: 12 15 18 21 .. 27 30 33
Your answer: 24
Correct!
Congratulations, Roman!
```