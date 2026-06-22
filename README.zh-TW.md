# Midjourney API：V8.1 與 V7 文件、工作流程和整合範例

<p align="center">
  <a href="./README.md">English</a> · <a href="./README.es.md">Español</a> · <a href="./README.pt.md">Português</a> · <a href="./README.ja.md">日本語</a> · <a href="./README.ko.md">한국어</a> · <a href="./README.de.md">Deutsch</a> · <a href="./README.fr.md">Français</a> · <a href="./README.tr.md">Türkçe</a> · <a href="./README.zh-TW.md">繁體中文</a> · <a href="./README.zh-CN.md">简体中文</a> · <a href="./README.ru.md">Русский</a>
</p>

<p align="center">
  <a href="https://docs.evolink.ai/en/api-manual/image-series/midjourney/mj-v8-1-image-generate?utm_source=github&utm_medium=banner&utm_campaign=midjourney-api">
    <img src="./assets/banner.jpg" alt="Midjourney API - V8.1 與 V7 官方文件和整合範例" width="100%" />
  </a>
</p>

<p align="center">
  透過 EvoLink 接入最新 Midjourney V8.1 圖像生成工作流程，同時保留既有整合使用的 V7 文件。
</p>

<p align="left">
  <a href="https://docs.evolink.ai/en/api-manual/image-series/midjourney/mj-v8-1-image-generate?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api">閱讀 V8.1 圖像生成文件</a> ·
  <a href="https://docs.evolink.ai/en/api-manual/image-series/midjourney/midjourney-v8-1-prompt-guide?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api">閱讀 V8.1 Prompt 指南</a> ·
  <a href="https://evolink.ai/signup?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api">取得 API 金鑰</a>
</p>

## EvoLink 快速開始

用一次 API 呼叫完成 Midjourney V8.1 圖像生成。

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

## 完整首次執行流程

Midjourney 生成與編輯都是非同步任務。正式整合時應建立任務、保存任務 ID、輪詢或接收 callback，並在結果連結過期前保存最終圖像 URL。

```bash
export EVOLINK_API_KEY="your_key_here"
bash examples/curl/complete-flow.sh
```

完整範例:

- [cURL 完整流程](./examples/curl/complete-flow.sh)
- [Python 完整流程](./examples/python/complete_flow.py)
- [JavaScript 完整流程](./examples/javascript/complete-flow.mjs)
- [cURL V8.1 生成](./examples/curl/generate-image-v8-1.sh)
- [JavaScript V8.1 生成](./examples/javascript/basic-v8-1.mjs)

## 什麼是 Midjourney API？

EvoLink.ai 上的 Midjourney API 讓開發者透過單一 API 金鑰存取 Midjourney 圖像生成和編輯工作流程。本倉庫現在涵蓋最新 Midjourney V8.1 生成系列，同時保留現有 Midjourney V7 工作流程參考，方便仍依賴 V7 模型 ID 的整合繼續使用。

本倉庫適合希望完成以下工作的開發者：

- 將 Midjourney V8.1 圖像生成接入正式產品
- 理解 V8.1 的速度、品質、prompt 參數和 工作流程 行為
- 在遷移過程中繼續保留 V7 範例
- 為生成、variation、remix、編輯、retexture 或 remove background 選擇正確操作

## 為什麼用 EvoLink 呼叫 Midjourney API

- 一個 API 金鑰即可使用 Midjourney V8.1，並保留 V7 範例
- 面向正式整合設計的非同步任務流程
- 透過頂層 `quality` 欄位啟用 V8.1 原生 HD 輸出
- 透過 `model_params.speed` 控制 V8.1 速度
- 支援 Midjourney 原生 prompt 參數和參考圖工作流程
- 支援任務完成場景的 HTTPS callback

## Midjourney V8.1 計費說明

V8.1 官方文件透過速度和品質倍率描述計費。本倉庫不為 V8.1 編造固定美元價格。

| 設定 | 取值 | 計費說明 |
|---|---|---|
| `model_params.speed` | `draft`, `fast`, `turbo` | `draft` / `fast` = 1x; `turbo` ≈ 2x |
| `quality` | `standard`, `hd` | `standard` = 1x; `hd` = 1.5x |
| 組合成本 | speed x quality | `turbo` + `hd` ≈ 3x |

> V8.1 `draft` 一次返回 24 張輕量 0.5K 草圖，不能與 `quality: "hd"` 組合。fast 和 turbo 每次生成返回 4 張圖像。

## 保留的 Midjourney V7 生成價格

