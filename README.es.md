# Midjourney API: documentación, workflows y ejemplos de integración para V8.1 y V7

<p align="center">
  <a href="./README.md">English</a> · <a href="./README.es.md">Español</a> · <a href="./README.pt.md">Português</a> · <a href="./README.ja.md">日本語</a> · <a href="./README.ko.md">한국어</a> · <a href="./README.de.md">Deutsch</a> · <a href="./README.fr.md">Français</a> · <a href="./README.tr.md">Türkçe</a> · <a href="./README.zh-TW.md">繁體中文</a> · <a href="./README.zh-CN.md">简体中文</a> · <a href="./README.ru.md">Русский</a>
</p>

<p align="center">
  <a href="https://docs.evolink.ai/en/api-manual/image-series/midjourney/mj-v8-1-image-generate?utm_source=github&utm_medium=banner&utm_campaign=midjourney-api">
    <img src="./assets/banner.jpg" alt="Midjourney API - documentación oficial y ejemplos de integración para V8.1 y V7" width="100%" />
  </a>
</p>

<p align="center">
  Integra los workflows más recientes de generación de imágenes Midjourney V8.1 con EvoLink y conserva la documentación V7 para integraciones existentes.
</p>

<p align="left">
  <a href="https://docs.evolink.ai/en/api-manual/image-series/midjourney/mj-v8-1-image-generate?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api">Leer documentación V8.1</a> ·
  <a href="https://docs.evolink.ai/en/api-manual/image-series/midjourney/midjourney-v8-1-prompt-guide?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api">Leer guía de prompts V8.1</a> ·
  <a href="https://evolink.ai/signup?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api">Obtener clave API</a>
</p>

## Inicio rápido con EvoLink

Usa generación de imágenes Midjourney V8.1 con una sola llamada API.

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

## Flujo completo de primera ejecución

La generación y edición de Midjourney son asincrónicas. En producción conviene crear una tarea, guardar su ID, consultar el estado o recibir un callback, y guardar las URL finales antes de que expiren.

```bash
export EVOLINK_API_KEY="your_key_here"
bash examples/curl/complete-flow.sh
```

Ejemplos completos:

- [cURL complete flow](./examples/curl/complete-flow.sh)
- [Python complete flow](./examples/python/complete_flow.py)
- [JavaScript complete flow](./examples/javascript/complete-flow.mjs)
- [cURL V8.1 generation](./examples/curl/generate-image-v8-1.sh)
- [JavaScript V8.1 generation](./examples/javascript/basic-v8-1.mjs)

## ¿Qué es Midjourney API?

Midjourney API en EvoLink.ai da a los desarrolladores acceso a workflows de generación y edición de imágenes de Midjourney con una sola clave API. Este repositorio cubre la familia más reciente Midjourney V8.1 y conserva las referencias V7 para integraciones que todavía dependen de modelos V7.

Este repositorio está pensado para desarrolladores que quieren:

- integrar Midjourney V8.1 en aplicaciones de producción
- entender el comportamiento de velocidad, calidad, parámetros de prompt y workflows de V8.1
- mantener ejemplos V7 disponibles durante la migración
- elegir la operación correcta para generación, variación, remix, edición, retexturizado o eliminación de fondo

## Por qué usar EvoLink para Midjourney API

- una sola clave API para Midjourney V8.1 y ejemplos V7 conservados
- flujo asincrónico de tareas diseñado para producción
- salida HD nativa de V8.1 mediante el campo superior `quality`
- control de velocidad V8.1 mediante `model_params.speed`
- soporte para parámetros nativos de prompt y workflows de referencia de Midjourney
- callbacks HTTPS para workflows de finalización de tareas

## Notas de precios de Midjourney V8.1

La documentación oficial de V8.1 describe la facturación mediante multiplicadores de velocidad y calidad. Este repositorio no inventa precios fijos en dólares para V8.1.

| Ajuste | Valores | Nota de facturación |
|---|---|---|
| `model_params.speed` | `draft`, `fast`, `turbo` | `draft` / `fast` = 1x; `turbo` ≈ 2x |
| `quality` | `standard`, `hd` | `standard` = 1x; `hd` = 1.5x |
| Coste combinado | speed x quality | `turbo` + `hd` ≈ 3x |

> V8.1 `draft` devuelve 24 bocetos ligeros de 0.5K en una sola ejecución y no se puede combinar con `quality: "hd"`. Los modos fast y turbo devuelven 4 imágenes por generación.

## Precios conservados de generación Midjourney V7

| Modelo | Modo | Velocidad | Precio | Notas |
|---|---|---|---:|---|
| `mj-v7` | generación de imágenes | draft | $0.040 / solicitud | 2,7 créditos; 4 imágenes por solicitud |
| `mj-v7` | generación de imágenes | fast | $0.079 / solicitud | modo predeterminado; 5,4 créditos |
| `mj-v7` | generación de imágenes | turbo | $0.159 / solicitud | modo prioritario; 10,8 créditos |

