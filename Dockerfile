FROM node:alpine
WORKDIR /server/backend
COPY ./package.json ./package.json
ENV PORT=3000
RUN npm install
COPY ./ ./
EXPOSE $PORT
CMD [ "npm", "start" ]