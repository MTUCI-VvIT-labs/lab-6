# Лабораторная работа №6: Создание оконного приложения-калькулятора


## Задача:
> + Обработать все возможные исключения
> + Добавить кнопку для добавления плавающей точки
> + Добавить кнопки для математических операций вычитания,
    умножения, деления
> + Создать для этих кнопок методы-обработчики

## Описание работы программы:
1. При запуске кода с помощью `npm run build` запускается скрипт из файла [main.js](main.js).
2. В функции [main](main.js) импортируется переменная `app` из модуля electron. После инициализации модуля electron создается активное окно с помощью константы [createWindow](main.js). Константа createWindow содержит стрелочную функцию, которая создает окно и рендерит [index.html](index.html).



## Билд программы из исходного кода:
```bash
npm run build
```

## Примечание
+ Для сборки программы необходимо устаноить папку `node_modules` с помощью команды `npm install`
+ Для сборки программы из исходного кода необходимы установленные nodejs и npm последних версий.
+ Готовую программу можно скачать [здесь](https://drive.google.com/drive/folders/1_vue2Z-xKL_I6eLhHqzLWUCu5jNb62fH?usp=sharing)