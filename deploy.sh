#!/usr/bin/env sh

# остановить публикацию при ошибках
set -e

# сборка
npm run build

# переход в каталог с результатами сборки
cd dist

# если вы деплоите на кастомный домен, раскомментируйте следующую строку и измените её
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# если вы деплоите на https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# если вы деплоите на https://<USERNAME>.github.io/<REPO>, замените <USERNAME> и <REPO> на ваши
git push -f git@github.com:mi-kovalenko/ameton.git master:gh-pages

cd -