all: build push
build:
	docker build -t izanagi1995/mikrodock-example-backend .
push:
	docker push izanagi1995/mikrodock-example-backend