## Workflows más recientes de Midjourney V8.1

| Workflow | Modelo | Resumen |
|---|---|---|
| Generación de imágenes | `mj-v8.1` | texto a imagen e imagen a imagen con sintaxis V8.1, `quality` y `speed` |
| Variación | `mj-v8.1-variation` | crear variantes subtle o strong desde una tarea V8.1 completada |
| Remix | `mj-v8.1-remix` | reinterpretar un resultado completado con un nuevo prompt obligatorio |
| Retexture | `mj-v8.1-retexture` | cambiar textura o estilo directamente desde una URL de imagen |
| Upload Paint | `mj-v8.1-upload-paint` | edición avanzada de lienzo con imagen subida, máscara y posición |
| Canvas Edit | `mj-v8.1-edit` | reposicionar una imagen de tarea en el lienzo y rellenar áreas vacías |
| Eliminar fondo | `mj-v8.1-remove-bg` | eliminar el fondo desde una URL de imagen sin prompt ni speed |

## Workflows Midjourney V7 conservados

| Workflow | Modelo | Resumen |
|---|---|---|
| Generación de imágenes | `mj-v7` | V7 texto a imagen / imagen a imagen |
| Upscale | `mj-v7-upscale` | ampliar una imagen seleccionada |
| Inpaint | `mj-v7-inpaint` | editar un área enmascarada |
| Outpaint | `mj-v7-outpaint` | expandir más allá del borde de la imagen |
| Pan | `mj-v7-pan` | extender en una dirección |
| Remix | `mj-v7-remix` | reinterpretar con un nuevo prompt |
| Retexture | `mj-v7-retexture` | cambiar textura o estilo conservando la estructura |
| Canvas Edit | `mj-v7-edit` | reposicionar la imagen y rellenar áreas vacías |
| Enhance | `mj-v7-enhance` | mejorar un resultado seleccionado |
| Eliminar fondo | `mj-v7-remove-bg` | recorte transparente del sujeto |
| Upload Paint | `mj-v7-upload-paint` | edición avanzada con subida, máscara y lienzo |

## Documentación oficial de la API

Las referencias detalladas viven en documentos separados para que el README se centre en navegación, notas de precio e integración.

Documentación V8.1 más reciente:

- [V8.1 Generación de imágenes](./docs/official-api/v8-1-image-generation.md)
- [V8.1 Variación](./docs/official-api/v8-1-variation.md)
- [V8.1 Remix](./docs/official-api/v8-1-remix.md)
- [V8.1 Retexture](./docs/official-api/v8-1-retexture.md)
- [V8.1 Upload Paint](./docs/official-api/v8-1-upload-paint.md)
- [V8.1 Canvas Edit](./docs/official-api/v8-1-canvas-edit.md)
- [V8.1 Eliminar fondo](./docs/official-api/v8-1-remove-background.md)
- [Parámetros de prompt](./docs/prompt-parameters.md)

Documentación V7 conservada:

- [V7 Generación de imágenes](./docs/official-api/image-generation.md)
- [V7 imagen a imagen y referencia](./docs/official-api/image-to-image-and-reference.md)
- [V7 Upscale](./docs/official-api/upscale.md)
- [V7 Inpaint](./docs/official-api/inpaint.md)
- [V7 Outpaint](./docs/official-api/outpaint.md)
- [V7 Pan](./docs/official-api/pan.md)
- [V7 Remix](./docs/official-api/remix.md)
- [V7 Retexture](./docs/official-api/retexture.md)
- [V7 Canvas Edit](./docs/official-api/canvas-edit.md)
- [V7 Enhance](./docs/official-api/enhance.md)
- [V7 Eliminar fondo](./docs/official-api/remove-background.md)
- [V7 Upload Paint](./docs/official-api/upload-paint.md)

## Resumen de parámetros de prompt

Midjourney V8.1 admite sintaxis nativa de parámetros dentro de `prompt`, pero la velocidad y la calidad de salida son campos de la API.

| Control | Dónde configurarlo | Valores |
|---|---|---|
| Velocidad | `model_params.speed` | `draft`, `fast`, `turbo` |
| Calidad de salida | `quality` en el nivel superior | `standard`, `hd` |
| Parámetros de prompt | `prompt` | `--ar`, `--c`, `--seed`, `--s`, `--exp`, `--raw`, `--iw`, `--sref`, `--sw`, `--oref`, `--ow` |

V8.1 no expone `--q`, `--no`, `--weird`, `--tile`, `--sv`, `--stop`, `--cref`, `--cw`, `--relax`, `--repeat`, `--p`, permutaciones, flags public/stealth, `--niji` ni multi-prompt `::` en esta ruta.

