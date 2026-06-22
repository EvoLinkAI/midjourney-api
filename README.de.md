# Midjourney API V8.1 + V7: Preise, Offizielle Dokumentation, Workflows und Integrationshandbuch

<p align="center">
  <a href="./README.md">English</a> · <a href="./README.es.md">Español</a> · <a href="./README.pt.md">Português</a> · <a href="./README.ja.md">日本語</a> · <a href="./README.ko.md">한국어</a> · <a href="./README.de.md">Deutsch</a> · <a href="./README.fr.md">Français</a> · <a href="./README.tr.md">Türkçe</a> · <a href="./README.zh-TW.md">繁體中文</a> · <a href="./README.zh-CN.md">简体中文</a> · <a href="./README.ru.md">Русский</a>
</p>

<p align="center">
  <a href="https://docs.evolink.ai/en/api-manual/image-series/midjourney/mj-v8-1-image-generate?utm_source=github&utm_medium=banner&utm_campaign=midjourney-api">
    <img src="./assets/banner.jpg" alt="Midjourney API - Preise, Offizielle Dokumentation und Integrationshandbuch" width="100%" />
  </a>
</p>

<p align="center">
  Vergleiche Midjourney API-Preise, prüfe die offizielle Midjourney V8.1-Workflow-Dokumentation und integriere Bildgenerierung und -bearbeitung über eine einheitliche API.
</p>

## Schnellstart

Nutze die Midjourney V8.1-Bildgenerierung mit einem einzigen API-Aufruf.

