FROM node:22-alpine
WORKDIR /tool
COPY cli.js odds.js ./
USER node
ENTRYPOINT ["node","cli.js"]
