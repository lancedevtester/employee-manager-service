FROM node:14

WORKDIR /app

# copy dependencies and install
COPY package.json .
RUN npm install

# copy everything else
COPY . .

CMD npm start