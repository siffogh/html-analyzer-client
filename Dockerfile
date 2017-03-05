FROM node:6.3.0
ARG BUILD_ENV

# Create app directory
RUN mkdir -p /app
WORKDIR /app

# Install app dependencies
COPY package.json /app
RUN npm install

# copy source files
COPY . /app

RUN echo "module.exports = require('./config.$BUILD_ENV');" > config/index.js

EXPOSE 3000

CMD npm run build
