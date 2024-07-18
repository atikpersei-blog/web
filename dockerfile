FROM node:18.20.2
WORKDIR /app
COPY . .
RUN npm i
CMD [  "sleep", "infinity" ]
EXPOSE 3000