FROM node:14
WORKDIR /usr/src/app
RUN git clone https://github.com/SuttArt/Arbeitsgruppe-B6.git .
RUN git pull
RUN npm install
EXPOSE 8080
CMD [ "node", "index.js" ]
