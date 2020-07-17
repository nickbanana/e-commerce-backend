FROM keymetrics/pm2:latest-alpine

WORKDIR /usr/src/app

COPY package*.json ./
COPY ecosystem.config.js ./
COPY src src/

ENV NPM_CONFIG_LOGLEVEL warn
RUN npm install

EXPOSE 3000 8080

CMD [ "pm2-runtime", "start", "ecosystem.config.js", "--web", "3000"]
