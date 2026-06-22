# Midjourney API: V8.1- und V7-Dokumentation, Workflows und Integrationsbeispiele

<p align="center">
  <a href="./README.md">English</a> · <a href="./README.es.md">Español</a> · <a href="./README.pt.md">Português</a> · <a href="./README.ja.md">日本語</a> · <a href="./README.ko.md">한국어</a> · <a href="./README.de.md">Deutsch</a> · <a href="./README.fr.md">Français</a> · <a href="./README.tr.md">Türkçe</a> · <a href="./README.zh-TW.md">繁體中文</a> · <a href="./README.zh-CN.md">简体中文</a> · <a href="./README.ru.md">Русский</a>
</p>

<p align="center">
  <a href="https://docs.evolink.ai/en/api-manual/image-series/midjourney/mj-v8-1-image-generate?utm_source=github&utm_medium=banner&utm_campaign=midjourney-api">
    <img src="./assets/banner.jpg" alt="Midjourney API - offizielle V8.1- und V7-Dokumentation mit Integrationsbeispielen" width="100%" />
  </a>
</p>

<p align="center">
  Integriere die neuesten Midjourney V8.1-Bildgenerierungs-Workflows über EvoLink und behalte die V7-Dokumentation für bestehende Integrationen.
</p>

<p align="left">
  <a href="https://docs.evolink.ai/en/api-manual/image-series/midjourney/mj-v8-1-image-generate?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api">V8.1-Bildgenerierungsdokumentation lesen</a> ·
  <a href="https://docs.evolink.ai/en/api-manual/image-series/midjourney/midjourney-v8-1-prompt-guide?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api">V8.1-Prompt-Leitfaden lesen</a> ·
  <a href="https://evolink.ai/signup?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api">API-Schlüssel holen</a>
</p>

## EvoLink-Schnellstart

Nutze Midjourney V8.1-Bildgenerierung mit einem einzigen API-Aufruf.

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

## Vollständiger Erstlauf

Midjourney-Generierung und -Bearbeitung sind asynchron. Eine Produktionsintegration sollte eine Aufgabe erstellen, die Task-ID speichern, per Polling oder Callback auf das Ergebnis warten und die finalen Bild-URLs vor Ablauf sichern.

```bash
export EVOLINK_API_KEY="your_key_here"
bash examples/curl/complete-flow.sh
```

Vollständige Beispiele:

- [cURL complete flow](./examples/curl/complete-flow.sh)
- [Python complete flow](./examples/python/complete_flow.py)
- [JavaScript complete flow](./examples/javascript/complete-flow.mjs)
- [cURL V8.1 generation](./examples/curl/generate-image-v8-1.sh)
- [JavaScript V8.1 generation](./examples/javascript/basic-v8-1.mjs)

## Was ist die Midjourney API?

Die Midjourney API auf EvoLink.ai gibt Entwicklern Zugriff auf Midjourney-Workflows für Bildgenerierung und Bildbearbeitung über einen einheitlichen API-Schlüssel. Dieses Repository deckt nun die neueste Midjourney V8.1-Generation ab und bewahrt bestehende V7-Workflow-Referenzen für Integrationen, die weiterhin V7-Modell-IDs verwenden.

Dieses Repository richtet sich an Entwickler, die:

- Midjourney V8.1-Bildgenerierung in Produktionsanwendungen integrieren möchten
- Geschwindigkeit, Qualität, Prompt-Parameter und Workflow-Verhalten von V8.1 verstehen möchten
- V7-Beispiele während der Migration verfügbar halten möchten
- die passende Operation für Generierung, Variation, Remix, Bearbeitung, Retexture oder Hintergrundentfernung auswählen möchten

## Warum EvoLink für die Midjourney API nutzen

- ein API-Schlüssel für Midjourney V8.1 und bewahrte V7-Beispiele
- asynchroner Task-Fluss für Produktionsintegration
- native V8.1-HD-Ausgabe über das Top-Level-Feld `quality`
- V8.1-Geschwindigkeitssteuerung über `model_params.speed`
- Unterstützung nativer Midjourney-Prompt-Parameter und Referenz-Workflows
- HTTPS-Callbacks für Task-Abschluss-Workflows

