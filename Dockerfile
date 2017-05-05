FROM node:7-onbuild

WORKDIR /app

RUN npm install -g pm2 && \
    apt-get update && apt-get install -y vim

COPY . /app/

EXPOSE 3000

CMD pm2 start process.json