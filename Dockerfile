FROM node:18-alpine AS builder
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
ENV NODE_ENV=production
ENV TZ=Europe/Moscow

COPY package*.json ./
RUN npm ci --include=dev
COPY . .

RUN npm run build

FROM nginx:mainline-alpine
RUN apk update && apk add --no-cache bash nano
COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