## Preisnotizen zu Midjourney V8.1

Die offizielle V8.1-Dokumentation beschreibt die Abrechnung über Geschwindigkeits- und Qualitätsmultiplikatoren. Dieses Repository erfindet keine festen Dollarpreise für V8.1.

| Einstellung | Werte | Abrechnungshinweis |
|---|---|---|
| `model_params.speed` | `draft`, `fast`, `turbo` | `draft` / `fast` = 1x; `turbo` ≈ 2x |
| `quality` | `standard`, `hd` | `standard` = 1x; `hd` = 1.5x |
| Kombinierte Kosten | speed x quality | `turbo` + `hd` ≈ 3x |

> V8.1 `draft` liefert 24 leichte 0.5K-Skizzen in einem Lauf und kann nicht mit `quality: "hd"` kombiniert werden. Fast und turbo liefern 4 Bilder pro Generierung.

## Bewahrte Preise für Midjourney V7-Generierung

| Modell | Modus | Geschwindigkeit | Preis | Hinweise |
|---|---|---|---:|---|
| `mj-v7` | Bildgenerierung | draft | $0.040 / Anfrage | 2,7 Credits; 4 Bilder pro Anfrage |
| `mj-v7` | Bildgenerierung | fast | $0.079 / Anfrage | Standardmodus; 5,4 Credits |
| `mj-v7` | Bildgenerierung | turbo | $0.159 / Anfrage | Prioritätsmodus; 10,8 Credits |

## Neueste Midjourney V8.1-Workflows

| Workflow | Modell | Zusammenfassung |
|---|---|---|
| Bildgenerierung | `mj-v8.1` | Text-zu-Bild und Bild-zu-Bild mit V8.1-Promptsyntax, `quality` und `speed` |
| Variation | `mj-v8.1-variation` | subtle oder strong Varianten aus einer abgeschlossenen V8.1-Aufgabe erzeugen |
| Remix | `mj-v8.1-remix` | ein abgeschlossenes Ergebnis mit einem neuen Pflicht-Prompt neu interpretieren |
| Retexture | `mj-v8.1-retexture` | Textur oder Stil direkt aus einer Bild-URL ändern |
| Upload Paint | `mj-v8.1-upload-paint` | erweiterte Canvas-Bearbeitung mit Upload-Bild, Maske und Position |
| Canvas Edit | `mj-v8.1-edit` | ein Task-Bild auf der Canvas neu positionieren und Leerflächen füllen |
| Hintergrund entfernen | `mj-v8.1-remove-bg` | Hintergrund aus einer Bild-URL ohne Prompt oder speed entfernen |

## Bewahrte Midjourney V7-Workflows

| Workflow | Modell | Zusammenfassung |
|---|---|---|
| Bildgenerierung | `mj-v7` | V7 Text-zu-Bild / Bild-zu-Bild |
| Upscale | `mj-v7-upscale` | ein ausgewähltes Bild hochskalieren |
| Inpaint | `mj-v7-inpaint` | einen maskierten Bereich bearbeiten |
| Outpaint | `mj-v7-outpaint` | über die Bildgrenze hinaus erweitern |
| Pan | `mj-v7-pan` | in eine Richtung erweitern |
| Remix | `mj-v7-remix` | mit neuem Prompt neu interpretieren |
| Retexture | `mj-v7-retexture` | Textur oder Stil bei erhaltener Struktur ändern |
| Canvas Edit | `mj-v7-edit` | Bild neu positionieren und Leerflächen füllen |
| Enhance | `mj-v7-enhance` | ein ausgewähltes Ergebnis verbessern |
| Hintergrund entfernen | `mj-v7-remove-bg` | transparenter Motivausschnitt |
| Upload Paint | `mj-v7-upload-paint` | erweiterte Upload-, Masken- und Canvas-Bearbeitung |

