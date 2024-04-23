FROM node:18-alpine

WORKDIR /app

ENV NODE_OPTIONS=--max_old_space_size=4096

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
