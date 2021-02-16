:: Stop and delete running configuration

docker stop docker-registry-gui
docker rm docker-registry-gui
docker image rm docker-registry-gui:0.8

:: Build image

docker build -t docker-registry-gui:0.8 .

:: Run image

docker run --name docker-registry-gui -p 80:80 -d -i docker-registry-gui:0.8
