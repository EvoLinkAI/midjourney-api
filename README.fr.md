# Midjourney API : documentation, workflows et exemples d’intégration V8.1 et V7

<p align="center">
  <a href="./README.md">English</a> · <a href="./README.es.md">Español</a> · <a href="./README.pt.md">Português</a> · <a href="./README.ja.md">日本語</a> · <a href="./README.ko.md">한국어</a> · <a href="./README.de.md">Deutsch</a> · <a href="./README.fr.md">Français</a> · <a href="./README.tr.md">Türkçe</a> · <a href="./README.zh-TW.md">繁體中文</a> · <a href="./README.zh-CN.md">简体中文</a> · <a href="./README.ru.md">Русский</a>
</p>

<p align="center">
  <a href="https://docs.evolink.ai/en/api-manual/image-series/midjourney/mj-v8-1-image-generate?utm_source=github&utm_medium=banner&utm_campaign=midjourney-api">
    <img src="./assets/banner.jpg" alt="Midjourney API - documentation officielle et exemples d’intégration V8.1 et V7" width="100%" />
  </a>
</p>

<p align="center">
  Intégrez les workflows récents de génération d’images Midjourney V8.1 via EvoLink tout en conservant la documentation V7 pour les intégrations existantes.
</p>

<p align="left">
  <a href="https://docs.evolink.ai/en/api-manual/image-series/midjourney/mj-v8-1-image-generate?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api">Lire la documentation V8.1</a> ·
  <a href="https://docs.evolink.ai/en/api-manual/image-series/midjourney/midjourney-v8-1-prompt-guide?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api">Lire le guide de prompts V8.1</a> ·
  <a href="https://evolink.ai/signup?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api">Obtenir une clé API</a>
</p>

## Démarrage rapide EvoLink

Utilisez la génération d’images Midjourney V8.1 avec un seul appel API.

```bash
export EVOLINK_API_KEY="your_key_here"

curl --request POST \
  --url https://api.evolink.ai/v1/images/generations \
  --header "Authorization: Bearer ${EVOLINK_API_KEY}" \
  --header 'Content-Type: application/json' \
  --data '{
    "model": "mj-v8.1",
    "prompt": "A cinematic shot of a Maine Coon cat on a neon-lit balcony --ar 16:9 --s 500",
    "quality": "standard",
    "model_params": {
      "speed": "fast"
    }
  }'
```

## Flux complet de première exécution

La génération et l’édition Midjourney sont asynchrones. En production, créez une tâche, stockez son ID, interrogez son état ou recevez un callback, puis sauvegardez les URL finales avant leur expiration.

```bash
export EVOLINK_API_KEY="your_key_here"
bash examples/curl/complete-flow.sh
```

Exemples complets:

- [cURL complete flow](./examples/curl/complete-flow.sh)
- [Python complete flow](./examples/python/complete_flow.py)
- [JavaScript complete flow](./examples/javascript/complete-flow.mjs)
- [cURL V8.1 generation](./examples/curl/generate-image-v8-1.sh)
- [JavaScript V8.1 generation](./examples/javascript/basic-v8-1.mjs)

## Qu’est-ce que Midjourney API ?

Midjourney API sur EvoLink.ai donne aux développeurs accès aux workflows Midjourney de génération et d’édition d’images avec une seule clé API. Ce dépôt couvre désormais la famille Midjourney V8.1 la plus récente tout en conservant les références V7 pour les intégrations qui dépendent encore des identifiants de modèles V7.

Ce dépôt est conçu pour les développeurs qui veulent :

- intégrer Midjourney V8.1 dans des applications de production
- comprendre la vitesse, la qualité, les paramètres de prompt et les workflows de V8.1
- garder les exemples V7 disponibles pendant la migration
- choisir la bonne opération pour génération, variation, remix, édition, retexture ou suppression d’arrière-plan

## Pourquoi utiliser EvoLink pour Midjourney API

- une seule clé API pour Midjourney V8.1 et les exemples V7 conservés
- flux de tâches asynchrones adapté à la production
- sortie HD native V8.1 via le champ racine `quality`
- contrôle de vitesse V8.1 via `model_params.speed`
- prise en charge des paramètres de prompt natifs et des workflows de référence Midjourney
- callbacks HTTPS pour les workflows de fin de tâche

## Notes de tarification Midjourney V8.1

La documentation officielle V8.1 décrit la facturation avec des multiplicateurs de vitesse et de qualité. Ce dépôt n’invente pas de prix fixes en dollars pour V8.1.

| Réglage | Valeurs | Note de facturation |
|---|---|---|
| `model_params.speed` | `draft`, `fast`, `turbo` | `draft` / `fast` = 1x; `turbo` ≈ 2x |
| `quality` | `standard`, `hd` | `standard` = 1x; `hd` = 1.5x |
| Coût combiné | speed x quality | `turbo` + `hd` ≈ 3x |

