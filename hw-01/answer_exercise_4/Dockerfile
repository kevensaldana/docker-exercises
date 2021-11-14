FROM node:17.1.0-alpine3.14
RUN apk add dumb-init
ENV NODE_ENV production
WORKDIR /usr/src/app
COPY --chown=node:node package*.json ./
RUN npm ci --only=production && npm cache clean --force
COPY --chown=node:node . .
HEALTHCHECK --interval=45s --timeout=5s --start-period=15s --retries=2 CMD node healthcheck.js
USER node
ENTRYPOINT ["dumb-init","node","app.js"]

#docker build -t image-4  -f Dockerfile .
#docker run --rm -p 8080:3000 --name container-4 image-4
#watch docker ps
#docker inspect --format="{{json .State.Health}}" container-4 | python -m json.tool

