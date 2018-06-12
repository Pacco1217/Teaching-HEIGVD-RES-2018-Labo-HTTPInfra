# Teaching-HEIGVD-RES-2018-Labo-HTTPInfra

## Reverse-proxy

### Description

This folder contain all material needed in order to create a reverse proxy. It's used with docker. The base docker image is the `php:7.0-apache` from official docker-hub. At this step the ip adress of the two destinations container are hard written in the configuration file. You can access the reverse proxy by the host name `demo.res.ch`. When you access to the address *demo.res.ch:PORT/api/animals/*, you can see the JSON table of random animals. When you access to the address *demo.res.ch:PORT/*, you can see the static web page. (Explaination about the port in the next section)

### Instruction

1. First you need to open a terminal in the **reverse-proxy** folder.
2. To build the docker container run the following command : `docker build -t YourContainerName .`
3. You need to launch the 2 previous docker containers and edit the 001-revers-proxy.conf file. In this file, you need to set the ip addresses of the 2 previous docker containers.
4. To run the container : `docker run -d -p PORT:80 YourContainerName`. For exemple , if you run the following command : `docker run -d -p 8080:80 YourContainerName`, you can access the applications with the following url : *demo.res.ch:8080/*.
5. You need to add the host in your host file on your machine.
6. Enjoy your application !
