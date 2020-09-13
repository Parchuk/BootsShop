FROM node:latest

MAINTAINER parchuk


WORKDIR /var/www

COPY . /var/www

RUN npm install
CMD ["touch", "/var/www/helper/config.js"]


ENTRYPOINT ["npm", "start"]
