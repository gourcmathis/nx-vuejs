FROM node:lts-alpine

# définit le dossier 'app' comme dossier de travail
WORKDIR /app


# ENV PATH /app/node_modules/.bin:$PATH

RUN npm i @vue/cli-service

# copie 'package.json' et 'package-lock.json' (si disponible)
COPY package*.json ./


# installe les dépendances du projet
RUN npm install
RUN mkdir -p node_modules/.cache && chmod -R 777 node_modules/.cache


# copie les fichiers et dossiers du projet dans le dossier de travail (par exemple : le dossier 'app')
COPY . .

CMD ["npm", "run", "serve"]