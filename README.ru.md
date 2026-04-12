# Midjourney API: Цены, Официальная Документация, Рабочие Процессы и Руководство по Интеграции

<p align="center">
  <a href="./README.md">English</a> · <a href="./README.es.md">Español</a> · <a href="./README.pt.md">Português</a> · <a href="./README.ja.md">日本語</a> · <a href="./README.ko.md">한국어</a> · <a href="./README.de.md">Deutsch</a> · <a href="./README.fr.md">Français</a> · <a href="./README.tr.md">Türkçe</a> · <a href="./README.zh-TW.md">繁體中文</a> · <a href="./README.zh-CN.md">简体中文</a> · <a href="./README.ru.md">Русский</a>
</p>

<p align="center">
  <a href="https://evolink.ai/midjourney-v7?utm_source=github&utm_medium=banner&utm_campaign=midjourney-api">
    <img src="./assets/banner.jpg" alt="Midjourney API - Цены, Официальная Документация и Руководство по Интеграции" width="100%" />
  </a>
</p>

<p align="center">
  Сравните цены на Midjourney API, изучите официальную документацию по рабочим процессам Midjourney V7 и интегрируйте генерацию и редактирование изображений через единый API.
</p>

## Быстрый Старт

Используйте генерацию изображений Midjourney V7 в одном вызове API.

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
  <a href="https://evolink.ai/midjourney-v7?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api">Посмотреть цены Midjourney API</a> ·
  <a href="https://evolink.ai/signup?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api">Получить ключ API</a> ·
  <a href="https://docs.evolink.ai/en/api-manual/image-series/midjourney/mj-v7-image-generate?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api">Читать документацию API</a>
</p>

## Что такое Midjourney API?

Midjourney API на EvoLink.ai предоставляет разработчикам доступ к рабочим процессам генерации и редактирования изображений Midjourney V7 через единый ключ API. На основе официальных материалов, предоставленных для этого репозитория, в настоящее время поддерживаются следующие операции: генерация изображений, преобразование изображения в изображение, рабочие процессы ссылок на стиль и объект, upscale, inpaint, outpaint, pan, remix, retexture, canvas edit, enhance, remove background и upload paint.

Этот репозиторий создан для разработчиков, которые хотят:

- понять цены и поведение при выставлении счетов Midjourney API
- изучить официальное покрытие рабочих процессов Midjourney V7 в одном месте
- выбрать правильную операцию Midjourney для задачи
- интегрировать генерацию и редактирование Midjourney в производственные приложения

## Почему стоит использовать EvoLink для Midjourney API?

- один ключ API для рабочих процессов генерации и редактирования Midjourney V7
- прозрачная цена за запрос для генерации в режимах draft, fast и turbo
- асинхронный поток задач, разработанный для производственной интеграции
- поддержка нативных параметров prompt Midjourney V7 и рабочих процессов ссылок
- поддержка HTTPS-callback для рабочих процессов завершения задач
- позиционирование 99,9% времени безотказной работы на официальной странице продукта

## Цены на Midjourney API

Приведенные ниже цены соответствуют справочнику продукта Midjourney V7, предоставленному для этого репозитория.

| Модель | Режим | Скорость | Цена | Примечания |
|---|---|---|---:|---|
| `mj-v7` | генерация изображений | draft | $0,040 / запрос | около 2,7 кредитов, 4 изображения за запрос |
| `mj-v7` | генерация изображений | fast | $0,079 / запрос | режим по умолчанию, около 5,4 кредитов |
| `mj-v7` | генерация изображений | turbo | $0,159 / запрос | приоритетный режим, около 10,8 кредитов |

> Каждый запрос производит 4 изображения. Модерация контента Midjourney может отфильтровать некоторые выходные данные, поэтому возвращаемый результат может содержать от 1 до 4 изображений. Выставление счетов производится за запрос, а не за изображение.

## Поддерживаемые Рабочие Процессы Midjourney V7

| Рабочий процесс | Модель | Описание |
|---|---|---|
| Генерация изображений | `mj-v7` | текст в изображение и изображение в изображение с нативным синтаксисом prompt Midjourney V7 |
| Upscale | `mj-v7-upscale` | увеличить одно выбранное изображение из завершённой задачи |
| Inpaint | `mj-v7-inpaint` | редактировать замаскированную область на выбранном изображении |
| Outpaint | `mj-v7-outpaint` | расширить за пределы исходной границы изображения |
| Pan | `mj-v7-pan` | расширить композицию в одном направлении |
| Remix | `mj-v7-remix` | переинтерпретировать существующее изображение с новым prompt |
| Retexture | `mj-v7-retexture` | изменить текстуру или стиль, сохранив структуру |
| Canvas Edit | `mj-v7-edit` | перепозиционировать изображение на холсте и заполнить пустые области |
| Enhance | `mj-v7-enhance` | улучшить одно выбранное сгенерированное изображение |
| Remove Background | `mj-v7-remove-bg` | сгенерировать прозрачный силуэт объекта из входного изображения |
| Upload Paint | `mj-v7-upload-paint` | расширенный поток редактирования с использованием загруженного изображения, маски и настроек холста |

## Официальная Документация API

Подробные справочники рабочих процессов находятся в отдельных документах, чтобы README оставался сосредоточенным на навигации, ценах и руководстве по интеграции. Каждая страница ниже соответствует официальным справочным материалам, предоставленным для этого репозитория.

- [Генерация изображений](./docs/official-api/image-generation.md)
- [Изображение в изображение и ссылки](./docs/official-api/image-to-image-and-reference.md)
- [Параметры prompt](./docs/prompt-parameters.md)
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

