FROM node:18-alpine

WORKDIR /app

ENV NODE_OPTIONS=--max_old_space_size=4096

COPY package*.json ./
RUN yarn

COPY . .

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]
