FROM node:alpine

RUN mkdir /app

WORKDIR /app

COPY ./package*.json ./

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]
