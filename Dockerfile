FROM node:18-alpine
WORKDIR /der/
COPY public/ /der/public
COPY src/ /der/src
COPY package.json /der/
RUN npm install
CMD ["npm", "start"]