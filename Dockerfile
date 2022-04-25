FROM node:alpine

WORKDIR "/app"

COPY ./client/package.json ./

RUN npm install

COPY ./client .

RUN npm run build

CMD ["npm", "run", "start:prod"]