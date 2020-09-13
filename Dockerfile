FROM node:latest

MAINTAINER parchuk


WORKDIR /var/www

ADD /var/www/helper/config.js

COPY . /var/www

RUN npm install

ENTRYPOINT ["npm", "start"]
