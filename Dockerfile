FROM node:25-alpine

WORKDIR /app

COPY . .

RUN npm install 

EXPOSE 5000

ENTRYPOINT ["npm" , "start"]