## Offizielle API-Dokumente

Die detaillierten Workflow-Referenzen liegen in separaten Dokumenten, damit das README auf Navigation, Preisnotizen und Integrationshinweise fokussiert bleibt.

Neueste V8.1-Dokumente:

- [V8.1 Bildgenerierung](./docs/official-api/v8-1-image-generation.md)
- [V8.1 Variation](./docs/official-api/v8-1-variation.md)
- [V8.1 Remix](./docs/official-api/v8-1-remix.md)
- [V8.1 Retexture](./docs/official-api/v8-1-retexture.md)
- [V8.1 Upload Paint](./docs/official-api/v8-1-upload-paint.md)
- [V8.1 Canvas Edit](./docs/official-api/v8-1-canvas-edit.md)
- [V8.1 Hintergrund entfernen](./docs/official-api/v8-1-remove-background.md)
- [Prompt-Parameter](./docs/prompt-parameters.md)

Bewahrte V7-Dokumente:

- [V7 Bildgenerierung](./docs/official-api/image-generation.md)
- [V7 Bild-zu-Bild und Referenz](./docs/official-api/image-to-image-and-reference.md)
- [V7 Upscale](./docs/official-api/upscale.md)
- [V7 Inpaint](./docs/official-api/inpaint.md)
- [V7 Outpaint](./docs/official-api/outpaint.md)
- [V7 Pan](./docs/official-api/pan.md)
- [V7 Remix](./docs/official-api/remix.md)
- [V7 Retexture](./docs/official-api/retexture.md)
- [V7 Canvas Edit](./docs/official-api/canvas-edit.md)
- [V7 Enhance](./docs/official-api/enhance.md)
- [V7 Hintergrund entfernen](./docs/official-api/remove-background.md)
- [V7 Upload Paint](./docs/official-api/upload-paint.md)

## Prompt-Parameter-Übersicht

Midjourney V8.1 unterstützt native Parametersyntax im Feld `prompt`; Geschwindigkeit und Ausgabequalität sind jedoch API-Felder.

| Steuerung | Wo einstellen | Werte |
|---|---|---|
| Geschwindigkeit | `model_params.speed` | `draft`, `fast`, `turbo` |
| Ausgabequalität | Top-Level-`quality` | `standard`, `hd` |
| Prompt-Parameter | `prompt` | `--ar`, `--c`, `--seed`, `--s`, `--exp`, `--raw`, `--iw`, `--sref`, `--sw`, `--oref`, `--ow` |

V8.1 stellt auf dieser Route `--q`, `--no`, `--weird`, `--tile`, `--sv`, `--stop`, `--cref`, `--cw`, `--relax`, `--repeat`, `--p`, Permutationen, public/stealth-Flags, `--niji` und Multi-Prompt `::` nicht bereit.

## Integrationsworkflow

1. EvoLink.ai API-Schlüssel
2. `POST /v1/images/generations`
3. Task-ID speichern
4. `GET /v1/tasks/{task_id}` abfragen oder Callback nutzen
5. finale Bild-URLs vor Ablauf speichern

## Codebeispiele

Neueste V8.1-Beispiele:

- [cURL: V8.1 generation](./examples/curl/generate-image-v8-1.sh)
- [JavaScript: V8.1 generation](./examples/javascript/basic-v8-1.mjs)

Bewahrte V7-Beispiele:

- [cURL: vollständiger Erstlauf](./examples/curl/complete-flow.sh)
- [cURL: Basisgenerierung](./examples/curl/generate-image.sh)
- [cURL: Bild-zu-Bild](./examples/curl/image-to-image.sh)
- [cURL: upscale](./examples/curl/upscale.sh)
- [cURL: inpaint](./examples/curl/inpaint.sh)
- [Python: vollständiger Erstlauf](./examples/python/complete_flow.py)
- [JavaScript: vollständiger Erstlauf](./examples/javascript/complete-flow.mjs)
- [JavaScript: Basisgenerierung](./examples/javascript/basic.mjs)
- [JavaScript: Bild-zu-Bild](./examples/javascript/image-to-image.mjs)
- [JavaScript: upscale](./examples/javascript/upscale.mjs)
- [JavaScript: inpaint](./examples/javascript/inpaint.mjs)

