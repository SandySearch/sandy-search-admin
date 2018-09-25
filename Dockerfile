# base image
FROM node:9.4

# Bundle app source
COPY . /app

# set working directory
WORKDIR /app

# install and cache app dependencies
#COPY package*.json /usr/src/app/
#ADD package.json /usr/src/app/package.json
RUN npm install


# Specify port
EXPOSE 4200

# start app
#CMD ["bash"]
CMD ["npm", "start"]

