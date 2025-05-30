FROM node:20-slim

WORKDIR /app

# Upgrade npm to latest stable version
RUN npm install -g npm@latest

COPY package.json package-lock.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host"]


