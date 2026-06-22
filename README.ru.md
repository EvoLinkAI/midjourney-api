# Midjourney API: документация V8.1 и V7, рабочие процессы и примеры интеграции

<p align="center">
  <a href="./README.md">English</a> · <a href="./README.es.md">Español</a> · <a href="./README.pt.md">Português</a> · <a href="./README.ja.md">日本語</a> · <a href="./README.ko.md">한국어</a> · <a href="./README.de.md">Deutsch</a> · <a href="./README.fr.md">Français</a> · <a href="./README.tr.md">Türkçe</a> · <a href="./README.zh-TW.md">繁體中文</a> · <a href="./README.zh-CN.md">简体中文</a> · <a href="./README.ru.md">Русский</a>
</p>

<p align="center">
  <a href="https://docs.evolink.ai/en/api-manual/image-series/midjourney/mj-v8-1-image-generate?utm_source=github&utm_medium=banner&utm_campaign=midjourney-api">
    <img src="./assets/banner.jpg" alt="Midjourney API - официальная документация V8.1 и V7 и примеры интеграции" width="100%" />
  </a>
</p>

<p align="center">
  Интегрируйте новейшие рабочие процессы генерации изображений Midjourney V8.1 через EvoLink и сохраняйте документацию V7 для существующих интеграций.
</p>

<p align="left">
  <a href="https://docs.evolink.ai/en/api-manual/image-series/midjourney/mj-v8-1-image-generate?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api">Читать документацию V8.1</a> ·
  <a href="https://docs.evolink.ai/en/api-manual/image-series/midjourney/midjourney-v8-1-prompt-guide?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api">Читать руководство по prompt V8.1</a> ·
  <a href="https://evolink.ai/signup?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api">Получить API-ключ</a>
</p>

## Быстрый старт EvoLink

Используйте генерацию изображений Midjourney V8.1 одним API-вызовом.

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

## Полный первый запуск

Генерация и редактирование Midjourney асинхронны. В production-интеграции нужно создать задачу, сохранить ID, опрашивать статус или принимать callback и сохранить финальные URL изображений до истечения срока действия.

```bash
export EVOLINK_API_KEY="your_key_here"
bash examples/curl/complete-flow.sh
```

Полные примеры:

- [cURL complete flow](./examples/curl/complete-flow.sh)
- [Python complete flow](./examples/python/complete_flow.py)
- [JavaScript complete flow](./examples/javascript/complete-flow.mjs)
- [cURL V8.1 generation](./examples/curl/generate-image-v8-1.sh)
- [JavaScript V8.1 generation](./examples/javascript/basic-v8-1.mjs)

## Что такое Midjourney API?

Midjourney API на EvoLink.ai дает разработчикам доступ к рабочим процессам генерации и редактирования изображений Midjourney через единый API-ключ. Этот репозиторий теперь покрывает новейшую линейку Midjourney V8.1 и сохраняет справочные материалы V7 для интеграций, которые всё ещё зависят от ID моделей V7.

Этот репозиторий создан для разработчиков, которым нужно:

- интегрировать генерацию изображений Midjourney V8.1 в production-приложения
- понять скорость, качество, параметры prompt и поведение workflow в V8.1
- сохранить примеры V7 на время миграции
- выбрать правильную операцию для генерации, variation, remix, редактирования, retexture или удаления фона

## Почему использовать EvoLink для Midjourney API

- один API-ключ для Midjourney V8.1 и сохранённых примеров V7
- асинхронный поток задач для production-интеграции
- нативный HD-вывод V8.1 через верхнеуровневое поле `quality`
- управление скоростью V8.1 через `model_params.speed`
- поддержка нативных параметров prompt и reference-workflow Midjourney
- HTTPS callback для завершения задач

## Примечания о ценах Midjourney V8.1

Официальная документация V8.1 описывает оплату через множители скорости и качества. Этот репозиторий не придумывает фиксированные долларовые цены для V8.1.

| Настройка | Значения | Примечание об оплате |
|---|---|---|
| `model_params.speed` | `draft`, `fast`, `turbo` | `draft` / `fast` = 1x; `turbo` ≈ 2x |
| `quality` | `standard`, `hd` | `standard` = 1x; `hd` = 1.5x |
| Комбинированная стоимость | speed x quality | `turbo` + `hd` ≈ 3x |

> V8.1 `draft` возвращает 24 лёгких 0.5K-эскиза за один запуск и не совместим с `quality: "hd"`. Режимы fast и turbo возвращают 4 изображения за генерацию.

## Сохранённые цены генерации Midjourney V7

