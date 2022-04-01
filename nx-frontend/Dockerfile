FROM node:lts-alpine


# définit le dossier 'app' comme dossier de travail
WORKDIR /app

<<<<<<< HEAD
ENV PATH /app/node_modules/.bin:$PATH

RUN npm config set timeout 6000000

RUN npm install -g npm
=======

# ENV PATH /app/node_modules/.bin:$PATH

RUN npm i @vue/cli-service
>>>>>>> c1013d96b947cb3f29675133bda88415a8cdfdde

# copie 'package.json' et 'package-lock.json' (si disponible)
COPY package.json ./

RUN npm update


# installe les dépendances du projet
RUN npm install
RUN mkdir -p node_modules/.cache && chmod -R 777 node_modules/.cache


# copie les fichiers et dossiers du projet dans le dossier de travail (ici le dossier 'app')
COPY . .

# ENTRYPOINT [ "executable" ]
CMD ["npm", "run", "serve"]