```bash
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

<p align="left">
  <a href="https://docs.evolink.ai/en/api-manual/image-series/midjourney/mj-v8-1-image-generate?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api">Midjourney API-Preise ansehen</a> ·
  <a href="https://evolink.ai/signup?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api">API-Schlüssel holen</a> ·
  <a href="https://docs.evolink.ai/en/api-manual/image-series/midjourney/mj-v8-1-image-generate?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api">API-Dokumentation lesen</a>
</p>

## Was ist die Midjourney API?

Midjourney API on EvoLink.ai gives developers access to Midjourney image generation and editing workflows through one unified API key. This repository now covers the latest Midjourney V8.1 generation family while preserving the existing Midjourney V7 workflow references for integrations that still depend on V7 model IDs.

This repository is built for developers who want to:

- integrate Midjourney V8.1 image generation into production apps
- understand V8.1 speed, quality, prompt parameter, and workflow behavior
- keep existing V7 workflow examples available during migration
- choose the right Midjourney operation for generation, variation, remix, edit, retexture, or background removal


## Warum EvoLink für die Midjourney API nutzen?

- one API key for Midjourney V8.1 and preserved V7 workflow examples
- asynchronous task flow designed for production integration
- V8.1 native HD output through the top-level `quality` field
- V8.1 speed control through `model_params.speed`
- support for native Midjourney prompt parameters and reference workflows
- HTTPS callback support for task completion workflows


## Midjourney V8.1 Pricing Notes

The V8.1 official docs describe pricing through speed and quality multipliers. This repository does not invent fixed dollar prices for V8.1.

| Setting | Values | Billing note |
|---|---|---|
| `model_params.speed` | `draft`, `fast`, `turbo` | `draft` and `fast` use the same speed multiplier; `turbo` is about 2x fast |
| `quality` | `standard`, `hd` | `standard` is 1x; `hd` is 1.5x |
| Combined cost | speed x quality | for example, `turbo` + `hd` is about 3x the base |

> V8.1 `draft` returns 24 lightweight 0.5K sketch images in one run and cannot be combined with `quality: "hd"`. Fast and turbo modes return 4 images per generation.

## Midjourney API-Preise

Die folgenden Preise entsprechen der für dieses Repository bereitgestellten Midjourney V7-Produktreferenz.

| Modell | Modus | Geschwindigkeit | Preis | Hinweise |
|---|---|---|---:|---|
| `mj-v7` | Bildgenerierung | draft | $0,040 / Anfrage | ca. 2,7 Credits, 4 Bilder pro Anfrage |
| `mj-v7` | Bildgenerierung | fast | $0,079 / Anfrage | Standardmodus, ca. 5,4 Credits |
| `mj-v7` | Bildgenerierung | turbo | $0,159 / Anfrage | Prioritätsmodus, ca. 10,8 Credits |

> Jede Anfrage produziert 4 Bilder. Die Inhaltsmoderation von Midjourney kann einige Ausgaben filtern, sodass das zurückgegebene Ergebnis 1 bis 4 Bilder enthalten kann. Die Abrechnung erfolgt pro Anfrage, nicht pro Bild.


## Latest Midjourney V8.1 Workflows

| Workflow | Model | Summary |
|---|---|---|
| Image Generation | `mj-v8.1` | text-to-image and image-to-image with V8.1 prompt syntax, `quality`, and `speed` |
| Variation | `mj-v8.1-variation` | create subtle or strong variants from a completed V8.1 task |
| Remix | `mj-v8.1-remix` | reinterpret a completed result with a required new prompt |
| Retexture | `mj-v8.1-retexture` | change image texture or style directly from an input image URL |
| Upload Paint | `mj-v8.1-upload-paint` | advanced canvas editing from uploaded image, mask, and placement fields |
| Canvas Edit | `mj-v8.1-edit` | reposition an existing task image on a canvas and fill blank areas |
| Remove Background | `mj-v8.1-remove-bg` | remove the background from one input image URL without prompt or speed fields |

## Preserved Unterstützte Midjourney V7-Workflows

| Workflow | Modell | Zusammenfassung |
|---|---|---|
| Bildgenerierung | `mj-v7` | Text-zu-Bild und Bild-zu-Bild mit nativem Midjourney V7-Prompt-Syntax |
| Upscale | `mj-v7-upscale` | ein ausgewähltes Bild aus einer abgeschlossenen Aufgabe hochskalieren |
| Inpaint | `mj-v7-inpaint` | einen maskierten Bereich in einem ausgewählten Bild bearbeiten |
| Outpaint | `mj-v7-outpaint` | über die ursprüngliche Bildgrenze hinaus erweitern |
| Pan | `mj-v7-pan` | Komposition in eine Richtung erweitern |
| Remix | `mj-v7-remix` | ein vorhandenes Bild mit einem neuen Prompt neu interpretieren |
| Retexture | `mj-v7-retexture` | Textur oder Stil bei Erhaltung der Struktur ändern |
| Canvas Edit | `mj-v7-edit` | Bild auf der Leinwand neu positionieren und leere Bereiche füllen |
| Enhance | `mj-v7-enhance` | ein ausgewähltes generiertes Bild verbessern |
| Remove Background | `mj-v7-remove-bg` | transparenten Ausschnitt des Motivs aus einem Eingabebild generieren |
| Upload Paint | `mj-v7-upload-paint` | erweiterter Bearbeitungsfluss mit hochgeladenem Bild, Maske und Leinwandeinstellungen |

## Offizielle API-Dokumente

Die detaillierten Workflow-Referenzen befinden sich in separaten Dokumenten, damit das README auf Navigation, Preise und Integrationsanleitung fokussiert bleibt. Jede nachfolgende Seite ist auf die offiziellen Referenzmaterialien abgestimmt, die für dieses Repository bereitgestellt wurden.

Latest V8.1 docs:

- [V8.1 Image Generation](./docs/official-api/v8-1-image-generation.md)
- [V8.1 Variation](./docs/official-api/v8-1-variation.md)
- [V8.1 Remix](./docs/official-api/v8-1-remix.md)
- [V8.1 Retexture](./docs/official-api/v8-1-retexture.md)
- [V8.1 Upload Paint](./docs/official-api/v8-1-upload-paint.md)
- [V8.1 Canvas Edit](./docs/official-api/v8-1-canvas-edit.md)
- [V8.1 Remove Background](./docs/official-api/v8-1-remove-background.md)

Preserved V7 docs:

- [Bildgenerierung](./docs/official-api/image-generation.md)
- [Bild-zu-Bild und Referenz](./docs/official-api/image-to-image-and-reference.md)
- [Prompt-Parameter](./docs/prompt-parameters.md)
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

## Prompt-Parameter-Übersicht

Midjourney V7 unterstützt native Parameter-Syntax direkt im `prompt`-Feld.

Midjourney V8.1 supports native parameter syntax inside the `prompt` field, but speed and output quality are API fields. Use top-level `quality` (`standard` or `hd`) and `model_params.speed` (`draft`, `fast`, or `turbo`). V8.1 `draft` returns 24 lightweight 0.5K sketch images and cannot be combined with `quality: hd`.

Preserved V7 parameter overview:

| Parameter | Beispiel | Zweck |
|---|---|---|
| `--ar` | `--ar 16:9` | Seitenverhältnis |
| `--s` | `--s 500` | Stilisierungsstärke |
| `--c` / `--chaos` | `--c 30` | Ergebnisvielfalt |
| `--q` | `--q 2` | Qualitätsstufe |
| `--seed` | `--seed 12345` | reproduzierbare Erkundung |
| `--no` | `--no text, watermark` | Elemente ausschließen |
| `--iw` | `--iw 1.5` | Bildprompt-Gewicht |
| `--sref` | `--sref https://...` | Stilreferenz |
| `--oref` | `--oref https://...` | Objektreferenz |
| `--raw` | `--raw` | Verschönerung reduzieren |
| `--tile` | `--tile` | nahtlose Mustergenerierung |
| `--w` | `--w 500` | Seltsamkeit |
| `--exp` | `--exp 25` | experimentelle Ästhetik |

