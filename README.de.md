# Midjourney API: Preise, Offizielle Dokumentation, Workflows und Integrationshandbuch

<p align="center">
  <a href="./README.md">English</a> · <a href="./README.es.md">Español</a> · <a href="./README.pt.md">Português</a> · <a href="./README.ja.md">日本語</a> · <a href="./README.ko.md">한국어</a> · <a href="./README.de.md">Deutsch</a> · <a href="./README.fr.md">Français</a> · <a href="./README.tr.md">Türkçe</a> · <a href="./README.zh-TW.md">繁體中文</a> · <a href="./README.zh-CN.md">简体中文</a> · <a href="./README.ru.md">Русский</a>
</p>

<p align="center">
  <a href="https://evolink.ai/midjourney-v7?utm_source=github&utm_medium=banner&utm_campaign=midjourney-api">
    <img src="./assets/banner.jpg" alt="Midjourney API - Preise, Offizielle Dokumentation und Integrationshandbuch" width="100%" />
  </a>
</p>

<p align="center">
  Vergleiche Midjourney API-Preise, prüfe die offizielle Midjourney V7-Workflow-Dokumentation und integriere Bildgenerierung und -bearbeitung über eine einheitliche API.
</p>

## Schnellstart

Nutze die Midjourney V7-Bildgenerierung mit einem einzigen API-Aufruf.

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
  <a href="https://evolink.ai/midjourney-v7?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api">Midjourney API-Preise ansehen</a> ·
  <a href="https://evolink.ai/signup?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api">API-Schlüssel holen</a> ·
  <a href="https://docs.evolink.ai/en/api-manual/image-series/midjourney/mj-v7-image-generate?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api">API-Dokumentation lesen</a>
</p>

## Was ist die Midjourney API?

Die Midjourney API auf EvoLink.ai ermöglicht Entwicklern den Zugriff auf Midjourney V7-Bildgenerierungs- und -bearbeitungs-Workflows über einen einheitlichen API-Schlüssel. Basierend auf den für dieses Repository bereitgestellten offiziellen Referenzen umfassen die aktuell unterstützten Operationen: Bildgenerierung, Bild-zu-Bild, Stil- und Objektreferenz-Workflows, Upscale, Inpaint, Outpaint, Pan, Remix, Retexture, Canvas Edit, Enhance, Remove Background und Upload Paint.

Dieses Repository wurde für Entwickler erstellt, die:

- die Preise und das Abrechnungsverhalten der Midjourney API verstehen möchten
- die offizielle Abdeckung der Midjourney V7-Workflows an einem Ort prüfen möchten
- die richtige Midjourney-Operation für eine Aufgabe auswählen möchten
- die Midjourney-Generierung und -Bearbeitung in Produktionsanwendungen integrieren möchten

## Warum EvoLink für die Midjourney API nutzen?

- ein API-Schlüssel für Midjourney V7 Generierungs- und Bearbeitungs-Workflows
- transparente Preise pro Anfrage für Draft-, Fast- und Turbo-Generierung
- asynchroner Task-Fluss für Produktionsintegration konzipiert
- Unterstützung für native Midjourney V7-Prompt-Parameter und Referenz-Workflows
- HTTPS-Callback-Unterstützung für Task-Abschluss-Workflows
- 99,9% Uptime-Positionierung auf der offiziellen Produktseite

## Midjourney API-Preise

Die folgenden Preise entsprechen der für dieses Repository bereitgestellten Midjourney V7-Produktreferenz.

| Modell | Modus | Geschwindigkeit | Preis | Hinweise |
|---|---|---|---:|---|
| `mj-v7` | Bildgenerierung | draft | $0,040 / Anfrage | ca. 2,7 Credits, 4 Bilder pro Anfrage |
| `mj-v7` | Bildgenerierung | fast | $0,079 / Anfrage | Standardmodus, ca. 5,4 Credits |
| `mj-v7` | Bildgenerierung | turbo | $0,159 / Anfrage | Prioritätsmodus, ca. 10,8 Credits |

> Jede Anfrage produziert 4 Bilder. Die Inhaltsmoderation von Midjourney kann einige Ausgaben filtern, sodass das zurückgegebene Ergebnis 1 bis 4 Bilder enthalten kann. Die Abrechnung erfolgt pro Anfrage, nicht pro Bild.

## Unterstützte Midjourney V7-Workflows

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

- [Midjourney V7-Produktseite](https://evolink.ai/midjourney-v7?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api)
- [API-Schlüssel holen](https://evolink.ai/signup?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api)
- [Midjourney API-Dokumentation](https://docs.evolink.ai/en/api-manual/image-series/midjourney/mj-v7-image-generate?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api)

## Repository-Hinweis

Dieses Repository ist ein Dokumentations- und Beispiel-Hub für die Nutzung der Midjourney API auf EvoLink.ai. Die detaillierten offiziellen Workflow-Materialien sind unter `docs/official-api/` organisiert, während `mjv7参考/` als lokales Referenzmaterial verbleibt und über `.gitignore` von Uploads ausgeschlossen ist.
