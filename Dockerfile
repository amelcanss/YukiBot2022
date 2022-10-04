FROM node:lts-buster

RUN apt-get update && \
  apt-get install -y \
  ffmpeg \
  imagemagick \
  webp && \
  apt-get upgrade -y && \
  rm -rf /var/lib/apt/lists/*

COPY package.json .

RUN npm install && npm update && npm i pm2 -g && pm2 install ffmpeg && pm2 start main.js && pm2 save && pm2 logs

COPY . .

EXPOSE 5000

CMD ["node", "index.js"]

