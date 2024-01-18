# Use a Node.js version that is compatible with your Next.js version
FROM node:18.17

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (or yarn.lock) files
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of your app's source code from your host to your image filesystem.
COPY . .

# Grant execute permission to the entrypoint script
RUN chmod +x docker-entrypoint.sh

# Your app binds to port 3000 so you'll use the EXPOSE instruction to have it mapped by the docker daemon
EXPOSE 3000

# Echo the address in the entrypoint script and then run it
ENTRYPOINT ["/bin/sh", "-c", "echo 'Next.js is running on http://0.0.0.0:3000' && ./docker-entrypoint.sh"]
