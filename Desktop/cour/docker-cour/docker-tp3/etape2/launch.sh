#!/bin/bash
docker stop serveur site bdd 2>/dev/null
docker rm serveur site bdd 2>/dev/null
docker network create simple-net 2>/dev/null
docker build -t php-sql .
docker run -d --name serveur --network simple-net -v $(pwd):/app php-sql
docker run -d --name bdd --network simple-net -v $(pwd)/mysql:/docker-entrypoint-initdb.d -e MARIADB_RANDOM_ROOT_PASSWORD=yes mariadb
docker run -d --name site --network simple-net -p 8080:80 -v $(pwd):/app -v $(pwd)/conf.conf:/etc/nginx/conf.d/default.conf nginx

