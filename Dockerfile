FROM node:7-onbuild

WORKDIR /usr/src/app/

RUN npm install -g pm2

EXPOSE 3000

CMD npm pm2 start process.json