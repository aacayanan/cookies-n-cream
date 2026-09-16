# using node v24
FROM node:24.11.1-alpine

WORKDIR /app

# copy tracking files first
COPY package*.json ./

# install npm v11
RUN npm install -g npm@11.6.2 && npm install

COPY . .

EXPOSE 5173

# vite requires --host to expose server outside container
CMD ["npm", "run", "dev", "--", "--host"]
