FROM node:latest

MAINTAINER parchuk


WORKDIR /var/www

COPY . /var/www

RUN touch /var/www/helper/config.js
RUN npm install


ENTRYPOINT ["npm", "start"]
