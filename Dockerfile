# Usa la imagen de Node.js v14.21.3 como base
FROM node:18.8.0

# Establece el directorio de trabajo en la aplicación
WORKDIR /usr/src/app

# Copia el archivo package.json y package-lock.json para instalar dependencias
COPY package*.json ./

# Instala las dependencias
RUN rm -rf node_modules
RUN npm install

# Copia todos los archivos al directorio de trabajo
COPY . .

# Expone el puerto en el que va a ejecutarse la aplicación
EXPOSE 5000 

# Comando para ejecutar la aplicación
CMD ["npm", "run", "dev"]
