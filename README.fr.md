# Midjourney API : Tarifs, Documentation Officielle, Workflows et Guide d'Intégration

<p align="center">
  <a href="./README.md">English</a> · <a href="./README.es.md">Español</a> · <a href="./README.pt.md">Português</a> · <a href="./README.ja.md">日本語</a> · <a href="./README.ko.md">한국어</a> · <a href="./README.de.md">Deutsch</a> · <a href="./README.fr.md">Français</a> · <a href="./README.tr.md">Türkçe</a> · <a href="./README.zh-TW.md">繁體中文</a> · <a href="./README.zh-CN.md">简体中文</a> · <a href="./README.ru.md">Русский</a>
</p>

<p align="center">
  <a href="https://evolink.ai/midjourney-v7?utm_source=github&utm_medium=banner&utm_campaign=midjourney-api">
    <img src="./assets/banner.jpg" alt="Midjourney API - Tarifs, Documentation Officielle et Guide d'Intégration" width="100%" />
  </a>
</p>

<p align="center">
  Comparez les tarifs de Midjourney API, consultez la documentation officielle du workflow Midjourney V7 et intégrez la génération et l'édition d'images via une API unifiée.
</p>

## Démarrage Rapide

Utilisez la génération d'images Midjourney V7 en un seul appel API.

```bash
curl --request POST \
  --url https://api.evolink.ai/v1/images/generations \
  --header 'Authorization: Bearer YOUR_API_KEY' \
  --header 'Content-Type: application/json' \
  --data '{
    "model": "mj-v7",
    "prompt": "A cinematic shot of a Maine Coon cat on a neon-lit balcony --ar 16:9 --s 500",
    "model_params": {
      "speed": "fast"
    }
  }'
```

<p align="left">
  <a href="https://evolink.ai/midjourney-v7?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api">Voir les tarifs Midjourney API</a> ·
  <a href="https://evolink.ai/signup?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api">Obtenir une clé API</a> ·
  <a href="https://docs.evolink.ai/en/api-manual/image-series/midjourney/mj-v7-image-generate?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api">Lire la documentation API</a>
</p>

## Qu'est-ce que Midjourney API ?

Midjourney API sur EvoLink.ai donne aux développeurs accès aux workflows de génération et d'édition d'images Midjourney V7 via une clé API unifiée. D'après les références officielles fournies pour ce dépôt, les opérations actuellement couvertes comprennent : la génération d'images, l'image-vers-image, les workflows de référence de style et d'objet, upscale, inpaint, outpaint, pan, remix, retexture, canvas edit, enhance, remove background et upload paint.

Ce dépôt est conçu pour les développeurs qui souhaitent :

- comprendre les tarifs et le comportement de facturation de Midjourney API
- consulter la couverture officielle des workflows Midjourney V7 en un seul endroit
- choisir la bonne opération Midjourney pour une tâche
- intégrer la génération et l'édition Midjourney dans des applications de production

## Pourquoi Utiliser EvoLink pour Midjourney API ?

- une clé API pour les workflows de génération et d'édition Midjourney V7
- tarification transparente par requête pour la génération en mode draft, fast et turbo
- flux de tâches asynchrone conçu pour l'intégration en production
- prise en charge des paramètres de prompt natifs Midjourney V7 et des workflows de référence
- prise en charge des callbacks HTTPS pour les workflows de complétion de tâches
- positionnement de 99,9% de disponibilité sur la page officielle du produit

## Tarifs de Midjourney API

Les tarifs ci-dessous suivent la référence produit Midjourney V7 fournie pour ce dépôt.

| Modèle | Mode | Vitesse | Prix | Notes |
|---|---|---|---:|---|
| `mj-v7` | génération d'images | draft | 0,040 $ / requête | environ 2,7 crédits, 4 images par requête |
| `mj-v7` | génération d'images | fast | 0,079 $ / requête | mode par défaut, environ 5,4 crédits |
| `mj-v7` | génération d'images | turbo | 0,159 $ / requête | mode prioritaire, environ 10,8 crédits |

