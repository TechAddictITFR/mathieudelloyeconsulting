# Mathieu Delloye Consulting

Site vitrine de l'offre de conseil en IA : diagnostic en ligne, formations, automatisations sur mesure et pilotage de projet.
En ligne : https://techaddictitfr.github.io/mathieudelloyeconsulting/

## Contenu

| Fichier | Rôle |
|---|---|
| `index.html` | page unique, textes en français |
| `js/i18n.js` | textes en anglais et bascule FR / EN |
| `js/config.js` | lien de rendez-vous, courriel, LinkedIn : **seul fichier à modifier pour ces informations** |
| `data/diagnostic.json` | questions, axes et parcours du diagnostic |
| `data/indicateurs.json` | métriques de formation et d'automatisation (fichier généré, ne pas modifier à la main) |
| `frames/` | images de la vidéo de scan, lues au défilement |

Le site n'utilise ni cookie, ni mesure d'audience, ni script externe. Les réponses au diagnostic restent dans le navigateur du visiteur.

## Mettre à jour les métriques

Depuis le projet de travail `My3dWebsite` :

```bash
python3 -I tools/exporter_indicateurs_site.py ~/Documents/mathieudelloyeconsulting
```

Puis relire `data/indicateurs.json` et ouvrir une pull request. Les clients y sont désignés par leur secteur, jamais par leur nom.

## Voir le site en local

```bash
node ~/Documents/My3dWebsite/serve.mjs   # depuis ce dossier, puis http://localhost:3000
```