> V8.1 `draft` renvoie 24 croquis légers 0.5K en une exécution et ne peut pas être combiné avec `quality: "hd"`. Les modes fast et turbo renvoient 4 images par génération.

## Tarifs conservés de génération Midjourney V7

| Modèle | Mode | Vitesse | Prix | Notes |
|---|---|---|---:|---|
| `mj-v7` | génération d’images | draft | $0.040 / requête | 2,7 crédits; 4 images par requête |
| `mj-v7` | génération d’images | fast | $0.079 / requête | mode par défaut; 5,4 crédits |
| `mj-v7` | génération d’images | turbo | $0.159 / requête | mode prioritaire; 10,8 crédits |

## Workflows Midjourney V8.1 récents

| Workflow | Modèle | Résumé |
|---|---|---|
| Génération d’images | `mj-v8.1` | texte-vers-image et image-vers-image avec syntaxe V8.1, `quality` et `speed` |
| Variation | `mj-v8.1-variation` | créer des variantes subtle ou strong depuis une tâche V8.1 terminée |
| Remix | `mj-v8.1-remix` | réinterpréter un résultat terminé avec un nouveau prompt obligatoire |
| Retexture | `mj-v8.1-retexture` | changer texture ou style directement depuis une URL d’image |
| Upload Paint | `mj-v8.1-upload-paint` | édition avancée du canevas avec image uploadée, masque et position |
| Canvas Edit | `mj-v8.1-edit` | repositionner une image de tâche sur le canevas et remplir les zones vides |
| Suppression d’arrière-plan | `mj-v8.1-remove-bg` | supprimer l’arrière-plan depuis une URL d’image sans prompt ni speed |

## Workflows Midjourney V7 conservés

| Workflow | Modèle | Résumé |
|---|---|---|
| Génération d’images | `mj-v7` | V7 texte-vers-image / image-vers-image |
| Upscale | `mj-v7-upscale` | agrandir une image sélectionnée |
| Inpaint | `mj-v7-inpaint` | modifier une zone masquée |
| Outpaint | `mj-v7-outpaint` | étendre au-delà de la limite de l’image |
| Pan | `mj-v7-pan` | étendre dans une direction |
| Remix | `mj-v7-remix` | réinterpréter avec un nouveau prompt |
| Retexture | `mj-v7-retexture` | changer texture ou style en conservant la structure |
| Canvas Edit | `mj-v7-edit` | repositionner l’image et remplir les zones vides |
| Enhance | `mj-v7-enhance` | améliorer un résultat sélectionné |
| Suppression d’arrière-plan | `mj-v7-remove-bg` | découpe transparente du sujet |
| Upload Paint | `mj-v7-upload-paint` | édition avancée avec upload, masque et canevas |

## Documents officiels de l’API

Les références détaillées sont séparées afin que le README reste concentré sur la navigation, les notes de tarification et l’intégration.

Documentation V8.1 récente:

- [V8.1 Génération d’images](./docs/official-api/v8-1-image-generation.md)
- [V8.1 Variation](./docs/official-api/v8-1-variation.md)
- [V8.1 Remix](./docs/official-api/v8-1-remix.md)
- [V8.1 Retexture](./docs/official-api/v8-1-retexture.md)
- [V8.1 Upload Paint](./docs/official-api/v8-1-upload-paint.md)
- [V8.1 Canvas Edit](./docs/official-api/v8-1-canvas-edit.md)
- [V8.1 Suppression d’arrière-plan](./docs/official-api/v8-1-remove-background.md)
- [Paramètres de prompt](./docs/prompt-parameters.md)

Documentation V7 conservée:

- [V7 Génération d’images](./docs/official-api/image-generation.md)
- [V7 image-vers-image et référence](./docs/official-api/image-to-image-and-reference.md)
- [V7 Upscale](./docs/official-api/upscale.md)
- [V7 Inpaint](./docs/official-api/inpaint.md)
- [V7 Outpaint](./docs/official-api/outpaint.md)
- [V7 Pan](./docs/official-api/pan.md)
- [V7 Remix](./docs/official-api/remix.md)
- [V7 Retexture](./docs/official-api/retexture.md)
- [V7 Canvas Edit](./docs/official-api/canvas-edit.md)
- [V7 Enhance](./docs/official-api/enhance.md)
- [V7 Suppression d’arrière-plan](./docs/official-api/remove-background.md)
- [V7 Upload Paint](./docs/official-api/upload-paint.md)

## Aperçu des paramètres de prompt

Midjourney V8.1 prend en charge la syntaxe native dans `prompt`, mais la vitesse et la qualité de sortie sont des champs API.

| Contrôle | Où le définir | Valeurs |
|---|---|---|
| Vitesse | `model_params.speed` | `draft`, `fast`, `turbo` |
| Qualité de sortie | `quality` au niveau racine | `standard`, `hd` |
| Paramètres de prompt | `prompt` | `--ar`, `--c`, `--seed`, `--s`, `--exp`, `--raw`, `--iw`, `--sref`, `--sw`, `--oref`, `--ow` |

