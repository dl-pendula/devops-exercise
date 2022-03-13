FROM node:14
WORKDIR /usr/src/app/
COPY ./ /usr/src/app/
EXPOSE 80
RUN ["yarn", "install"]
CMD ["yarn", "start"]