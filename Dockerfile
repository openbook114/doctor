FROM node:7-onbuild

WORKDIR /usr/src/app/

COPY . /usr/src/app/

RUN npm install -g pm2 && \
	npm install

EXPOSE 3000

CMD npm start