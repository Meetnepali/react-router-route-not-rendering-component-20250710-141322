FROM node:18-alpine
WORKDIR /app
COPY package.json ./
COPY src ./src
COPY public ./public
RUN npm install -g react-scripts serve && \
    npm install && \
    npm run build
EXPOSE 3000
CMD [ "npx", "serve", "-s", "build", "-l", "3000" ]