| Модель | Режим | Скорость | Цена | Примечания |
|---|---|---|---:|---|
| `mj-v7` | генерация изображений | draft | $0.040 / запрос | 2,7 кредита; 4 изображения за запрос |
| `mj-v7` | генерация изображений | fast | $0.079 / запрос | режим по умолчанию; 5,4 кредита |
| `mj-v7` | генерация изображений | turbo | $0.159 / запрос | приоритетный режим; 10,8 кредита |

## Новейшие рабочие процессы Midjourney V8.1

| Workflow | Модель | Описание |
|---|---|---|
| Генерация изображений | `mj-v8.1` | text-to-image и изображение-в-изображение с синтаксисом V8.1, `quality` и `speed` |
| Вариация | `mj-v8.1-variation` | создание subtle или strong вариантов из завершённой задачи V8.1 |
| Remix | `mj-v8.1-remix` | переинтерпретация результата с обязательным новым prompt |
| Retexture | `mj-v8.1-retexture` | изменение текстуры или стиля напрямую из URL изображения |
| Upload Paint | `mj-v8.1-upload-paint` | расширенное редактирование canvas с загруженным изображением, mask и позицией |
| Canvas Edit | `mj-v8.1-edit` | перемещение изображения задачи на canvas и заполнение пустых областей |
| Удаление фона | `mj-v8.1-remove-bg` | удаление фона из URL изображения без prompt и speed |

## Сохранённые рабочие процессы Midjourney V7

| Workflow | Модель | Описание |
|---|---|---|
| Генерация изображений | `mj-v7` | V7 текст-в-изображение / изображение-в-изображение |
| Upscale | `mj-v7-upscale` | увеличить выбранное изображение |
| Inpaint | `mj-v7-inpaint` | редактировать область маски |
| Outpaint | `mj-v7-outpaint` | расширить за границы изображения |
| Pan | `mj-v7-pan` | расширить в одном направлении |
| Remix | `mj-v7-remix` | переинтерпретировать с новым prompt |
| Retexture | `mj-v7-retexture` | изменить текстуру/стиль, сохранив структуру |
| Canvas Edit | `mj-v7-edit` | переместить изображение и заполнить пустые области |
| Enhance | `mj-v7-enhance` | улучшить выбранный результат |
| Удаление фона | `mj-v7-remove-bg` | прозрачная вырезка объекта |
| Upload Paint | `mj-v7-upload-paint` | расширенное редактирование upload/mask/canvas |

## Официальная документация API

Подробные workflow-справки вынесены в отдельные документы, чтобы README фокусировался на навигации, ценовых заметках и интеграции.

Новейшая документация V8.1:

- [V8.1 Генерация изображений](./docs/official-api/v8-1-image-generation.md)
- [V8.1 Вариация](./docs/official-api/v8-1-variation.md)
- [V8.1 Remix](./docs/official-api/v8-1-remix.md)
- [V8.1 Retexture](./docs/official-api/v8-1-retexture.md)
- [V8.1 Upload Paint](./docs/official-api/v8-1-upload-paint.md)
- [V8.1 Canvas Edit](./docs/official-api/v8-1-canvas-edit.md)
- [V8.1 Удаление фона](./docs/official-api/v8-1-remove-background.md)
- [Параметры prompt](./docs/prompt-parameters.md)

Сохранённая документация V7:

- [V7 Генерация изображений](./docs/official-api/image-generation.md)
- [V7 изображение-в-изображение и reference](./docs/official-api/image-to-image-and-reference.md)
- [V7 Upscale](./docs/official-api/upscale.md)
- [V7 Inpaint](./docs/official-api/inpaint.md)
- [V7 Outpaint](./docs/official-api/outpaint.md)
- [V7 Pan](./docs/official-api/pan.md)
- [V7 Remix](./docs/official-api/remix.md)
- [V7 Retexture](./docs/official-api/retexture.md)
- [V7 Canvas Edit](./docs/official-api/canvas-edit.md)
- [V7 Enhance](./docs/official-api/enhance.md)
- [V7 Удаление фона](./docs/official-api/remove-background.md)
- [V7 Upload Paint](./docs/official-api/upload-paint.md)

## Обзор параметров prompt

Midjourney V8.1 поддерживает нативный синтаксис параметров внутри `prompt`, но скорость и качество вывода задаются полями API.

| Параметр | Где задаётся | Значения |
|---|---|---|
| Скорость | `model_params.speed` | `draft`, `fast`, `turbo` |
| Качество вывода | верхнеуровневое `quality` | `standard`, `hd` |
| Параметры prompt | `prompt` | `--ar`, `--c`, `--seed`, `--s`, `--exp`, `--raw`, `--iw`, `--sref`, `--sw`, `--oref`, `--ow` |

