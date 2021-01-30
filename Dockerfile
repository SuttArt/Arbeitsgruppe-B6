FROM node:14
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN mkdir public
WORKDIR /usr/src/app/public
RUN git clone https://github.com/SuttArt/Arbeitsgruppe-B6.git .
EXPOSE 8080
WORKDIR /usr/src/app
CMD [ "node", "index.js" ]


