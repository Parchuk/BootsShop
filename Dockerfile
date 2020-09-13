FROM node:latest

MAINTAINER parchuk


WORKDIR /var/www

COPY . /var/www

RUN npm install

CMD  sudo touch /helper/config.js


ENTRYPOINT ["npm", "start"]
