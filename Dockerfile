FROM keymetrics/pm2:latest-alpine

WORKDIR /usr/src/app

COPY package*.json ./
COPY ecosystem.config.js ./
COPY src src/

CMD [ "pm2-runtime", "start", "ecosystem.config.js" ]
