# Use the official Python image from Docker Hub
FROM python:3.10

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the current directory contents into the container at /usr/src/app
COPY . .

# Install any needed packages specified in requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Make port 8000 available to the world outside this container
EXPOSE 8000

# Echo the address and run manage.py to start your application
CMD echo "Django is running on http://0.0.0.0:8000" && python ./manage.py runserver 0.0.0.0:8000
