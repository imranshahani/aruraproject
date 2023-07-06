# Use the official Node.js 18.14.2 image as the base
FROM node:18.14.2

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies using npm
#RUN npm install

# Install react-scripts globally
#RUN npm install -g react-scripts@latest

# Install the react package
#RUN npm install react

# Copy the rest of the application code to the working directory
COPY . .

# Build the application
#RUN npm run build

# Start the application
CMD ["npm", "run", "start"]