FROM node:14

WORKDIR /usr/src/app

COPY ./ /usr/src/app
RUN yarn install
RUN yarn compile

EXPOSE 80
CMD ["yarn", "start"]