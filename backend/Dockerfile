#Python base image
FROM python:3.12-slim

#prevent writing .pyc files
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

#set work directory
WORKDIR /app

# Install dependencies
COPY requirements.txt .
RUN pip install -r requirements.txt

#copy project files to work directory from local machine
COPY . .

#Expose port
EXPOSE 8000

#Run server
CMD ["python3", "manage.py", "runserver", "0.0.0.0:8000"]
