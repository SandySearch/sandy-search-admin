# base image
FROM node:9.4

# set working directory
WORKDIR /app

# install and cache app dependencies
COPY package*.json /app/
#ADD package.json /usr/src/app/package.json
RUN npm install

# Bundle app source
COPY . /app/


# Specify port
EXPOSE 4200

# start app
CMD ["npm", "start"]
#CMD ["bash"]

