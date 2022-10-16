# Dockerfile

# base image
FROM node:alpine

# create & set working directory
RUN mkdir -p /usr/src
WORKDIR /usr/src

# copy source files
COPY package*.json /usr/src

# install dependencies
RUN yarn install

COPY . /usr/src
# start app
# RUN yarn build
EXPOSE 3000
CMD ["yarn", "dev"]