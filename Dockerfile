FROM node:7-onbuild

WORKDIR /usr/src/app/

RUN npm install

EXPOSE 3000

CMD npm start