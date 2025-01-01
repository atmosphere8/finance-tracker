ARG NODE_VERSION
ARG FRONTEND_PORT

FROM node:${NODE_VERSION} AS build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE ${FRONTEND_PORT}

CMD ["npm", "run", "dev"]