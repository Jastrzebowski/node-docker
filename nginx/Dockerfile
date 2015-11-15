FROM nginx

RUN mkdir /etc/ssl/nginx
RUN cd /etc/ssl/nginx \
    && openssl req -new -newkey rsa:4096 -days 36500 -nodes -x509 \ 
    -subj "/C=PL/ST=Masovian/L=Warsaw/O=Karol\ Jastrzebowski/CN=node-docker.192.168.99.100.xip.io" \ 
    -keyout server.key -out server.pem

COPY nginx.conf /etc/nginx/nginx.conf
