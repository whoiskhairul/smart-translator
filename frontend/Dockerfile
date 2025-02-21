# Docker image for frontend
FROM node:18-alpine

#set work directory
WORKDIR /app

#copy package.json and package-lock.json to work directory
COPY package.json package-lock.json ./

#install dependencies
RUN npm install

#copy project files to work directory from local machine
COPY . .

#expose port
EXPOSE 5173

#run server
CMD ["npm", "run", "dev"]