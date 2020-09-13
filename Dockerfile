FROM node:latest

MAINTAINER parchuk


WORKDIR /var/www

COPY . /var/www

RUN npm install


ENTRYPOINT ["npm", "start"]
