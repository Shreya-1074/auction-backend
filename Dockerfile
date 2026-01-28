FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Render uses port 10000 internally
ENV PORT=10000

EXPOSE 10000

CMD ["npm", "start"]
