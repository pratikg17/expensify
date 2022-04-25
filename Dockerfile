FROM node:alpine

WORKDIR "/app"

COPY ./client/package.json ./

RUN npm install --legacy-peer-deps

COPY ./client .

RUN npm run build

CMD ["ls", "npm", "run", "start:prod"]