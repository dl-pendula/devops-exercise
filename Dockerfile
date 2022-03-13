FROM node:14
WORKDIR /app
COPY ./ /app/
EXPOSE 80
CMD ["yarn", "start"]