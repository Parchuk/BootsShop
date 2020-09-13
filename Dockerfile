FROM node:latest

MAINTAINER parchuk


WORKDIR /var/www

COPY . /var/www

CMD ["touch", "/var/www/helper/config.js"]
RUN npm install


ENTRYPOINT ["npm", "start"]
