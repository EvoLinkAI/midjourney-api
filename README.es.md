# Midjourney API V8.1 + V7: Precios, Documentación Oficial, Flujos de Trabajo y Guía de Integración

<p align="center">
  <a href="./README.md">English</a> · <a href="./README.es.md">Español</a> · <a href="./README.pt.md">Português</a> · <a href="./README.ja.md">日本語</a> · <a href="./README.ko.md">한국어</a> · <a href="./README.de.md">Deutsch</a> · <a href="./README.fr.md">Français</a> · <a href="./README.tr.md">Türkçe</a> · <a href="./README.zh-TW.md">繁體中文</a> · <a href="./README.zh-CN.md">简体中文</a> · <a href="./README.ru.md">Русский</a>
</p>

<p align="center">
  <a href="https://docs.evolink.ai/en/api-manual/image-series/midjourney/mj-v8-1-image-generate?utm_source=github&utm_medium=banner&utm_campaign=midjourney-api">
    <img src="./assets/banner.jpg" alt="Midjourney API - Precios, Documentación Oficial y Guía de Integración" width="100%" />
  </a>
</p>

<p align="center">
  Compara los precios de Midjourney API, revisa la documentación oficial del flujo de trabajo de Midjourney V8.1, e integra la generación y edición de imágenes a través de una API unificada.
</p>

## Inicio Rápido

Usa la generación de imágenes de Midjourney V8.1 en una sola llamada a la API.

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
  <a href="https://docs.evolink.ai/en/api-manual/image-series/midjourney/mj-v8-1-image-generate?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api">Ver Precios de Midjourney API</a> ·
  <a href="https://evolink.ai/signup?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api">Obtener Clave API</a> ·
  <a href="https://docs.evolink.ai/en/api-manual/image-series/midjourney/mj-v8-1-image-generate?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api">Leer Documentación API</a>
</p>

## ¿Qué es Midjourney API?

Midjourney API on EvoLink.ai gives developers access to Midjourney image generation and editing workflows through one unified API key. This repository now covers the latest Midjourney V8.1 generation family while preserving the existing Midjourney V7 workflow references for integrations that still depend on V7 model IDs.

This repository is built for developers who want to:

- integrate Midjourney V8.1 image generation into production apps
- understand V8.1 speed, quality, prompt parameter, and workflow behavior
- keep existing V7 workflow examples available during migration
- choose the right Midjourney operation for generation, variation, remix, edit, retexture, or background removal


## ¿Por Qué Usar EvoLink para Midjourney API?

- one API key for Midjourney V8.1 and preserved V7 workflow examples
- asynchronous task flow designed for production integration
- V8.1 native HD output through the top-level `quality` field
- V8.1 speed control through `model_params.speed`
- support for native Midjourney prompt parameters and reference workflows
- HTTPS callback support for task completion workflows


## Precios de Midjourney API

Los precios a continuación siguen la referencia del producto Midjourney V7 proporcionada para este repositorio.

| Modelo | Modo | Velocidad | Precio | Notas |
|---|---|---|---:|---|
| `mj-v7` | generación de imágenes | draft | $0.040 / solicitud | aprox. 2.7 créditos, 4 imágenes por solicitud |
| `mj-v7` | generación de imágenes | fast | $0.079 / solicitud | modo predeterminado, aprox. 5.4 créditos |
| `mj-v7` | generación de imágenes | turbo | $0.159 / solicitud | modo prioritario, aprox. 10.8 créditos |

> Cada solicitud produce 4 imágenes. La moderación de contenido de Midjourney puede filtrar algunos resultados, por lo que el resultado devuelto puede contener entre 1 y 4 imágenes. La facturación es por solicitud, no por imagen.

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

## Preserved Flujos de Trabajo de Midjourney V7 Compatibles

