FROM node:latest

MAINTAINER BootShop


WORKDIR /var/www
COPY . /var/www

RUN npm install

ENTRYPOINT ["npm", "start"]