Detaillierte Parameterregeln findest du in [`docs/prompt-parameters.md`](./docs/prompt-parameters.md).

## Integrationsworkflow

1. API-Schlüssel von EvoLink.ai holen
2. Generierungs- oder Bearbeitungsaufgabe mit `POST /v1/images/generations` erstellen
3. zurückgegebene Task-ID speichern
4. `GET /v1/tasks/{task_id}` abfragen, bis die Aufgabe abgeschlossen ist
5. resultierende Bilder umgehend herunterladen und speichern, da generierte Links temporär sind

## Code-Beispiele

Latest V8.1 examples:

- [cURL: V8.1 generation](./examples/curl/generate-image-v8-1.sh)
- [JavaScript: V8.1 generation](./examples/javascript/basic-v8-1.mjs)

Preserved V7 examples:

- [cURL: Basisgenerierung](./examples/curl/generate-image.sh)
- [cURL: Bild-zu-Bild](./examples/curl/image-to-image.sh)
- [cURL: Upscale](./examples/curl/upscale.sh)
- [cURL: Inpaint](./examples/curl/inpaint.sh)
- [JavaScript: Basisgenerierung](./examples/javascript/basic.mjs)
- [JavaScript: Bild-zu-Bild](./examples/javascript/image-to-image.mjs)
- [JavaScript: Upscale](./examples/javascript/upscale.mjs)
- [JavaScript: Inpaint](./examples/javascript/inpaint.mjs)

## Workflow-Vergleich

| Wenn du brauchst... | Empfohlener Workflow | Warum |
|---|---|---|
| Erstgenerierung | `mj-v7` | natives V7-Bildgenerierung |
| ein oder mehrere Referenzbilder im Prompt verwenden | `mj-v7` | unterstützt Bild-URLs am Anfang des Prompts |
| nur einen ausgewählten lokalen Bereich ändern | `mj-v7-inpaint` | maskenbasierte Bearbeitung |
| Komposition nach außen erweitern | `mj-v7-outpaint` | breiteres Framing über das Originalbild hinaus |
| links, rechts, oben oder unten verlängern | `mj-v7-pan` | direktionale Erweiterung |
| ein Ergebnis mit einem neuen Prompt neu interpretieren | `mj-v7-remix` | Prompt-basierte Variation aus einer vorhandenen Aufgabe |
| Layout beibehalten, aber Material oder Finish ändern | `mj-v7-retexture` | Stil- und Texturumwandlung aus einem Eingabebild |
| Motiv aus einem Bild ausschneiden | `mj-v7-remove-bg` | kein Prompt erforderlich |
| Bild auf einer größeren Leinwand neu positionieren | `mj-v7-edit` | Leinwanderweiterung mit Positionierungskontrolle |

