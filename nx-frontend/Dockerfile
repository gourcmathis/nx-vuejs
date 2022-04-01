FROM node:lts-alpine


# définit le dossier 'app' comme dossier de travail
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

RUN npm config set timeout 6000000

RUN npm install -g npm

# copie 'package.json' et 'package-lock.json' (si disponible)
COPY package.json ./

RUN npm update

# installe les dépendances du projet
RUN npm install

# copie les fichiers et dossiers du projet dans le dossier de travail (ici le dossier 'app')
COPY . .

# ENTRYPOINT [ "executable" ]
CMD ["npm", "run", "serve"]