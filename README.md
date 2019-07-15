# Муслим тур UI интерфейс

> version 1.0 

## Разворачивание проекта локально

- **Склонируете репозиторий** :
```
   $ git clone git@gitlab.com:illyadeveloper/muslim-tour.git
```

- **Установите все зависимости выполнив команду** :
```
   $ npm install
```

- **Для сбрки проекта выполните команду**:
```
   $ gulp
```

## Параметры выполнения сборки
Все параметры можно просмотреть и дополнительно настроить в файле gulpfile.js, в ручном режиме используйте следующие команды:

| Commands               | Description |
| ---------------------- | ------------------------------ |
| $ gulp || default      | -- normal mode |
| $ gulp dev             | -- developers mode is not compress/optimization files |
| $ gulp compress        | -- compression / optimization of JS and CSS files  |
| $ gulp clear           | -- remove dist folder|
| $ gulp libs            | -- append js lib files to src |

 
## Markup Templateing
Для организации HTML5 в проекте использовался шаблонизатор PUG; Вы можете узнать больше здесь https://pugjs.org/api/getting-started.html. Шаблонный движок может быть интегрирован в любой современный фреймворк Angular, Vue, React и другие, а также в ваш собственный MVC. Мопс подключен к этой конструкции, чтобы упростить написание семантики.

#### Структура шаблона:

**Основные расширения и миксинфайлы:**
> @layout.pug
> @mixin-components.pug
> @ui-elments.pug
> @var.pug
   
**Файлы всех компонентов проекта, которые включают макет:**

**Файлы компонентов UI Mixin:**

## Стилизация
Для сборки стилей использовался препроцессор sass; Более подробную информацию можно найти здесь. https://sass-lang.com/documentation

#### Стильная структура:

**Основные стили:**
> @import "core/functions";         

> @import 'core/mixins';    

> @import 'core/var';  

> @import "core/normalize"; 

> @import "core/base";

> @import "core/icon";

> @import "core/font";

> @import "core/sprite";

> @import "core/animate";

> @import "core/scroll-fix";

**Included with _node_modules libs styles:**

**Стили основного лейаута:**

**Стили UI елементов:**


**Стили основнх компонентов:**

## Шрифты

## Иконки  и другие файлы

