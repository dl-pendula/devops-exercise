FROM node:14
WORKDIR /app
COPY dist/ /app/
EXPOSE 80
CMD ["yarn", "start"]