| 模型 | 模式 | 速度 | 價格 | 備註 |
|---|---|---|---:|---|
| `mj-v7` | 圖像生成 | draft | $0.040 / 請求 | 約 2.7 點數；每次請求 4 張圖像 |
| `mj-v7` | 圖像生成 | fast | $0.079 / 請求 | 預設模式；约 5.4 點數 |
| `mj-v7` | 圖像生成 | turbo | $0.159 / 請求 | 優先模式；约 10.8 點數 |

## 最新 Midjourney V8.1 工作流程

| 工作流程 | 模型 | 說明 |
|---|---|---|
| 圖像生成 | `mj-v8.1` | 文字生成圖像和圖生圖，支援 V8.1 prompt 語法、`quality` 和 `speed` |
| 變體 | `mj-v8.1-variation` | 基於已完成的 V8.1 任務生成 subtle 或 strong 變體 |
| Remix | `mj-v8.1-remix` | 用必填的新 prompt 重新詮釋已完成結果 |
| Retexture | `mj-v8.1-retexture` | 直接從輸入圖像 URL 改變紋理或風格 |
| Upload Paint | `mj-v8.1-upload-paint` | 基於上傳圖像、mask 和位置欄位進行進階畫布編輯 |
| Canvas Edit | `mj-v8.1-edit` | 把既有任務圖像重新放到畫布上並填補空白區域 |
| 移除背景 | `mj-v8.1-remove-bg` | 從一個輸入圖像 URL 移除背景，不需要 prompt 或 speed |

## 保留的 Midjourney V7 工作流程

| 工作流程 | 模型 | 說明 |
|---|---|---|
| 圖像生成 | `mj-v7` | V7 文字生成圖像 / 图生图 |
| Upscale | `mj-v7-upscale` | 放大一张選中的圖像 |
| Inpaint | `mj-v7-inpaint` | 编辑遮罩區域 |
| Outpaint | `mj-v7-outpaint` | 擴展到圖像邊界之外 |
| Pan | `mj-v7-pan` | 向一個方向延展 |
| Remix | `mj-v7-remix` | 用新 prompt 重新詮釋 |
| Retexture | `mj-v7-retexture` | 在保留结构的同时改变紋理或風格 |
| Canvas Edit | `mj-v7-edit` | 重新定位圖像并填充空白區域 |
| Enhance | `mj-v7-enhance` | 改善選中的結果 |
| 移除背景 | `mj-v7-remove-bg` | 生成透明主體剪裁 |
| Upload Paint | `mj-v7-upload-paint` | 上傳圖像、遮罩和畫布的進階编辑 |

## 官方 API 文件

詳細 工作流程 參考放在獨立文件中，讓 README 聚焦導覽、計費說明和整合指引。

最新 V8.1 文件:

- [V8.1 圖像生成](./docs/official-api/v8-1-image-generation.md)
- [V8.1 變體](./docs/official-api/v8-1-variation.md)
- [V8.1 Remix](./docs/official-api/v8-1-remix.md)
- [V8.1 Retexture](./docs/official-api/v8-1-retexture.md)
- [V8.1 Upload Paint](./docs/official-api/v8-1-upload-paint.md)
- [V8.1 Canvas Edit](./docs/official-api/v8-1-canvas-edit.md)
- [V8.1 移除背景](./docs/official-api/v8-1-remove-background.md)
- [Prompt 參數](./docs/prompt-parameters.md)

保留的 V7 文件:

- [V7 圖像生成](./docs/official-api/image-generation.md)
- [V7 图生图与參考圖](./docs/official-api/image-to-image-and-reference.md)
- [V7 Upscale](./docs/official-api/upscale.md)
- [V7 Inpaint](./docs/official-api/inpaint.md)
- [V7 Outpaint](./docs/official-api/outpaint.md)
- [V7 Pan](./docs/official-api/pan.md)
- [V7 Remix](./docs/official-api/remix.md)
- [V7 Retexture](./docs/official-api/retexture.md)
- [V7 Canvas Edit](./docs/official-api/canvas-edit.md)
- [V7 Enhance](./docs/official-api/enhance.md)
- [V7 移除背景](./docs/official-api/remove-background.md)
- [V7 Upload Paint](./docs/official-api/upload-paint.md)

## Prompt 參數概覽

Midjourney V8.1 支援在 `prompt` 欄位中使用原生參數語法，但速度和輸出品質是 API 欄位。

| 控制項 | 設定位置 | 取值 |
|---|---|---|
| 速度 | `model_params.speed` | `draft`, `fast`, `turbo` |
| 輸出质量 | 顶层 `quality` | `standard`, `hd` |
| Prompt 參數 | `prompt` | `--ar`, `--c`, `--seed`, `--s`, `--exp`, `--raw`, `--iw`, `--sref`, `--sw`, `--oref`, `--ow` |