## Workflow-Vergleich

| Wenn du brauchst... | Empfohlener Workflow | Warum |
|---|---|---|
| neueste Generierung | `mj-v8.1` | neuestes V8.1-Modell |
| schnelle Skizzen | `mj-v8.1` + `speed: "draft"` | 24 leichte 0.5K-Skizzen |
| HD-Ausgabe | `mj-v8.1` + `quality: "hd"` | native HD-Ausgabe |
| Varianten | `mj-v8.1-variation` | subtle / strong Varianten |
| Prompt-Neuinterpretation | `mj-v8.1-remix` | neuer Prompt mit Quellstruktur |
| Canvas-Bearbeitung | `mj-v8.1-edit` | neu positionieren und Leerflächen füllen |
| Bearbeitung hochgeladener Bilder | `mj-v8.1-upload-paint` | Masken- und Canvas-Workflow |
| Hintergrundentfernung | `mj-v8.1-remove-bg` | keine Prompt- oder speed-Felder |
| bestehende V7-Flows | V7 模型 | bewahrte Kompatibilität |

## Produktionshinweise

- Bearer-Token-Authentifizierung
- asynchrone Aufgaben
- nur HTTPS-Callback; private IP-Callback-URLs sind nicht erlaubt
- Callback-Timeout: 10 Sekunden, bis zu 3 Wiederholungen
- laut offizieller Dokumentation sind V8.1-Bildlinks 30 Tage gültig
- `model_params.speed` steuert die Geschwindigkeit
- Top-Level-`quality` 控制输出分辨率
- `draft` liefert 24 Skizzen und ist inkompatibel mit `quality: "hd"`
- `mj-v8.1-remove-bg` 只接受 `model` 和 `image_urls`
- V7-Dokumente und Beispiele bleiben aus Kompatibilitätsgründen erhalten

## FAQ

### Welches Modell sollte ich für neue Midjourney-API-Integrationen verwenden?
Verwende `mj-v8.1` für neue Bildgenerierung, außer du brauchst ausdrücklich einen bewahrten V7-Workflow.

### Wie aktiviere ich HD-Ausgabe in V8.1?
Setze auf Top-Level `"quality": "hd"` und verwende `model_params.speed` mit `fast` oder `turbo`. Kombiniere `hd` nicht mit `draft`.

### Kann ich `--turbo`, `--draft` oder `--hd` in den Prompt schreiben?
Nein. Geschwindigkeit wird über `model_params.speed` gesteuert, Ausgabequalität über das Top-Level-Feld `quality`.

### Kann ich V7-Beispiele weiter nutzen?
Ja. V7-Dokumente und Beispiele bleiben bewusst für bestehende Integrationen erhalten.

## Verwandte Links

- [Midjourney V8.1 Bildgenerierung Docs](https://docs.evolink.ai/en/api-manual/image-series/midjourney/mj-v8-1-image-generate?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api)
- [Midjourney V8.1 Prompt Guide](https://docs.evolink.ai/en/api-manual/image-series/midjourney/midjourney-v8-1-prompt-guide?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api)
- [Preserved Midjourney V7 Bildgenerierung Docs](https://docs.evolink.ai/en/api-manual/image-series/midjourney/mj-v7-image-generate?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api)
- [API-Schlüssel](https://evolink.ai/signup?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api)

## Repository-Hinweis

Dieses Repository ist ein Dokumentations- und Beispiel-Hub für die Nutzung der Midjourney API auf EvoLink.ai. Detaillierte offizielle Workflows liegen unter `docs/official-api/`; `mjv7参考/` bleibt als lokale Referenz erhalten und wird über `.gitignore` von Uploads ausgeschlossen.