## Обзор Параметров Prompt

Midjourney V7 поддерживает нативный синтаксис параметров непосредственно в поле `prompt`.

| Параметр | Пример | Назначение |
|---|---|---|
| `--ar` | `--ar 16:9` | соотношение сторон |
| `--s` | `--s 500` | сила стилизации |
| `--c` / `--chaos` | `--c 30` | разнообразие результатов |
| `--q` | `--q 2` | уровень качества |
| `--seed` | `--seed 12345` | воспроизводимое исследование |
| `--no` | `--no text, watermark` | исключить элементы |
| `--iw` | `--iw 1.5` | вес изображения в prompt |
| `--sref` | `--sref https://...` | ссылка на стиль |
| `--oref` | `--oref https://...` | ссылка на объект |
| `--raw` | `--raw` | уменьшить украшение |
| `--tile` | `--tile` | генерация бесшовного узора |
| `--w` | `--w 500` | странность |
| `--exp` | `--exp 25` | экспериментальная эстетика |

Подробные правила параметров находятся в [`docs/prompt-parameters.md`](./docs/prompt-parameters.md).

## Рабочий Процесс Интеграции

1. получить ключ API на EvoLink.ai
2. создать задачу генерации или редактирования с помощью `POST /v1/images/generations`
3. сохранить возвращённый идентификатор задачи
4. опрашивать `GET /v1/tasks/{task_id}` до завершения задачи
5. незамедлительно скачать и сохранить полученные изображения, так как сгенерированные ссылки временны

## Примеры Кода

- [cURL: базовая генерация](./examples/curl/generate-image.sh)
- [cURL: изображение в изображение](./examples/curl/image-to-image.sh)
- [cURL: upscale](./examples/curl/upscale.sh)
- [cURL: inpaint](./examples/curl/inpaint.sh)
- [JavaScript: базовая генерация](./examples/javascript/basic.mjs)
- [JavaScript: изображение в изображение](./examples/javascript/image-to-image.mjs)
- [JavaScript: upscale](./examples/javascript/upscale.mjs)
- [JavaScript: inpaint](./examples/javascript/inpaint.mjs)

## Сравнение Рабочих Процессов

| Если нужно... | Рекомендуемый рабочий процесс | Почему |
|---|---|---|
| первичная генерация | `mj-v7` | нативная генерация изображений V7 |
| использовать одно или несколько опорных изображений в prompt | `mj-v7` | поддерживает URL-адреса изображений в начале prompt |
| изменить только выбранную локальную область | `mj-v7-inpaint` | редактирование на основе маски |
| расширить композицию наружу | `mj-v7-outpaint` | более широкий кадр за пределами исходного изображения |
| расширить влево, вправо, вверх или вниз | `mj-v7-pan` | направленное расширение |
| переинтерпретировать один результат с новым prompt | `mj-v7-remix` | вариация на основе prompt из существующей задачи |
| сохранить компоновку, но изменить материал или отделку | `mj-v7-retexture` | преобразование стиля и текстуры из входного изображения |
| вырезать объект из одного изображения | `mj-v7-remove-bg` | prompt не требуется |
| перепозиционировать изображение на большем холсте | `mj-v7-edit` | расширение холста с управлением расположением |

## Замечания по Производственному Использованию

- все конечные точки требуют аутентификации с токеном Bearer
- рабочие процессы генерации и редактирования Midjourney являются асинхронными
- обратные вызовы должны использовать HTTPS и не могут быть направлены на частные IP-адреса
- тайм-аут обратного вызова составляет 10 секунд с максимум 3 повторными попытками
- сгенерированные ссылки на изображения действительны в течение 24 часов, сохраняйте их незамедлительно
- `--v`, `--version` и `--niji` не поддерживаются в запросах V7 здесь
- `--fast`, `--draft` и `--turbo` не должны быть записаны в prompt, используйте `model_params.speed`
- рабочие процессы редактирования обычно требуют завершённого идентификатора задачи и выбранного номера изображения
- remove background не использует параметры prompt или скорости
- retexture и remove background принимают URL-адреса входных изображений напрямую, не полагаясь на исходную задачу

## Часто Задаваемые Вопросы

### Как выставляется счёт за Midjourney API?
Генерация Midjourney V7 оплачивается за запрос, а не за изображение. Один запрос нацелен на 4 выходных результата, но фильтрация модерации может уменьшить количество возвращаемых изображений.

### Как выполнить преобразование изображения в изображение?
Поместите один или несколько URL-адресов изображений в начало поля `prompt`, затем добавьте текстовое описание и параметры Midjourney.

### Почему конечным точкам редактирования нужен идентификатор задачи?
Операции типа upscale, inpaint, outpaint, pan, enhance и remix работают с выбранным изображением из завершённой задачи, поэтому им требуется ссылка на исходную задачу.

### Могу ли я использовать `--turbo` или `--draft` в prompt?
Нет. Скорость управляется через `model_params.speed`.

## Связанные Ссылки

- [Страница продукта Midjourney V7](https://evolink.ai/midjourney-v7?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api)
- [Получить ключ API](https://evolink.ai/signup?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api)
- [Документация Midjourney API](https://docs.evolink.ai/en/api-manual/image-series/midjourney/mj-v7-image-generate?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api)

## Примечание о Репозитории

Этот репозиторий является центром документации и примеров для использования Midjourney API на EvoLink.ai. Подробные официальные материалы по рабочим процессам организованы в `docs/official-api/`, тогда как `mjv7参考/` остаётся локальным справочным материалом и исключён из загрузок через `.gitignore`.
