FROM nginx
ARG BUILD_ENV

# install node
RUN apt-get update
RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_6.x | bash -
RUN apt-get install -y nodejs

RUN mkdir -p /app
WORKDIR /app

# Install app dependencies
COPY package.json .
RUN npm install

# Bundle app source
COPY . .

RUN echo "module.exports = require('./config.$BUILD_ENV');" > config/index.js

RUN npm run build

COPY nginx/conf.d /etc/nginx/conf.d

EXPOSE 80