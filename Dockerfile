# Establecer la imagen base
FROM node:20.3.0

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Instalar las dependencias del proyecto
COPY package*.json /
RUN npm install

# Instalar la CLI de Nest.js de forma global
RUN npm install -g @nestjs/cli

# Copiar los archivos de la aplicación
COPY . .

# Compilar la aplicación
RUN npm run build

# Copiar los archivos de la aplicación
COPY .  .

# Comando para ejecutar la aplicación
CMD [ "node", "dist/main" ]