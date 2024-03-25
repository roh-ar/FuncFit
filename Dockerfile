# setting base image as node v16
FROM node:16

# setting work directory
WORKDIR /app

# copying only necessary source code files
COPY package*.json ./

# installing frontend node dependencies on container
RUN npm install

COPY . .

# exposing relevant port for frontend access
EXPOSE 3000

# running frontend application
CMD ["npm","start"]