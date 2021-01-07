:: Stop and delete running configuration

docker stop docker-registry-gui
docker rm docker-registry-gui
docker image rm docker-registry-gui:0.2

:: Build image

docker build -t docker-registry-gui:0.2 .

:: Run compose

docker run -d --name docker-registry-gui -p 4200:80 -i docker-registry-gui:0.2
