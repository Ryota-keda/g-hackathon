# Stage 1: Build the React app
FROM node:14 as build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

RUN npm install @mui/material @emotion/react @emotion/styled @mui/icons-material   

COPY . .

RUN npm run build

# Stage 2: Serve the React app with Nginx
FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

# Copy custom nginx configuration if any
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]
