# Stage 2: Serve the application with Nginx
FROM nginx:stable-perl

# Copy the built Next.js application from the builder stage
COPY out /usr/share/nginx/html
# Copy sll to nginx
COPY ssl /etc/nginx/ssl

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80 443

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]