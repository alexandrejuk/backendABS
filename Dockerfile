FROM node:alpine
WORKDIR /server/backend
COPY ./package.json ./package.json
ENV PORT=3000
ENV NODE_ENV=production
RUN npm install
COPY ./ ./
EXPOSE $PORT
CMD [ "npm", "start" ]