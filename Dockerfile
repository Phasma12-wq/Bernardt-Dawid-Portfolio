# Use Node.js 26 on Alpine 3.22
FROM node:26-alpine3.22

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "app.js"]