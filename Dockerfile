# Compile angular frontend

FROM node:latest as build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

# Serve app with nginx server

FROM nginx:latest
COPY nginx.conf /etc/nginx/nginx.conf

RUN rm -rf /usr/share/nginx/html/*

COPY --from=build /app/dist/docker-registry-gui /usr/share/nginx/html
EXPOSE 80
