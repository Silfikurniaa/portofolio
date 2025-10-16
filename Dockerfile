# Gunakan image dasar Nginx
FROM nginx:alpine

# Salin file web ke folder Nginx default
COPY . /usr/share/nginx/html

# Port default
EXPOSE 80

# Jalankan Nginx
CMD ["nginx", "-g", "daemon off;"]