V8.1 на этом маршруте не предоставляет `--q`, `--no`, `--weird`, `--tile`, `--sv`, `--stop`, `--cref`, `--cw`, `--relax`, `--repeat`, `--p`, перестановки, флаги public/stealth, `--niji` и multi-prompt `::`.

## Поток интеграции

1. API-ключ EvoLink.ai
2. `POST /v1/images/generations`
3. сохранить ID задачи
4. опрашивать `GET /v1/tasks/{task_id}` или использовать callback
5. сохранить финальные URL изображений до истечения срока

## Примеры кода

Новейшие примеры V8.1:

- [cURL: V8.1 generation](./examples/curl/generate-image-v8-1.sh)
- [JavaScript: V8.1 generation](./examples/javascript/basic-v8-1.mjs)

Сохранённые примеры V7:

- [cURL: полный первый запуск](./examples/curl/complete-flow.sh)
- [cURL: базовая генерация](./examples/curl/generate-image.sh)
- [cURL: изображение-в-изображение](./examples/curl/image-to-image.sh)
- [cURL: upscale](./examples/curl/upscale.sh)
- [cURL: inpaint](./examples/curl/inpaint.sh)
- [Python: полный первый запуск](./examples/python/complete_flow.py)
- [JavaScript: полный первый запуск](./examples/javascript/complete-flow.mjs)
- [JavaScript: базовая генерация](./examples/javascript/basic.mjs)
- [JavaScript: изображение-в-изображение](./examples/javascript/image-to-image.mjs)
- [JavaScript: upscale](./examples/javascript/upscale.mjs)
- [JavaScript: inpaint](./examples/javascript/inpaint.mjs)

## Сравнение workflow

| Если вам нужно... | Рекомендуемый workflow | Почему |
|---|---|---|
| новейшая генерация | `mj-v8.1` | новейшая модель V8.1 |
| быстрые эскизы | `mj-v8.1` + `speed: "draft"` | 24 лёгких 0.5K-эскиза |
| HD-вывод | `mj-v8.1` + `quality: "hd"` | нативный HD-вывод |
| варианты | `mj-v8.1-variation` | subtle / strong варианты |
| переинтерпретация prompt | `mj-v8.1-remix` | новый prompt с исходной структурой |
| редактирование canvas | `mj-v8.1-edit` | переместить и заполнить пустые области |
| редактирование загруженного изображения | `mj-v8.1-upload-paint` | workflow маски и canvas |
| удаление фона | `mj-v8.1-remove-bg` | без полей prompt и speed |
| существующие V7-потоки | V7 模型 | сохранённая совместимость |

## Production-примечания

- аутентификация Bearer token
- асинхронные задачи
- только HTTPS callback; URL с частными IP запрещены
- timeout callback 10 секунд, до 3 повторов
- согласно официальной документации, ссылки на изображения V8.1 действуют 30 дней
- `model_params.speed` управляет скоростью
- верхнеуровневое `quality` управляет разрешением вывода
- `draft` возвращает 24 эскиза и несовместим с `quality: "hd"`
- `mj-v8.1-remove-bg` принимает только `model` и `image_urls`
- документы и примеры V7 сохранены для совместимости

## FAQ

### Какую модель использовать для новых интеграций Midjourney API?
Используйте `mj-v8.1` для новой генерации изображений, если вам не нужен конкретный сохранённый workflow V7.

### Как включить HD-вывод в V8.1?
Установите `"quality": "hd"` на верхнем уровне и используйте `model_params.speed` как `fast` или `turbo`. Не сочетайте `hd` с `draft`.

### Можно ли писать `--turbo`, `--draft` или `--hd` в prompt?
Нет. Скорость задаётся через `model_params.speed`, а качество вывода — через верхнеуровневое поле `quality`.

### Можно ли продолжать использовать примеры V7?
Да. Документация и примеры V7 намеренно сохранены для существующих интеграций.

## Связанные ссылки

- [Midjourney V8.1 Генерация изображений Docs](https://docs.evolink.ai/en/api-manual/image-series/midjourney/mj-v8-1-image-generate?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api)
- [Midjourney V8.1 Prompt Guide](https://docs.evolink.ai/en/api-manual/image-series/midjourney/midjourney-v8-1-prompt-guide?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api)
- [Preserved Midjourney V7 Генерация изображений Docs](https://docs.evolink.ai/en/api-manual/image-series/midjourney/mj-v7-image-generate?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api)
- [API-ключ](https://evolink.ai/signup?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api)

## Примечание о репозитории

Этот репозиторий является центром документации и примеров для Midjourney API на EvoLink.ai. Подробные официальные workflow организованы в `docs/official-api/`, а `mjv7参考/` остаётся локальной справкой и исключён из загрузки через `.gitignore`.
