#
#	NODE BUILDER
#

FROM	node:16.13.1-alpine as builder

WORKDIR /app
ENV		NODE_ENV build
ENV		PATH /app/nodes_modules/.bin:$PATH

RUN		npm install -g npm@8.3.0 --silent

COPY	package.json ./
RUN		npm install --legacy-peer-deps

COPY	. .
RUN		npm run build

#
#	NGINX WORKER CONTAINER
#

FROM	alpine:3.13 as worker

RUN		apk update

RUN		apk add --no-cache --quiet nginx
RUN		apk add --no-cache --quiet openssl

RUN		mkdir -p /var/run/nginx

COPY	--from=builder /app/build /usr/share/nginx/html

COPY	docker/config/nginx.conf /etc/nginx/conf.d/default.conf

RUN		ln -sf /dev/stdout /var/log/nginx/access.log && \
		ln -sf /dev/stderr /var/log/nginx/error.log

STOPSIGNAL SIGTERM

CMD [ "nginx", "-g", "daemon off;" ]