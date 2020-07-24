FROM node:10-alpine

# Crear Directorio de la APP
WORKDIR /usr/src/app

# Instalación de dependencias
COPY package*.json ./
RUN npm install

# Testing
# RUN npm test

# Copia archivos
COPY . .
# Build para producción
RUN npm run-script build

# Borrado de archivos innecesarios
RUN rm -rf README.md generate-react-cli.json package-lock.json public src yarn.lock

EXPOSE 3000

# Inicia servidor de la APP
CMD [ "node", "server.js" ]
