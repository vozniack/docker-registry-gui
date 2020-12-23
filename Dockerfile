# Stage 0: compile angular frontend

FROM node:latest as build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

# Stage 1: serve app with nginx server

FROM nginx:latest
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/docker-registry-gui /usr/share/nginx/html
EXPOSE 80
