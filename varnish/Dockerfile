FROM debian:jessie

# Installation on Debian from https://www.varnish-cache.org/installation/debian
RUN apt-get update && \
  apt-get install -y \
  curl \
  apt-transport-https

RUN curl https://repo.varnish-cache.org/GPG-key.txt | apt-key add -

RUN echo "deb https://repo.varnish-cache.org/debian/ jessie varnish-4.1" >> \
  /etc/apt/sources.list.d/varnish-cache.list

RUN apt-get update && \
  apt-get install -y --no-install-recommends varnish

EXPOSE 6081
EXPOSE 6082

COPY server.vcl /etc/varnish/server.vcl

CMD ["varnishd", "-F", "-n", "foo", "-a", ":6081", "-f", "/etc/varnish/server.vcl"]
