# how to build tiny production image from:
# https://blog.hasura.io/an-exhaustive-guide-to-writing-dockerfiles-for-node-js-web-apps-bbee6bd2f3c4
#
# base image (from 1.07 GB to 292 MB) Yay Alpine!
#FROM node:9.4
FROM node:8.9-alpine

# Set one or more individual labels
LABEL org.sandysearch.name="SandySearch Admin User Interface"
LABEL org.sandysearch.version="0.0.4-beta"
LABEL org.sandysearch.release-date="2018-10-16"
LABEL org.sandysearch.version.is-production=""
LABEL org.sandysearch.hackathon="Call For Code 2018"

# update image due to security issues
WORKDIR /root
#RUN apt-get update && apt-get -V install -y \
#   --no-install-recommends \
#   curl \
#   gcc-4.9 \
#   gnupg \
#   libxml2 \
#   procps \
#   git \
#   imagemagick \
#   openssl \
#   perl \
#   sensible-utils \
#   wget \
#   && rm -rf /var/lib/apt/lists/*

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