V8.1 在此路由不暴露 `--q`、`--no`、`--weird`、`--tile`、`--sv`、`--stop`、`--cref`、`--cw`、`--relax`、`--repeat`、`--p`、排列組合、public/stealth 標記、`--niji` 或 multi-prompt `::`。

## 整合流程

1. EvoLink.ai API 金鑰
2. `POST /v1/images/generations`
3. 保存任务 ID
4. 輪詢 `GET /v1/tasks/{task_id}` 或使用 callback
5. 在過期前保存最终圖像 URL

## 程式碼範例

最新 V8.1 範例:

- [cURL: V8.1 generation](./examples/curl/generate-image-v8-1.sh)
- [JavaScript: V8.1 generation](./examples/javascript/basic-v8-1.mjs)

保留的 V7 範例:

- [cURL：完整首次运行流程](./examples/curl/complete-flow.sh)
- [cURL：基礎生成](./examples/curl/generate-image.sh)
- [cURL：图生图](./examples/curl/image-to-image.sh)
- [cURL: upscale](./examples/curl/upscale.sh)
- [cURL: inpaint](./examples/curl/inpaint.sh)
- [Python：完整首次运行流程](./examples/python/complete_flow.py)
- [JavaScript：完整首次运行流程](./examples/javascript/complete-flow.mjs)
- [JavaScript：基礎生成](./examples/javascript/basic.mjs)
- [JavaScript：图生图](./examples/javascript/image-to-image.mjs)
- [JavaScript: upscale](./examples/javascript/upscale.mjs)
- [JavaScript: inpaint](./examples/javascript/inpaint.mjs)

## 工作流程對比

| 如果你需要... | 推薦 工作流程 | 原因 |
|---|---|---|
| 最新圖像生成 | `mj-v8.1` | 最新 V8.1 模型 |
| 快速草圖探索 | `mj-v8.1` + `speed: "draft"` | 24 张轻量 0.5K 草圖 |
| HD 輸出 | `mj-v8.1` + `quality: "hd"` | native HD 輸出 |
| 變體 | `mj-v8.1-variation` | subtle / strong 變體 |
| prompt 重新詮釋 | `mj-v8.1-remix` | 在保留來源結構的基礎上使用新 prompt |
| 畫布编辑 | `mj-v8.1-edit` | 重新定位并填充空白區域 |
| 上傳圖像编辑 | `mj-v8.1-upload-paint` | mask 与畫布工作流程 |
| 背景移除 | `mj-v8.1-remove-bg` | 不需要 prompt 或 speed 欄位 |
| 既有 V7 流程 | V7 模型 | 保留相容性 |

## 正式環境注意事項

- Bearer token 認證
- 非同步任务
- callback 必须使用 HTTPS，且不允许使用私有 IP URL
- callback 超时 10 秒，最多重试 3 次
- 根据官方文件，V8.1 圖像链接有效期为 30 天
- `model_params.speed` 控制速度
- 顶层 `quality` 控制输出分辨率
- `draft` 返回 24 张草圖，且不能与 `quality: "hd"` 组合
- `mj-v8.1-remove-bg` 只接受 `model` 和 `image_urls`
- V7 文件和示例保留用于相容既有集成

## 常見問題

### 新的 Midjourney API 整合應該用哪個模型？
預設使用 `mj-v8.1` 做新的圖像生成，除非你明確需要某個保留的 V7 工作流程。

### 如何啟用 V8.1 HD 輸出？
設定頂層欄位 `"quality": "hd"`，並把 `model_params.speed` 設為 `fast` 或 `turbo`。不要把 `hd` 和 `draft` 組合。

### 可以在 prompt 裡寫 `--turbo`、`--draft` 或 `--hd` 嗎？
不可以。速度透過 `model_params.speed` 控制，輸出品質透過頂層 `quality` 控制。

### 還能繼續使用 V7 範例嗎？
可以。V7 文件和範例是有意保留的，用於既有整合。

## 相關連結

- [Midjourney V8.1 圖像生成 Docs](https://docs.evolink.ai/en/api-manual/image-series/midjourney/mj-v8-1-image-generate?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api)
- [Midjourney V8.1 Prompt 指南](https://docs.evolink.ai/en/api-manual/image-series/midjourney/midjourney-v8-1-prompt-guide?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api)
- [Preserved Midjourney V7 圖像生成 Docs](https://docs.evolink.ai/en/api-manual/image-series/midjourney/mj-v7-image-generate?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api)
- [API 金鑰](https://evolink.ai/signup?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api)

## 倉庫說明

本倉庫是 EvoLink.ai 上 Midjourney API 的文件與範例中心。詳細官方 工作流程 資料整理在 `docs/official-api/` 下，`mjv7参考/` 作為本地參考資料保留，並透過 `.gitignore` 排除上傳。
