FROM nginx

COPY nginx.conf /etc/nginx/nginx.conf

RUN apt-get update -yq && \
apt-get install certbot -yq && \
apt-get install python3-certbot-nginx -yq && \
mkdir -p /etc/letsencrypt/

CMD ["nginx", "-g", "daemon off;"]