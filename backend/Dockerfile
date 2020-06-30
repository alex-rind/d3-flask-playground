# Docker image for backend
# ============================================================
# 

# Use the Python 3.8 image as our parent image
FROM python:3.8

# Set environmental variable(s)
ENV DEBIAN_FRONTEND=noninteractive

# Set working director
WORKDIR /app

# Copy files
COPY . /app

# Update system packages
RUN /usr/local/bin/python -m pip install --upgrade pip \
	&& apt-get update -y

# Install required Python modules
RUN pip install -r /app/requirements.txt

# Install additional system packages
RUN apt-get install -y apt-utils