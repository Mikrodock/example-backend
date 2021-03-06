FROM node

WORKDIR /usr/src/app

COPY package*.json ./
COPY index.js ./

RUN npm install --only=production

EXPOSE 3000