| Flujo de Trabajo | Modelo | Resumen |
|---|---|---|
| Generación de Imágenes | `mj-v7` | texto a imagen e imagen a imagen con sintaxis de prompt nativa de Midjourney V7 |
| Upscale | `mj-v7-upscale` | ampliar una imagen seleccionada de una tarea completada |
| Inpaint | `mj-v7-inpaint` | editar un área enmascarada en una imagen seleccionada |
| Outpaint | `mj-v7-outpaint` | expandir más allá del límite original de la imagen |
| Pan | `mj-v7-pan` | extender la composición en una dirección |
| Remix | `mj-v7-remix` | reinterpretar una imagen existente con un nuevo prompt |
| Retexture | `mj-v7-retexture` | cambiar textura o estilo preservando la estructura |
| Canvas Edit | `mj-v7-edit` | reposicionar la imagen en el lienzo y rellenar áreas en blanco |
| Enhance | `mj-v7-enhance` | mejorar una imagen generada seleccionada |
| Remove Background | `mj-v7-remove-bg` | generar recorte transparente del sujeto desde una imagen de entrada |
| Upload Paint | `mj-v7-upload-paint` | flujo de edición avanzada usando imagen subida, máscara y configuración de lienzo |

## Documentos Oficiales de la API

Las referencias detalladas de los flujos de trabajo se encuentran en documentos separados para que el README se mantenga enfocado en navegación, precios y guía de integración. Cada página a continuación está alineada con los materiales de referencia oficiales proporcionados para este repositorio.

Latest V8.1 docs:

- [V8.1 Image Generation](./docs/official-api/v8-1-image-generation.md)
- [V8.1 Variation](./docs/official-api/v8-1-variation.md)
- [V8.1 Remix](./docs/official-api/v8-1-remix.md)
- [V8.1 Retexture](./docs/official-api/v8-1-retexture.md)
- [V8.1 Upload Paint](./docs/official-api/v8-1-upload-paint.md)
- [V8.1 Canvas Edit](./docs/official-api/v8-1-canvas-edit.md)
- [V8.1 Remove Background](./docs/official-api/v8-1-remove-background.md)

Preserved V7 docs:

- [Generación de Imágenes](./docs/official-api/image-generation.md)
- [Imagen a Imagen y Referencia](./docs/official-api/image-to-image-and-reference.md)
- [Parámetros de Prompt](./docs/prompt-parameters.md)
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

## Descripción General de Parámetros de Prompt

Midjourney V7 admite sintaxis de parámetros nativos directamente dentro del campo `prompt`.

Midjourney V8.1 supports native parameter syntax inside the `prompt` field, but speed and output quality are API fields. Use top-level `quality` (`standard` or `hd`) and `model_params.speed` (`draft`, `fast`, or `turbo`). V8.1 `draft` returns 24 lightweight 0.5K sketch images and cannot be combined with `quality: hd`.

Preserved V7 parameter overview:

| Parámetro | Ejemplo | Propósito |
|---|---|---|
| `--ar` | `--ar 16:9` | relación de aspecto |
| `--s` | `--s 500` | intensidad de estilización |
| `--c` / `--chaos` | `--c 30` | diversidad de resultados |
| `--q` | `--q 2` | nivel de calidad |
| `--seed` | `--seed 12345` | exploración reproducible |
| `--no` | `--no text, watermark` | excluir elementos |
| `--iw` | `--iw 1.5` | peso del prompt de imagen |
| `--sref` | `--sref https://...` | referencia de estilo |
| `--oref` | `--oref https://...` | referencia de objeto |
| `--raw` | `--raw` | reducir embellecimiento |
| `--tile` | `--tile` | generación de patrones continuos |
| `--w` | `--w 500` | rareza |
| `--exp` | `--exp 25` | estética experimental |

Las reglas detalladas de parámetros están en [`docs/prompt-parameters.md`](./docs/prompt-parameters.md).

## Flujo de Integración

1. obtén una clave API en EvoLink.ai
2. crea una tarea de generación o edición con `POST /v1/images/generations`
3. almacena el ID de tarea devuelto
4. consulta `GET /v1/tasks/{task_id}` hasta que la tarea se complete
5. descarga y guarda las imágenes resultantes con rapidez porque los enlaces generados son temporales

## Ejemplos de Código

Latest V8.1 examples:

- [cURL: V8.1 generation](./examples/curl/generate-image-v8-1.sh)
- [JavaScript: V8.1 generation](./examples/javascript/basic-v8-1.mjs)

Preserved V7 examples:

- [cURL: generación básica](./examples/curl/generate-image.sh)
- [cURL: imagen a imagen](./examples/curl/image-to-image.sh)
- [cURL: upscale](./examples/curl/upscale.sh)
- [cURL: inpaint](./examples/curl/inpaint.sh)
- [JavaScript: generación básica](./examples/javascript/basic.mjs)
- [JavaScript: imagen a imagen](./examples/javascript/image-to-image.mjs)
- [JavaScript: upscale](./examples/javascript/upscale.mjs)
- [JavaScript: inpaint](./examples/javascript/inpaint.mjs)

