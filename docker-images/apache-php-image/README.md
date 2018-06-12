# Teaching-HEIGVD-RES-2018-Labo-HTTPInfra

## Apache-php-images

### Description

This folder contain all material needed in order to create a nice static web page (with bootstrap). It's used with docker. The base docker image is the `php-7.0-apache` from official docker-hub.  

### Instruction

1. First you need to open a terminal in the **apache-php-image** folder.
2. To build the docker container run the following command : `docker build -t YourContainerName .`
3. To run the container : `docker run -d YourContainerName`
4. Enjoy your beautifull web page.

### Ajax

If you have the ajax version of the web page, there is a script named *script.js* who fetch the random animals from the express application. If you want to have this functionallity, you need to install the reverse proxy and the express application.
