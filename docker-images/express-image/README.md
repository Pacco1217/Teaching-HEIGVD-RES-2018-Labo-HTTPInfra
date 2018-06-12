# Teaching-HEIGVD-RES-2018-Labo-HTTPInfra

## Express-image

### Description

This folder contain all material needed in order to create an express nodejs server. It's used with docker. The base docker image is the `node:8.11.2` from official docker-hub. The server listen on the port 3000. When you access the server, it returns a JSON tab of random animals.

### Instruction

1. First you need to open a terminal in the **express-image** folder.
2. To build the docker container run the following command : `docker build -t YourContainerName .`
3. To run the container : `docker run -d YourContainerName`
4. Enjoy your express server !
