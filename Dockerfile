FROM node:16

COPY . /app

WORKDIR /app

EXPOSE 3000

EXPOSE 5555

RUN "yarn"

CMD [ "yarn", "docker_dev"]