## Produktionshinweise

- V8.1 is the latest integration path for new Midjourney image-generation work
- V8.1 generated image links are valid for 30 days according to the official V8.1 image-generation docs
- V8.1 speed is controlled with `model_params.speed`, not prompt flags
- V8.1 output resolution is controlled with top-level `quality`, not `--q` or `--hd`
- V8.1 `draft` returns 24 lightweight sketches and is incompatible with `quality: "hd"`
- V8.1 remove background only accepts `model` and `image_urls`
- alle Endpunkte erfordern Bearer-Token-Authentifizierung
- Midjourney-Generierungs- und Bearbeitungs-Workflows sind asynchron
- Callbacks müssen HTTPS verwenden und können keine privaten IP-Adressen ansprechen
- Callback-Timeout beträgt 10 Sekunden mit bis zu 3 Wiederholungsversuchen
- generierte Bildlinks sind 24 Stunden gültig, also umgehend speichern
- `--v`, `--version` und `--niji` werden hier in V7-Anfragen nicht unterstützt
- `--fast`, `--draft` und `--turbo` dürfen nicht im Prompt stehen, verwende `model_params.speed`
- Bearbeitungs-Workflows erfordern in der Regel eine abgeschlossene Task-ID und die ausgewählte Bildnummer
- Remove Background verwendet keine Prompt- oder Geschwindigkeitsparameter
- Retexture und Remove Background akzeptieren Eingabebild-URLs direkt, anstatt sich auf eine Quellaufgabe zu stützen

## FAQ

### Wie wird die Midjourney API abgerechnet?
Die Midjourney V7-Generierung wird pro Anfrage abgerechnet, nicht pro Bild. Eine Anfrage zielt auf 4 Ausgaben ab, aber Moderationsfilterung kann die Anzahl der zurückgegebenen Bilder reduzieren.

### Wie mache ich Bild-zu-Bild?
Platziere eine oder mehrere Bild-URLs am Anfang des `prompt`, dann füge deine Textbeschreibung und Midjourney-Parameter hinzu.

### Warum brauchen Bearbeitungs-Endpunkte eine Task-ID?
Operationen wie Upscale, Inpaint, Outpaint, Pan, Enhance und Remix arbeiten auf einem ausgewählten Bild aus einer abgeschlossenen Aufgabe und benötigen daher die ursprüngliche Aufgabenreferenz.

### Kann ich `--turbo` oder `--draft` im Prompt verwenden?
Nein. Die Geschwindigkeit wird über `model_params.speed` gesteuert.

## Verwandte Links

- [Midjourney V8.1 Image Generation Docs](https://docs.evolink.ai/en/api-manual/image-series/midjourney/mj-v8-1-image-generate?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api)
- [API-Schlüssel holen](https://evolink.ai/signup?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api)
- [Midjourney API-Dokumentation](https://docs.evolink.ai/en/api-manual/image-series/midjourney/mj-v8-1-image-generate?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api)

## Repository-Hinweis

Dieses Repository ist ein Dokumentations- und Beispiel-Hub für die Nutzung der Midjourney API auf EvoLink.ai. Die detaillierten offiziellen Workflow-Materialien sind unter `docs/official-api/` organisiert, während `mjv7参考/` als lokales Referenzmaterial verbleibt und über `.gitignore` von Uploads ausgeschlossen ist.
