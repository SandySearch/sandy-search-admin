# Sandy Search Admin User Interface

## Sandy Search (was Emergency Services - Search and Reporting) Mobile and Web App

[![License](https://img.shields.io/badge/license-MIT-orange.svg?style=flat-square)](https://github.com/mkobar/sandy-search-admin/blob/master/LICENSE)
![Platform](https://img.shields.io/badge/platform-Web-orange.svg)
[![Container](https://img.shields.io/badge/container-Docker-blue.svg?style=flat-square)](https://github.com/mkobar/sandy-search-admin/blob/master/Dockerfile)
[![Container](https://img.shields.io/badge/container-Kubernetes-blue.svg?style=flat-square)](https://github.com/mkobar/sandy-search-admin/blob/master/Dockerfile)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Entry for The Global Call for Code Hackathon, 28 September 2018

<img align="right" height="200" src="https://raw.githubusercontent.com/mkobar/essr-aoc/master/resources/logo2.jpg">

### The Idea

I was in Super Storm Sandy in 2012 in Connecticut, and was without power for 9 days.
During the disaster, we had a very hard time discovering what services (gasoline, food, water, ice, power) were available and when and where.  And if you have only a half a tank of gas you don't want to drive around looking for more, without knowing where to go.

The idea for this service is to use the power of crowdsourcing (think "Waze for Services, after a disaster").  It currently allows anyone (without a login) to search and report on services available in their area.

Verified users (pre-registered, think Red Cross, National Guard, and business owners/managers) can leave "verified" status updates, at no cost.

I think the service could be used as a branding expense for emergency services.  The majority of the expense would be the manual verification of "verified" users, and minimal hosting of the back-end service.

<img align="left" height="400" src="https://raw.githubusercontent.com/mkobar/essr-aoc/master/resources/Sandy_Oct_28_2012_1600Z.jpg">

### How It Works

So this service uses geolocation and a standard crowdsourcing format to collect information from people in the field.  And share it with anyone who needs it.
One of the driving forces in the design was simplicity.  "2 clicks to get to the answer", exactly like the Palo Alto Police Chief said in [this video](https://youtu.be/oojRzM55i08)

Nothing fancy but it will work, much like the way Zello was used after Hurricane Harvey in Houston:  https://wgntv.com/2017/08/29/civilians-and-cajun-navy-bring-their-own-boats-to-rescue-harvey-victims/

### How It Was Built

This web application uses the Google [FireBase](https://firebase.google.com/) services for authentication and a realtime database (currently on a free spark plan).

Maps and geocoding is pulled from **Google APIs**.  I plan to do reverse geocoding from Google too.

The Admin user interface is all Node and Angular. And hosted in a Docker container (stored in the **IBM Cloud Container Registry**) in a  Kubernetes cluster on the **IBM Cloud Kubernetes Service**. Need to add reports and maps to admin user interface.

Want to use **IBM Watson services** to post-process all user request data and create heatmaps for the optimal locations for services and food distribution.

All built with a Vim editor and a cmd window (and git).

### What I Learned from this Hackathon

- Firebase Database with Observables
- GeoFire for geolocation
- Angular 2 and NodeJs
- Dockerizing an Angular 2 / NodeJs application
- Autobuilding a Docker image from a GitHub checkin with **Docker Cloud**
- Storing and updating Docker images in the **IBM Cloud Container Registery**
- Running Apps in Kubernetes in the **IBM Cloud Kubernetes Service** (on the free tier) with NodePort networking
- Fixing vulnerabilities discovered by the **IBM Cloud Container Registry Vulnerability Advisor**
- Upgraded running Docker containers with new images
- Upgraded running Docker containers in Kubernetes in the **IBM Cloud Kubernetes Service** with new images

### Next Steps for SandySearch

- Add reports to the Admin user interface
- Dockerizing an Ionic 3 app
- Internationalization
- **IBM Watson ML** to predict where services will be needed based on past experience

### See Also

The Sandy Search Mobile App on GitHub: https://github.com/mkobar/sandy-search

### Live Demos

Live web app version of SandyService Admin can be found here:  https://mkobar.github.io/sandy-search-admin/

Live web app version of SandyService Admin can be found here: https://plu.sh/sandyadmin

Live SandyService Admin web app running on **IBM Cloud Kubernetes** can be found here: http://173.193.99.198:30471

Sandy Search Admin Docker image on **Docker Cloud**:  mkobar/sandysearchadmin
Sandy Search Admin Docker image on **IBM Cloud Kubernetes Service**:  registry.ng.bluemix.net/call4code/sandysearchadmin

## Things left to do:

- [x] ~~add an admin interface for entry and user management~~
- [x] ~~host admin interface on GitHub~~
- [ ] add reports (timeline maps by createDate, updateDate and votes)
- [x] ~~host admin user interface on IBM Cloud (Docker and Kubernetes)~~
- [ ] export usage data in csv format
- [ ] add **IBM Watson ML** for heatmap generation
- [ ] process usage with **IBM Watson** to predict optimal locations for future services
- [x] ~~need a video of admin usage and reporting~~

Please do contact me directly if you can use or add to this project.

## License

Released under the [MIT License](http://opensource.org/licenses/MIT)

Copyright @ 2018 [RKO Security](http://www.rkosecurity.com)

