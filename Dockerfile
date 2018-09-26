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

## issues
# need angilar-CLI version that supports both --host 0.0.0.0 and the do-not-check flag --disable-host-check
# https://github.com/webpack/webpack-dev-server/issues/882
# https://github.com/Teradata/covalent/issues/582
# https://github.com/angular/angular-cli/issues/6070
# https://github.com/angular/angular-cli/pull/6173/commits
# https://github.com/angular/angular-cli/releases/tag/v1.1.0

