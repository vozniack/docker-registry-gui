:: Stop and delete running configuration

docker stop docker-registry-gui
docker rm docker-registry-gui
docker image rm docker-registry-gui:0.5

:: Build image

docker build -t docker-registry-gui:0.5 .

:: Run image

docker run --name docker-registry-gui -d -p 4200:4200 -i docker-registry-gui:0.5
