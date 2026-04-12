# Midjourney API: Precios, Documentación Oficial, Flujos de Trabajo y Guía de Integración

<p align="center">
  <a href="./README.md">English</a> · <a href="./README.es.md">Español</a> · <a href="./README.pt.md">Português</a> · <a href="./README.ja.md">日本語</a> · <a href="./README.ko.md">한국어</a> · <a href="./README.de.md">Deutsch</a> · <a href="./README.fr.md">Français</a> · <a href="./README.tr.md">Türkçe</a> · <a href="./README.zh-TW.md">繁體中文</a> · <a href="./README.zh-CN.md">简体中文</a> · <a href="./README.ru.md">Русский</a>
</p>

<p align="center">
  <a href="https://evolink.ai/midjourney-v7?utm_source=github&utm_medium=banner&utm_campaign=midjourney-api">
    <img src="./assets/banner.jpg" alt="Midjourney API - Precios, Documentación Oficial y Guía de Integración" width="100%" />
  </a>
</p>

<p align="center">
  Compara los precios de Midjourney API, revisa la documentación oficial del flujo de trabajo de Midjourney V7, e integra la generación y edición de imágenes a través de una API unificada.
</p>

## Inicio Rápido

Usa la generación de imágenes de Midjourney V7 en una sola llamada a la API.

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
  <a href="https://evolink.ai/midjourney-v7?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api">Ver Precios de Midjourney API</a> ·
  <a href="https://evolink.ai/signup?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api">Obtener Clave API</a> ·
  <a href="https://docs.evolink.ai/en/api-manual/image-series/midjourney/mj-v7-image-generate?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api">Leer Documentación API</a>
</p>

## ¿Qué es Midjourney API?

Midjourney API en EvoLink.ai proporciona a los desarrolladores acceso a los flujos de trabajo de generación y edición de imágenes de Midjourney V7 mediante una clave API unificada. Según las referencias oficiales proporcionadas para este repositorio, las operaciones cubiertas actualmente incluyen: generación de imágenes, imagen a imagen, flujos de referencia de estilo y objeto, upscale, inpaint, outpaint, pan, remix, retexture, canvas edit, enhance, remove background y upload paint.

Este repositorio está construido para desarrolladores que quieran:

- entender los precios y el comportamiento de facturación de Midjourney API
- revisar la cobertura oficial de flujos de trabajo de Midjourney V7 en un solo lugar
- elegir la operación de Midjourney adecuada para cada tarea
- integrar la generación y edición de Midjourney en aplicaciones de producción

## ¿Por Qué Usar EvoLink para Midjourney API?

- una clave API para los flujos de trabajo de generación y edición de Midjourney V7
- precios transparentes por solicitud para generación en modo draft, fast y turbo
- flujo de tareas asíncrono diseñado para integración en producción
- soporte para parámetros de prompt nativos de Midjourney V7 y flujos de referencia
- soporte de callbacks HTTPS para flujos de finalización de tareas
- posicionamiento de 99.9% de uptime en la página oficial del producto

## Precios de Midjourney API

Los precios a continuación siguen la referencia del producto Midjourney V7 proporcionada para este repositorio.

| Modelo | Modo | Velocidad | Precio | Notas |
|---|---|---|---:|---|
| `mj-v7` | generación de imágenes | draft | $0.040 / solicitud | aprox. 2.7 créditos, 4 imágenes por solicitud |
| `mj-v7` | generación de imágenes | fast | $0.079 / solicitud | modo predeterminado, aprox. 5.4 créditos |
| `mj-v7` | generación de imágenes | turbo | $0.159 / solicitud | modo prioritario, aprox. 10.8 créditos |

> Cada solicitud produce 4 imágenes. La moderación de contenido de Midjourney puede filtrar algunos resultados, por lo que el resultado devuelto puede contener entre 1 y 4 imágenes. La facturación es por solicitud, no por imagen.

## Flujos de Trabajo de Midjourney V7 Compatibles

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

- [Página del Producto Midjourney V7](https://evolink.ai/midjourney-v7?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api)
- [Obtener Clave API](https://evolink.ai/signup?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api)
- [Documentación de Midjourney API](https://docs.evolink.ai/en/api-manual/image-series/midjourney/mj-v7-image-generate?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api)

## Nota del Repositorio

Este repositorio es un hub de documentación y ejemplos para el uso de Midjourney API en EvoLink.ai. Los materiales oficiales detallados de los flujos de trabajo están organizados bajo `docs/official-api/`, mientras que `mjv7参考/` permanece como material de referencia local y está excluido de las subidas mediante `.gitignore`.
