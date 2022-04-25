FROM node:alpine

WORKDIR "/app"

COPY ./client/package.json ./

COPY ./client .

RUN npm install --legacy-peer-deps

RUN npm run build

CMD [ "npm", "run", "start:prod"]