## Flujo de integración

1. clave API de EvoLink.ai
2. `POST /v1/images/generations`
3. guardar el ID de tarea
4. consultar `GET /v1/tasks/{task_id}` o usar callback
5. guardar las URL finales antes de que expiren

## Ejemplos de código

Ejemplos V8.1 más recientes:

- [cURL: V8.1 generation](./examples/curl/generate-image-v8-1.sh)
- [JavaScript: V8.1 generation](./examples/javascript/basic-v8-1.mjs)

Ejemplos V7 conservados:

- [cURL: flujo completo de primera ejecución](./examples/curl/complete-flow.sh)
- [cURL: generación básica](./examples/curl/generate-image.sh)
- [cURL: imagen a imagen](./examples/curl/image-to-image.sh)
- [cURL: upscale](./examples/curl/upscale.sh)
- [cURL: inpaint](./examples/curl/inpaint.sh)
- [Python: flujo completo de primera ejecución](./examples/python/complete_flow.py)
- [JavaScript: flujo completo de primera ejecución](./examples/javascript/complete-flow.mjs)
- [JavaScript: generación básica](./examples/javascript/basic.mjs)
- [JavaScript: imagen a imagen](./examples/javascript/image-to-image.mjs)
- [JavaScript: upscale](./examples/javascript/upscale.mjs)
- [JavaScript: inpaint](./examples/javascript/inpaint.mjs)

## Comparación de workflows

| Si necesitas... | Workflow recomendado | Por qué |
|---|---|---|
| generación más reciente | `mj-v8.1` | modelo V8.1 más reciente |
| bocetos rápidos | `mj-v8.1` + `speed: "draft"` | 24 bocetos ligeros 0.5K |
| salida HD | `mj-v8.1` + `quality: "hd"` | native salida HD |
| variantes | `mj-v8.1-variation` | subtle / strong variantes |
| reinterpretación con prompt | `mj-v8.1-remix` | nuevo prompt conservando la estructura fuente |
| edición de lienzo | `mj-v8.1-edit` | reposicionar y rellenar áreas vacías |
| edición de imagen subida | `mj-v8.1-upload-paint` | workflow de máscara y lienzo |
| eliminación de fondo | `mj-v8.1-remove-bg` | sin campos prompt ni speed |
| flujos V7 existentes | V7 模型 | compatibilidad conservada |

## Notas de producción

- autenticación con Bearer token
- tareas asincrónicas
- solo callback HTTPS; no se permiten URL con IP privada
- timeout de callback: 10 segundos, hasta 3 reintentos
- según la documentación oficial, los enlaces de imagen V8.1 son válidos durante 30 días
- `model_params.speed` controla la velocidad
- `quality` en el nivel superior 控制输出分辨率
- `draft` devuelve 24 bocetos y es incompatible con `quality: "hd"`
- `mj-v8.1-remove-bg` 只接受 `model` 和 `image_urls`
- la documentación y los ejemplos V7 se conservan por compatibilidad

## Preguntas frecuentes

### Yeni Midjourney API entegrasyonları için hangi modeli kullanmalıyım?
Para nueva generación de imágenes, utiliza `mj-v8.1`, salvo que necesites específicamente un workflow V7 conservado.

### V8.1 HD çıktısını nasıl etkinleştiririm?
Configura `"quality": "hd"` en el nivel superior y usa `model_params.speed` como `fast` o `turbo`. No combines `hd` con `draft`.

### Prompt içinde `--turbo`, `--draft` veya `--hd` yazabilir miyim?
No. La velocidad se controla con `model_params.speed` y la calidad de salida con el campo superior `quality`.

### V7 örneklerini kullanmaya devam edebilir miyim?
Sí. La documentación y los ejemplos V7 se conservan intencionadamente para integraciones existentes.

## Enlaces relacionados

- [Midjourney V8.1 Generación de imágenes Docs](https://docs.evolink.ai/en/api-manual/image-series/midjourney/mj-v8-1-image-generate?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api)
- [Midjourney V8.1 Prompt Guide](https://docs.evolink.ai/en/api-manual/image-series/midjourney/midjourney-v8-1-prompt-guide?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api)
- [Preserved Midjourney V7 Generación de imágenes Docs](https://docs.evolink.ai/en/api-manual/image-series/midjourney/mj-v7-image-generate?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api)
- [Clave API](https://evolink.ai/signup?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api)

## Nota del repositorio

Este repositorio es un centro de documentación y ejemplos para usar Midjourney API en EvoLink.ai. Los workflows oficiales detallados están organizados en `docs/official-api/`, y `mjv7参考/` permanece como referencia local excluida de los uploads mediante `.gitignore`.
