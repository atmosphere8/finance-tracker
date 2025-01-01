ARG NODE_VERSION
ARG API_PORT

FROM node:${NODE_VERSION} AS build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm install -g nodemon

EXPOSE ${API_PORT}

CMD ["npm", "run", "dev"]