> Chaque requête produit 4 images. La modération de contenu de Midjourney peut filtrer certaines sorties, donc le résultat retourné peut contenir de 1 à 4 images. La facturation est par requête, pas par image.

## Workflows Midjourney V7 Pris en Charge

| Workflow | Modèle | Résumé |
|---|---|---|
| Génération d'images | `mj-v7` | texte-vers-image et image-vers-image avec la syntaxe de prompt native Midjourney V7 |
| Upscale | `mj-v7-upscale` | agrandir une image sélectionnée d'une tâche terminée |
| Inpaint | `mj-v7-inpaint` | modifier une zone masquée dans une image sélectionnée |
| Outpaint | `mj-v7-outpaint` | étendre au-delà de la limite d'image originale |
| Pan | `mj-v7-pan` | étendre la composition dans une direction |
| Remix | `mj-v7-remix` | réinterpréter une image existante avec un nouveau prompt |
| Retexture | `mj-v7-retexture` | changer la texture ou le style en préservant la structure |
| Canvas Edit | `mj-v7-edit` | repositionner l'image sur le canevas et remplir les zones vides |
| Enhance | `mj-v7-enhance` | améliorer une image générée sélectionnée |
| Remove Background | `mj-v7-remove-bg` | générer un découpage transparent du sujet à partir d'une image d'entrée |
| Upload Paint | `mj-v7-upload-paint` | flux d'édition avancé utilisant une image uploadée, un masque et des paramètres de canevas |

## Documents Officiels de l'API

Les références détaillées des workflows se trouvent dans des documents séparés afin que le README reste centré sur la navigation, les tarifs et les conseils d'intégration. Chaque page ci-dessous est alignée sur les documents de référence officiels fournis pour ce dépôt.

