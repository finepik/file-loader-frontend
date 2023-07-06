# pull official base image
FROM node:16.20.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY yarn.lock ./
RUN yarn install 
# RUN npm install react-scripts@3.4.1 -g --silent

# add app
COPY . ./

EXPOSE 5173

# start app
CMD ["yarn", "run runDocker"]