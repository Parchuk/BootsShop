# <img align="center" style="padding:10px 25px;" src="https://github.com/Parchuk/readme-BootShop/blob/master/logo.png?raw=true" width="200" >

### <span style="color:#99aab5"> <span style="color:;"> &#9998; </span>Екзаменаційна робота на тему: &laquo;node.js&raquo; студентів Комп'ютерної Академії STEP</span> &nbsp;<img src="https://github.com/Parchuk/readme-BootShop/blob/master/step.svg?raw=true" width="30" style="margin-left:15px;background-color:#fff;padding:5px;">

### &#9879; Особливості

- Шаблон проектування [MVC](https://uk.wikipedia.org/wiki/Модель-вид-контролер)

&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;<img src="https://github.com/Parchuk/readme-BootShop/blob/master/mvc.png?raw=true" width="300" style="margin-left:40px">

- використовується система управління реляційними базами даних [MariaDB](https://mariadb.org)&nbsp;&nbsp;<img align="center" src="https://github.com/Parchuk/readme-BootShop/blob/master/mariadb-logo.png?raw=true" width="15" style="margin-left:5px">
- працює на платформі [Node.js](https://nodejs.org/uk/)&nbsp;&nbsp;<img align="center" src="https://github.com/Parchuk/readme-BootShop/blob/master/node-js.png?raw=true" width="20" style="margin-left:5px">
- в якості проміжного обробника для управління сервером і маршрутами використовується фреймворк [Express.js](https://expressjs.com/ru/)&nbsp;&nbsp;<img align="center" src="https://github.com/Parchuk/readme-BootShop/blob/master/express-js.png?raw=true" width="15" style="margin-left:5px">
- для роботи з базами даних використовується ORM-бібліотека [Sequelize](https://sequelize.org)&nbsp;&nbsp;<img align="center" src="https://github.com/Parchuk/readme-BootShop/blob/master/sequelize.png?raw=true" width="15" style="margin-left:5px">
- міддлвер аутентифікації [Passport](http://www.passportjs.org)&nbsp;&nbsp;<img align="center" src="https://github.com/Parchuk/readme-BootShop/blob/master/passport.svg?raw=true" width="15" style="margin-left:5px">

### :hammer_and_wrench: Щоб запустити проєкт

- Встановіть [NodeJS](https://nodejs.org/en/) (якщо потрібно)
- Клонуйте репозиторій за допомогою [Git ](https://git-scm.com/downloads): `git clone https://github.com/RivneITStep/BootShop.git`
- перейдіть в скачану папку з проєктом: `cd BootShop`
- скачайте необхідні залежності: `npm install`
- щоб почати роботу, введіть команду: `npm start` (режим розробки)

Якщо ви все зробили правильно, у вас в браузері повинен відкритися
`http://localhost:8000/`

### :open_file_folder: Файлова структура

```
BootShop
├── controller
├── helper
├── model
├── routes
├── static
├── views
│   ├── layouts
│   ├── pages
├── app.js
├── package.json
└── .gitignore
```

- Корінь папки:
  - `app.js` — вхідний файл
  - `package.json` — список залежностей
  - `.gitignore` – заборона на відстеження файлів Git'ом
- Папка `controller` - отримує введення користувача та здійснює дзвінки до модельних об'єктів та подання для виконання відповідних дій.
- Папка `helper` - допоміжні функції
- Папка `model` - дані, та управління даними програми
- Папка `routes` - визначає, як додаток відповідає на клієнтський запит до конкретної адреси, яким є URI (або шлях), і певного методу запиту HTTP (GET, POST і т.д.).
- Папка `static` - статичні файли
- Папка `views` - переводить дані з моделі у форму, що підходить для користувальницького інтерфейсу.

### Template

Скачати шаблон сайту можна [`ТУТ`](https://drive.google.com/drive/folders/1x8o8f2uDqaRO4F5H_HtGPvzh78PQHbwC?usp=sharing)