- [Génération d'images](./docs/official-api/image-generation.md)
- [Image-vers-image et référence](./docs/official-api/image-to-image-and-reference.md)
- [Paramètres de prompt](./docs/prompt-parameters.md)
- [Upscale](./docs/official-api/upscale.md)
- [Inpaint](./docs/official-api/inpaint.md)
- [Outpaint](./docs/official-api/outpaint.md)
- [Pan](./docs/official-api/pan.md)
- [Remix](./docs/official-api/remix.md)
- [Retexture](./docs/official-api/retexture.md)
- [Canvas Edit](./docs/official-api/canvas-edit.md)
- [Enhance](./docs/official-api/enhance.md)
- [Remove Background](./docs/official-api/remove-background.md)
- [Upload Paint](./docs/official-api/upload-paint.md)

## Aperçu des Paramètres de Prompt

Midjourney V7 prend en charge la syntaxe de paramètres natifs directement dans le champ `prompt`.

| Paramètre | Exemple | Objectif |
|---|---|---|
| `--ar` | `--ar 16:9` | rapport d'aspect |
| `--s` | `--s 500` | intensité de stylisation |
| `--c` / `--chaos` | `--c 30` | diversité des résultats |
| `--q` | `--q 2` | niveau de qualité |
| `--seed` | `--seed 12345` | exploration reproductible |
| `--no` | `--no text, watermark` | exclure des éléments |
| `--iw` | `--iw 1.5` | poids du prompt image |
| `--sref` | `--sref https://...` | référence de style |
| `--oref` | `--oref https://...` | référence d'objet |
| `--raw` | `--raw` | réduire l'embellissement |
| `--tile` | `--tile` | génération de motifs continus |
| `--w` | `--w 500` | étrangeté |
| `--exp` | `--exp 25` | esthétique expérimentale |

Les règles détaillées des paramètres se trouvent dans [`docs/prompt-parameters.md`](./docs/prompt-parameters.md).

## Workflow d'Intégration

1. obtenir une clé API sur EvoLink.ai
2. créer une tâche de génération ou d'édition avec `POST /v1/images/generations`
3. stocker l'ID de tâche retourné
4. interroger `GET /v1/tasks/{task_id}` jusqu'à la completion de la tâche
5. télécharger et sauvegarder rapidement les images résultantes car les liens générés sont temporaires

## Exemples de Code

- [cURL : génération de base](./examples/curl/generate-image.sh)
- [cURL : image-vers-image](./examples/curl/image-to-image.sh)
- [cURL : upscale](./examples/curl/upscale.sh)
- [cURL : inpaint](./examples/curl/inpaint.sh)
- [JavaScript : génération de base](./examples/javascript/basic.mjs)
- [JavaScript : image-vers-image](./examples/javascript/image-to-image.mjs)
- [JavaScript : upscale](./examples/javascript/upscale.mjs)
- [JavaScript : inpaint](./examples/javascript/inpaint.mjs)

## Comparaison des Workflows

| Si vous avez besoin de... | Workflow recommandé | Pourquoi |
|---|---|---|
| génération initiale | `mj-v7` | génération d'images V7 native |
| utiliser une ou plusieurs images de référence dans le prompt | `mj-v7` | prend en charge les URL d'images au début du prompt |
| modifier uniquement une zone locale sélectionnée | `mj-v7-inpaint` | édition basée sur masque |
| étendre la composition vers l'extérieur | `mj-v7-outpaint` | cadrage plus large au-delà de l'image originale |
| étendre à gauche, droite, haut ou bas | `mj-v7-pan` | extension directionnelle |
| réinterpréter un résultat avec un nouveau prompt | `mj-v7-remix` | variation basée sur prompt depuis une tâche existante |
| préserver la mise en page mais changer le matériau ou la finition | `mj-v7-retexture` | transformation de style et de texture depuis une image d'entrée |
| découper le sujet d'une image | `mj-v7-remove-bg` | aucun prompt requis |
| repositionner une image sur un canevas plus grand | `mj-v7-edit` | expansion de canevas avec contrôle de placement |

## Notes de Production

- tous les endpoints nécessitent une authentification par token Bearer
- les workflows de génération et d'édition Midjourney sont asynchrones
- les callbacks doivent utiliser HTTPS et ne peuvent pas cibler des adresses IP privées
- le délai d'attente des callbacks est de 10 secondes avec jusqu'à 3 tentatives
- les liens d'images générées sont valables 24 heures, sauvegardez-les rapidement
- `--v`, `--version` et `--niji` ne sont pas pris en charge dans les requêtes V7 ici
- `--fast`, `--draft` et `--turbo` ne doivent pas être écrits dans le prompt, utilisez `model_params.speed`
- les workflows d'édition nécessitent généralement un ID de tâche terminée et le numéro d'image sélectionné
- remove background n'utilise pas de paramètres de prompt ou de vitesse
- retexture et remove background acceptent directement les URL d'images d'entrée au lieu de dépendre d'une tâche source

## FAQ

### Comment Midjourney API est-elle facturée ?
La génération Midjourney V7 est facturée par requête, pas par image. Une requête cible 4 sorties, mais le filtrage de modération peut réduire le nombre d'images retournées.

### Comment faire de l'image-vers-image ?
Placez une ou plusieurs URL d'images au début du `prompt`, puis ajoutez votre description textuelle et les paramètres Midjourney.

### Pourquoi les endpoints d'édition ont-ils besoin d'un ID de tâche ?
Les opérations comme upscale, inpaint, outpaint, pan, enhance et remix travaillent sur une image sélectionnée d'une tâche terminée, donc elles nécessitent la référence de la tâche originale.

### Puis-je utiliser `--turbo` ou `--draft` dans le prompt ?
Non. La vitesse est contrôlée via `model_params.speed`.

## Liens Connexes

- [Page Produit Midjourney V7](https://evolink.ai/midjourney-v7?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api)
- [Obtenir une clé API](https://evolink.ai/signup?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api)
- [Documentation Midjourney API](https://docs.evolink.ai/en/api-manual/image-series/midjourney/mj-v7-image-generate?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api)

## Note sur le Dépôt

Ce dépôt est un hub de documentation et d'exemples pour l'utilisation de Midjourney API sur EvoLink.ai. Les matériaux officiels détaillés des workflows sont organisés sous `docs/official-api/`, tandis que `mjv7参考/` reste comme matériel de référence local et est exclu des uploads via `.gitignore`.
