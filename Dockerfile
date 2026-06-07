# Use Node.js 26 on Alpine 3.22
FROM node:26-alpine3.22

WORKDIR /usr/local/app

COPY package*.json ./

RUN npm install

COPY . .

COPY entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/entrypoint.sh

EXPOSE 3000
ENTRYPOINT ["entrypoint.sh"]
CMD ["node", "app.js"]