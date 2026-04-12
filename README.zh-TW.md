# Midjourney API：定價、官方文件、工作流程與整合指南

<p align="center">
  <a href="./README.md">English</a> · <a href="./README.es.md">Español</a> · <a href="./README.pt.md">Português</a> · <a href="./README.ja.md">日本語</a> · <a href="./README.ko.md">한국어</a> · <a href="./README.de.md">Deutsch</a> · <a href="./README.fr.md">Français</a> · <a href="./README.tr.md">Türkçe</a> · <a href="./README.zh-TW.md">繁體中文</a> · <a href="./README.zh-CN.md">简体中文</a> · <a href="./README.ru.md">Русский</a>
</p>

<p align="center">
  <a href="https://evolink.ai/midjourney-v7?utm_source=github&utm_medium=banner&utm_campaign=midjourney-api">
    <img src="./assets/banner.jpg" alt="Midjourney API - 定價、官方文件與整合指南" width="100%" />
  </a>
</p>

<p align="center">
  比較 Midjourney API 定價，查閱官方 Midjourney V7 工作流程文件，並透過單一統一 API 整合圖像生成與編輯功能。
</p>

## 快速開始

透過一次 API 呼叫使用 Midjourney V7 圖像生成。

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
  <a href="https://evolink.ai/midjourney-v7?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api">查看 Midjourney API 定價</a> ·
  <a href="https://evolink.ai/signup?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api">取得 API 金鑰</a> ·
  <a href="https://docs.evolink.ai/en/api-manual/image-series/midjourney/mj-v7-image-generate?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api">閱讀 API 文件</a>
</p>

## 什麼是 Midjourney API？

EvoLink.ai 上的 Midjourney API 讓開發者透過單一統一 API 金鑰存取 Midjourney V7 圖像生成與編輯工作流程。根據本儲存庫提供的官方參考資料，目前涵蓋的操作包括：圖像生成、圖像轉圖像、風格與物件參考工作流程、upscale、inpaint、outpaint、pan、remix、retexture、canvas edit、enhance、remove background 及 upload paint。

本儲存庫為以下需求的開發者而建立：

- 了解 Midjourney API 定價與計費行為
- 在同一處查閱 Midjourney V7 官方工作流程涵蓋範圍
- 為任務選擇正確的 Midjourney 操作
- 將 Midjourney 生成與編輯整合至正式應用程式

## 為何使用 EvoLink 呼叫 Midjourney API？

- 一組 API 金鑰即可使用 Midjourney V7 生成與編輯工作流程
- draft、fast、turbo 生成的透明按請求定價
- 專為正式環境整合設計的非同步任務流程
- 支援 Midjourney V7 原生 prompt 參數與參考工作流程
- 任務完成工作流程的 HTTPS callback 支援
- 官方產品頁面上的 99.9% 正常運行時間定位

## Midjourney API 定價

以下定價依據本儲存庫提供的 Midjourney V7 產品參考資料。

| 模型 | 模式 | 速度 | 價格 | 備註 |
|---|---|---|---:|---|
| `mj-v7` | 圖像生成 | draft | $0.040 / 請求 | 約 2.7 點數，每次請求 4 張圖像 |
| `mj-v7` | 圖像生成 | fast | $0.079 / 請求 | 預設模式，約 5.4 點數 |
| `mj-v7` | 圖像生成 | turbo | $0.159 / 請求 | 優先模式，約 10.8 點數 |

> 每次請求產生 4 張圖像。Midjourney 內容審核可能過濾部分輸出，因此回傳結果可能包含 1 至 4 張圖像。計費以請求為單位，而非以圖像為單位。

## 支援的 Midjourney V7 工作流程

| 工作流程 | 模型 | 說明 |
|---|---|---|
| 圖像生成 | `mj-v7` | 使用 Midjourney V7 原生 prompt 語法進行文字轉圖像與圖像轉圖像 |
| Upscale | `mj-v7-upscale` | 從已完成任務中放大所選的一張圖像 |
| Inpaint | `mj-v7-inpaint` | 編輯所選圖像中的遮罩區域 |
| Outpaint | `mj-v7-outpaint` | 向原始圖像邊界以外擴展 |
| Pan | `mj-v7-pan` | 向單一方向延伸構圖 |
| Remix | `mj-v7-remix` | 以新 prompt 重新詮釋現有圖像 |
| Retexture | `mj-v7-retexture` | 在保留結構的同時更改紋理或風格 |
| Canvas Edit | `mj-v7-edit` | 在畫布上重新定位圖像並填補空白區域 |
| Enhance | `mj-v7-enhance` | 改善所選的已生成圖像 |
| Remove Background | `mj-v7-remove-bg` | 從輸入圖像生成透明主體剪裁 |
| Upload Paint | `mj-v7-upload-paint` | 使用上傳圖像、遮罩與畫布設定的進階編輯流程 |

## 官方 API 文件

詳細的工作流程參考資料放在獨立文件中，讓 README 專注於導航、定價與整合說明。以下每個頁面均與本儲存庫提供的官方參考資料保持一致。

- [圖像生成](./docs/official-api/image-generation.md)
- [圖像轉圖像與參考](./docs/official-api/image-to-image-and-reference.md)
- [Prompt 參數](./docs/prompt-parameters.md)
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

