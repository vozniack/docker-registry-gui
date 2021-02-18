# Stage 1 - build registry gui

FROM node:latest As builder

WORKDIR /usr/src/app

COPY package.json package-lock.json ./
COPY .. .

# Stage 2 - run registry gui

FROM nginx:latest

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /usr/src/app/dist/docker-registry-gui/ /usr/share/nginx/html

EXPOSE 80
