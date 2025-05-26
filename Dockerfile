# Estágio de build
FROM node:18-alpine as build

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos de definição de dependências
COPY package*.json ./


# Instala as dependências de produção e desenvolvimento
RUN npm ci

# Copia o restante dos arquivos do projeto
COPY . .

# Constrói a aplicação para produção
RUN npm run build

# Estágio de produção
FROM nginx:stable-alpine

# Copia os arquivos de build para o diretório do nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Copia a configuração personalizada do nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expõe a porta 80
EXPOSE 80

# Inicia o nginx
CMD ["nginx", "-g", "daemon off;"]
