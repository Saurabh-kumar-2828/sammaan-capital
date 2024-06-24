FROM node:20
WORKDIR /sammann-capital-website
COPY package*.json ./
RUN npm ci
COPY build ./build
COPY public ./public
#COPY server.js ./
EXPOSE 3000
CMD ["npm", "start"]
