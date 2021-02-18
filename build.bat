:: Stop and delete running configuration

docker stop docker-registry-gui
docker rm docker-registry-gui
docker image rm docker-registry-gui:0.9

:: Build image

docker build -t docker-registry-gui:0.9 .
