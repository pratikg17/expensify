FROM node:alpine

WORKDIR "/app"

COPY ./client/package.json ./

RUN npm install --legacy-peer-deps

COPY . .

RUN ls
RUN npm run build

CMD [ "npm", "run", "start:prod"]