## Prompt 參數概覽

Midjourney V7 在 `prompt` 欄位中直接支援原生參數語法。

| 參數 | 範例 | 用途 |
|---|---|---|
| `--ar` | `--ar 16:9` | 長寬比 |
| `--s` | `--s 500` | 風格化強度 |
| `--c` / `--chaos` | `--c 30` | 結果多樣性 |
| `--q` | `--q 2` | 品質等級 |
| `--seed` | `--seed 12345` | 可重現探索 |
| `--no` | `--no text, watermark` | 排除元素 |
| `--iw` | `--iw 1.5` | 圖像 prompt 權重 |
| `--sref` | `--sref https://...` | 風格參考 |
| `--oref` | `--oref https://...` | 物件參考 |
| `--raw` | `--raw` | 減少美化 |
| `--tile` | `--tile` | 無縫圖案生成 |
| `--w` | `--w 500` | 奇異度 |
| `--exp` | `--exp 25` | 實驗性美學 |

詳細參數規則請見 [`docs/prompt-parameters.md`](./docs/prompt-parameters.md)。

## 整合工作流程

1. 從 EvoLink.ai 取得 API 金鑰
2. 使用 `POST /v1/images/generations` 建立生成或編輯任務
3. 儲存回傳的任務 ID
4. 持續輪詢 `GET /v1/tasks/{task_id}` 直到任務完成
5. 盡快下載並儲存結果圖像，因為生成的連結為臨時連結

## 程式碼範例

- [cURL：基本生成](./examples/curl/generate-image.sh)
- [cURL：圖像轉圖像](./examples/curl/image-to-image.sh)
- [cURL：upscale](./examples/curl/upscale.sh)
- [cURL：inpaint](./examples/curl/inpaint.sh)
- [JavaScript：基本生成](./examples/javascript/basic.mjs)
- [JavaScript：圖像轉圖像](./examples/javascript/image-to-image.mjs)
- [JavaScript：upscale](./examples/javascript/upscale.mjs)
- [JavaScript：inpaint](./examples/javascript/inpaint.mjs)

## 工作流程比較

| 需求 | 建議工作流程 | 原因 |
|---|---|---|
| 初次生成 | `mj-v7` | V7 原生圖像生成 |
| 在 prompt 中使用一張或多張參考圖像 | `mj-v7` | 支援在 prompt 開頭放置圖像 URL |
| 僅更改選定的局部區域 | `mj-v7-inpaint` | 遮罩式編輯 |
| 向外擴展構圖 | `mj-v7-outpaint` | 超越原始圖像的更寬取景 |
| 向左、右、上或下延伸 | `mj-v7-pan` | 方向性延伸 |
| 以新 prompt 重新詮釋一個結果 | `mj-v7-remix` | 從現有任務進行 prompt 式變化 |
| 保留版面但更改材質或表面效果 | `mj-v7-retexture` | 從輸入圖像進行風格與紋理轉換 |
| 從一張圖像剪裁主體 | `mj-v7-remove-bg` | 無需 prompt |
| 在更大畫布上重新定位圖像 | `mj-v7-edit` | 具備定位控制的畫布擴展 |

## 正式環境注意事項

- 所有 endpoint 均需 Bearer token 驗證
- Midjourney 生成與編輯工作流程均為非同步
- callback 必須使用 HTTPS，且不能指向私有 IP 位址
- callback 逾時為 10 秒，最多重試 3 次
- 生成的圖像連結有效期為 24 小時，請盡快儲存
- `--v`、`--version` 及 `--niji` 在此處的 V7 請求中不支援
- `--fast`、`--draft` 及 `--turbo` 不應寫入 prompt，請使用 `model_params.speed`
- 編輯工作流程通常需要已完成的任務 ID 及所選圖像編號
- remove background 不使用 prompt 或速度參數
- retexture 與 remove background 直接接受輸入圖像 URL，而非依賴來源任務

## 常見問題

### Midjourney API 如何計費？
Midjourney V7 生成以請求為單位計費，而非以圖像計費。一次請求目標輸出 4 張圖像，但審核過濾可能減少回傳圖像數量。

### 如何進行圖像轉圖像？
在 `prompt` 開頭放置一張或多張圖像 URL，然後加入文字描述與 Midjourney 參數。

### 為何編輯 endpoint 需要任務 ID？
upscale、inpaint、outpaint、pan、enhance 及 remix 等操作作用於已完成任務中所選的圖像，因此需要原始任務參考。

### 可以在 prompt 中使用 `--turbo` 或 `--draft` 嗎？
不行。速度透過 `model_params.speed` 控制。

## 相關連結

- [Midjourney V7 產品頁面](https://evolink.ai/midjourney-v7?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api)
- [取得 API 金鑰](https://evolink.ai/signup?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api)
- [Midjourney API 文件](https://docs.evolink.ai/en/api-manual/image-series/midjourney/mj-v7-image-generate?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api)

## 儲存庫說明

本儲存庫是 EvoLink.ai 上 Midjourney API 使用的文件與範例中心。詳細的官方工作流程資料整理於 `docs/official-api/` 下，`mjv7参考/` 作為本地參考資料保留，並透過 `.gitignore` 排除於上傳之外。
