# using 3.11.9 runtime
FROM python:3.11.9-slim

WORKDIR /app

# prevent python from withing pyc files to disk
ENV PYTHONDONTWRITEBYTECODE=1
# prevent python from buffering stdout and stderr
ENV PYTHONUNBUFFERED=1

# install application dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 5000

# docker isolates environment, venv inside container is optional
# run app.py directly on container's isolated python environment
CMD ["python", "app.py"]
