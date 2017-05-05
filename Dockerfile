FROM node:7-onbuild

WORKDIR /app

COPY . /app/

RUN npm install -g pm2 && \
	npm install

EXPOSE 3000

CMD pm2 start process.json