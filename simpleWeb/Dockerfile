FROM node:alpine

#FROM alpine

#WORKDIR /usr/app 

#all the files like package.json and index.js are present in local directory so indorder to move them in docker container we will use copy
WORKDIR /usr/app
COPY ./ /usr/app

RUN npm install

CMD ["npm","start"]

#Inorder to listen all the request(incoming) on port 8080 should directly goes to docker this is known as PORT MAPPING

#Command :: docker run -p 8080:8080 gauravrajpoot/simpleWeb