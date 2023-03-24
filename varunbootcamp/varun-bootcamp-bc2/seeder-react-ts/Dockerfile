FROM node:16
ENV NODE_ENV=main

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]

RUN npm install --legacy-peer-dep

COPY . .

EXPOSE 3042

CMD ["npm","start"]
