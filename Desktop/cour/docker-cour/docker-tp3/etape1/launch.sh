#!/bin/bash
docker stop http script 2>/dev/null
docker rm http script 2>/dev/null
docker network create tp3-net 2>/dev/null
docker run -d --name script --network tp3-net -v $(pwd):/app php:8.2-fpm
docker run -d --name http --network tp3-net -p 8080:80 -v $(pwd):/app -v $(pwd)/default.conf:/etc/nginx/conf.d/default.conf nginx
echo "http://localhost:8080"