## Comparación de Flujos de Trabajo

| Si necesitas... | Flujo recomendado | Por qué |
|---|---|---|
| generación inicial | `mj-v7` | generación de imágenes nativa V7 |
| usar una o más imágenes de referencia en el prompt | `mj-v7` | admite URLs de imágenes al inicio del prompt |
| cambiar solo un área local seleccionada | `mj-v7-inpaint` | edición basada en máscara |
| expandir la composición hacia afuera | `mj-v7-outpaint` | encuadre más amplio más allá de la imagen original |
| extender izquierda, derecha, arriba o abajo | `mj-v7-pan` | extensión direccional |
| reinterpretar un resultado con un nuevo prompt | `mj-v7-remix` | variación basada en prompt desde una tarea existente |
| preservar el diseño pero cambiar material o acabado | `mj-v7-retexture` | transformación de estilo y textura desde una imagen de entrada |
| recortar el sujeto de una imagen | `mj-v7-remove-bg` | no requiere prompt |
| reposicionar una imagen en un lienzo más grande | `mj-v7-edit` | expansión de lienzo con control de posición |

## Notas de Producción

- V8.1 is the latest integration path for new Midjourney image-generation work
- V8.1 generated image links are valid for 30 days according to the official V8.1 image-generation docs
- V8.1 speed is controlled with `model_params.speed`, not prompt flags
- V8.1 output resolution is controlled with top-level `quality`, not `--q` or `--hd`
- V8.1 `draft` returns 24 lightweight sketches and is incompatible with `quality: "hd"`
- V8.1 remove background only accepts `model` and `image_urls`
- todos los endpoints requieren autenticación con token Bearer
- los flujos de trabajo de generación y edición de Midjourney son asíncronos
- los callbacks deben usar HTTPS y no pueden apuntar a direcciones IP privadas
- el tiempo de espera del callback es de 10 segundos con hasta 3 reintentos
- los enlaces de imágenes generadas son válidos por 24 horas, guárdalos con rapidez
- `--v`, `--version` y `--niji` no son compatibles en solicitudes V7 aquí
- `--fast`, `--draft` y `--turbo` no deben escribirse en el prompt, usa `model_params.speed`
- los flujos de trabajo de edición generalmente requieren un ID de tarea completada y el número de imagen seleccionada
- remove background no usa parámetros de prompt ni de velocidad
- retexture y remove background aceptan URLs de imágenes de entrada directamente en lugar de depender de una tarea fuente

## Preguntas Frecuentes

### ¿Cómo se factura Midjourney API?
La generación de Midjourney V7 se factura por solicitud, no por imagen. Una solicitud apunta a 4 resultados, pero el filtrado de moderación puede reducir el número de imágenes devueltas.

### ¿Cómo hago imagen a imagen?
Coloca una o más URLs de imágenes al inicio del `prompt`, luego agrega tu descripción de texto y los parámetros de Midjourney.

### ¿Por qué los endpoints de edición necesitan un ID de tarea?
Operaciones como upscale, inpaint, outpaint, pan, enhance y remix trabajan sobre una imagen seleccionada de una tarea completada, por lo que requieren la referencia de la tarea original.

### ¿Puedo usar `--turbo` o `--draft` en el prompt?
No. La velocidad se controla mediante `model_params.speed`.

## Enlaces Relacionados

- [Página del Producto Midjourney V7](https://docs.evolink.ai/en/api-manual/image-series/midjourney/mj-v8-1-image-generate?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api)
- [Obtener Clave API](https://evolink.ai/signup?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api)
- [Documentación de Midjourney API](https://docs.evolink.ai/en/api-manual/image-series/midjourney/mj-v8-1-image-generate?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api)

## Nota del Repositorio

Este repositorio es un hub de documentación y ejemplos para el uso de Midjourney API en EvoLink.ai. Los materiales oficiales detallados de los flujos de trabajo están organizados bajo `docs/official-api/`, mientras que `mjv7参考/` permanece como material de referencia local y está excluido de las subidas mediante `.gitignore`.