V8.1 n’expose pas `--q`, `--no`, `--weird`, `--tile`, `--sv`, `--stop`, `--cref`, `--cw`, `--relax`, `--repeat`, `--p`, les permutations, les flags public/stealth, `--niji` ni le multi-prompt `::` sur cette route.

## Flux d’intégration

1. clé API EvoLink.ai
2. `POST /v1/images/generations`
3. sauvegarder l’ID de tâche
4. interroger `GET /v1/tasks/{task_id}` ou utiliser un callback
5. sauvegarder les URL finales avant expiration

## Exemples de code

Exemples V8.1 récents:

- [cURL: V8.1 generation](./examples/curl/generate-image-v8-1.sh)
- [JavaScript: V8.1 generation](./examples/javascript/basic-v8-1.mjs)

Exemples V7 conservés:

- [cURL: flux complet de première exécution](./examples/curl/complete-flow.sh)
- [cURL: génération de base](./examples/curl/generate-image.sh)
- [cURL: image-vers-image](./examples/curl/image-to-image.sh)
- [cURL: upscale](./examples/curl/upscale.sh)
- [cURL: inpaint](./examples/curl/inpaint.sh)
- [Python: flux complet de première exécution](./examples/python/complete_flow.py)
- [JavaScript: flux complet de première exécution](./examples/javascript/complete-flow.mjs)
- [JavaScript: génération de base](./examples/javascript/basic.mjs)
- [JavaScript: image-vers-image](./examples/javascript/image-to-image.mjs)
- [JavaScript: upscale](./examples/javascript/upscale.mjs)
- [JavaScript: inpaint](./examples/javascript/inpaint.mjs)

## Comparaison des workflows

| Si vous avez besoin de... | Workflow recommandé | Pourquoi |
|---|---|---|
| génération la plus récente | `mj-v8.1` | modèle V8.1 le plus récent |
| croquis rapides | `mj-v8.1` + `speed: "draft"` | 24 croquis légers 0.5K |
| sortie HD | `mj-v8.1` + `quality: "hd"` | native sortie HD |
| variantes | `mj-v8.1-variation` | subtle / strong variantes |
| réinterprétation par prompt | `mj-v8.1-remix` | nouveau prompt avec structure source |
| édition du canevas | `mj-v8.1-edit` | repositionner et remplir les zones vides |
| édition d’image uploadée | `mj-v8.1-upload-paint` | workflow masque et canevas |
| suppression d’arrière-plan | `mj-v8.1-remove-bg` | aucun champ prompt ni speed |
| flux V7 existants | V7 模型 | compatibilité conservée |

## Notes de production

- authentification Bearer token
- tâches asynchrones
- callback HTTPS uniquement; les URL vers IP privées sont interdites
- timeout callback: 10 secondes, jusqu’à 3 tentatives
- selon la documentation officielle, les liens d’image V8.1 sont valides 30 jours
- `model_params.speed` contrôle la vitesse
- `quality` au niveau racine 控制输出分辨率
- `draft` renvoie 24 croquis et est incompatible avec `quality: "hd"`
- `mj-v8.1-remove-bg` 只接受 `model` 和 `image_urls`
- les documents et exemples V7 sont conservés pour la compatibilité

## FAQ

### Quel modèle utiliser pour une nouvelle intégration Midjourney API ?
Utilisez `mj-v8.1` pour une nouvelle génération d’images, sauf si vous avez précisément besoin d’un workflow V7 conservé.

### Comment activer la sortie HD V8.1 ?
Définissez `"quality": "hd"` au niveau racine et utilisez `model_params.speed` avec `fast` ou `turbo`. Ne combinez pas `hd` avec `draft`.

### Puis-je écrire `--turbo`, `--draft` ou `--hd` dans le prompt ?
Non. La vitesse est contrôlée par `model_params.speed`, et la qualité de sortie par le champ racine `quality`.

### Puis-je encore utiliser les exemples V7 ?
Oui. Les documents et exemples V7 sont conservés volontairement pour les intégrations existantes.

## Liens associés

- [Midjourney V8.1 Génération d’images Docs](https://docs.evolink.ai/en/api-manual/image-series/midjourney/mj-v8-1-image-generate?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api)
- [Midjourney V8.1 Prompt Guide](https://docs.evolink.ai/en/api-manual/image-series/midjourney/midjourney-v8-1-prompt-guide?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api)
- [Preserved Midjourney V7 Génération d’images Docs](https://docs.evolink.ai/en/api-manual/image-series/midjourney/mj-v7-image-generate?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api)
- [Clé API](https://evolink.ai/signup?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api)

## Note sur le dépôt

Ce dépôt est un hub de documentation et d’exemples pour utiliser Midjourney API sur EvoLink.ai. Les workflows officiels détaillés sont organisés sous `docs/official-api/`, tandis que `mjv7参考/` reste une référence locale exclue des uploads via `.gitignore`.
