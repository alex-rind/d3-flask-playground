# Dockerfile for frontend
# ============================================================
# 

# Use Node stable (v12 on Debian Buster) as our parent image
FROM node:12-buster

# Set working directory
WORKDIR /var/www

# Copy/add over frontend files
COPY package.json /var/www/
COPY tsconfig.json /var/www/
COPY webpack.* /var/www/
COPY yarn.lock /var/www/
ADD src /var/www/src
ADD dist /var/www/dist

# Install required Node modules
RUN npm install

# Install webpack CLT stuff
RUN npm install -g webpack webpack-dev-server

# Install required Yarn modules
RUN yarn install