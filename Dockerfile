# base image
FROM node:9.4

# set working directory
WORKDIR /usr/src/app

# install and cache app dependencies
COPY package*.json ./
ADD package.json /usr/src/app/package.json
RUN npm install

# Bundle app source
COPY . .


# Specify port
EXPOSE 4200

# start app
#CMD ["npm", "start"]
CMD ["bash"]

