FROM node:16

COPY . /app

WORKDIR /app

EXPOSE 3000

RUN "yarn"

CMD [ "yarn", "dev" ]