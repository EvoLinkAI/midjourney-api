# Midjourney API：V8.1 与 V7 文档、工作流程和集成示例

<p align="center">
  <a href="./README.md">English</a> · <a href="./README.es.md">Español</a> · <a href="./README.pt.md">Português</a> · <a href="./README.ja.md">日本語</a> · <a href="./README.ko.md">한국어</a> · <a href="./README.de.md">Deutsch</a> · <a href="./README.fr.md">Français</a> · <a href="./README.tr.md">Türkçe</a> · <a href="./README.zh-TW.md">繁體中文</a> · <a href="./README.zh-CN.md">简体中文</a> · <a href="./README.ru.md">Русский</a>
</p>

<p align="center">
  <a href="https://docs.evolink.ai/en/api-manual/image-series/midjourney/mj-v8-1-image-generate?utm_source=github&utm_medium=banner&utm_campaign=midjourney-api">
    <img src="./assets/banner.jpg" alt="Midjourney API - V8.1 与 V7 官方文档和集成示例" width="100%" />
  </a>
</p>

<p align="center">
  通过 EvoLink 接入最新 Midjourney V8.1 图像生成工作流程，同时保留面向现有集成的 V7 文档。
</p>

<p align="left">
  <a href="https://docs.evolink.ai/en/api-manual/image-series/midjourney/mj-v8-1-image-generate?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api">阅读 V8.1 图像生成文档</a> ·
  <a href="https://docs.evolink.ai/en/api-manual/image-series/midjourney/midjourney-v8-1-prompt-guide?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api">阅读 V8.1 Prompt 指南</a> ·
  <a href="https://evolink.ai/signup?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api">获取 API 密钥</a>
</p>

## EvoLink 快速开始

用一次 API 调用完成 Midjourney V8.1 图像生成。

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

## 完整首次运行流程

Midjourney 生成和编辑都是异步任务。生产集成应创建任务、保存任务 ID、轮询或接收 callback，并在结果链接过期前保存最终图像 URL。

```bash
export EVOLINK_API_KEY="your_key_here"
bash examples/curl/complete-flow.sh
```

完整示例:

- [cURL 完整流程](./examples/curl/complete-flow.sh)
- [Python 完整流程](./examples/python/complete_flow.py)
- [JavaScript 完整流程](./examples/javascript/complete-flow.mjs)
- [cURL V8.1 生成](./examples/curl/generate-image-v8-1.sh)
- [JavaScript V8.1 生成](./examples/javascript/basic-v8-1.mjs)

## 什么是 Midjourney API？

EvoLink.ai 上的 Midjourney API 让开发者通过一个统一 API 密钥访问 Midjourney 图像生成和编辑工作流程。本仓库现在覆盖最新的 Midjourney V8.1 生成系列，同时保留现有 Midjourney V7 工作流程参考，方便仍依赖 V7 模型 ID 的集成继续使用。

本仓库适合希望完成以下工作的开发者：

- 把 Midjourney V8.1 图像生成接入生产应用
- 理解 V8.1 的速度、质量、prompt 参数和 工作流程 行为
- 在迁移过程中继续保留 V7 示例
- 为生成、variation、remix、编辑、retexture 或 remove background 选择正确操作

## 为什么用 EvoLink 调用 Midjourney API

- 一个 API 密钥即可使用 Midjourney V8.1，并保留 V7 示例
- 面向生产集成设计的异步任务流程
- 通过顶层 `quality` 字段启用 V8.1 原生 HD 输出
- 通过 `model_params.speed` 控制 V8.1 速度
- 支持 Midjourney 原生 prompt 参数和参考图工作流程
- 支持任务完成场景的 HTTPS callback

## Midjourney V8.1 计费说明

V8.1 官方文档通过速度和质量倍率描述计费。本仓库不为 V8.1 编造固定美元价格。

| 设置 | 取值 | 计费说明 |
|---|---|---|
| `model_params.speed` | `draft`, `fast`, `turbo` | `draft` / `fast` = 1x; `turbo` ≈ 2x |
| `quality` | `standard`, `hd` | `standard` = 1x; `hd` = 1.5x |
| 组合成本 | speed x quality | `turbo` + `hd` ≈ 3x |

> V8.1 `draft` 一次返回 24 张轻量 0.5K 草图，不能与 `quality: "hd"` 组合。fast 和 turbo 每次生成返回 4 张图像。

## 保留的 Midjourney V7 生成价格

| 模型 | 模式 | 速度 | 价格 | 备注 |
|---|---|---|---:|---|
| `mj-v7` | 图像生成 | draft | $0.040 / 请求 | 约 2.7 积分；每次请求 4 张图像 |
| `mj-v7` | 图像生成 | fast | $0.079 / 请求 | 默认模式；约 5.4 积分 |
| `mj-v7` | 图像生成 | turbo | $0.159 / 请求 | 优先模式；约 10.8 积分 |

## 最新 Midjourney V8.1 工作流程

| 工作流程 | 模型 | 说明 |
|---|---|---|
| 图像生成 | `mj-v8.1` | 文字生成图像和图生图，支持 V8.1 prompt 语法、`quality` 和 `speed` |
| 变体 | `mj-v8.1-variation` | 基于已完成的 V8.1 任务生成 subtle 或 strong 变体 |
| Remix | `mj-v8.1-remix` | 用必填的新 prompt 重新诠释已完成结果 |
| Retexture | `mj-v8.1-retexture` | 直接从输入图像 URL 改变纹理或风格 |
| Upload Paint | `mj-v8.1-upload-paint` | 基于上传图像、mask 和位置字段进行高级画布编辑 |
| Canvas Edit | `mj-v8.1-edit` | 把已有任务图像重新放到画布上并填充空白区域 |
| 移除背景 | `mj-v8.1-remove-bg` | 从一个输入图像 URL 移除背景，不需要 prompt 或 speed |

## 保留的 Midjourney V7 工作流程

| 工作流程 | 模型 | 说明 |
|---|---|---|
| 图像生成 | `mj-v7` | V7 文字生成图像 / 图生图 |
| Upscale | `mj-v7-upscale` | 放大一张选中的图像 |
| Inpaint | `mj-v7-inpaint` | 编辑遮罩区域 |
| Outpaint | `mj-v7-outpaint` | 扩展到图像边界之外 |
| Pan | `mj-v7-pan` | 向一个方向延展 |
| Remix | `mj-v7-remix` | 用新 prompt 重新诠释 |
| Retexture | `mj-v7-retexture` | 在保留结构的同时改变纹理或风格 |
| Canvas Edit | `mj-v7-edit` | 重新定位图像并填充空白区域 |
| Enhance | `mj-v7-enhance` | 改善选中的结果 |
| 移除背景 | `mj-v7-remove-bg` | 生成透明主体抠图 |
| Upload Paint | `mj-v7-upload-paint` | 上传图像、遮罩和画布的高级编辑 |

## 官方 API 文档

详细 工作流程 参考放在独立文档中，让 README 聚焦导航、计费说明和集成指引。

最新 V8.1 文档:

- [V8.1 图像生成](./docs/official-api/v8-1-image-generation.md)
- [V8.1 变体](./docs/official-api/v8-1-variation.md)
- [V8.1 Remix](./docs/official-api/v8-1-remix.md)
- [V8.1 Retexture](./docs/official-api/v8-1-retexture.md)
- [V8.1 Upload Paint](./docs/official-api/v8-1-upload-paint.md)
- [V8.1 Canvas Edit](./docs/official-api/v8-1-canvas-edit.md)
- [V8.1 移除背景](./docs/official-api/v8-1-remove-background.md)
- [Prompt 参数](./docs/prompt-parameters.md)

保留的 V7 文档:

- [V7 图像生成](./docs/official-api/image-generation.md)
- [V7 图生图与参考图](./docs/official-api/image-to-image-and-reference.md)
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

## Prompt 参数概览

Midjourney V8.1 支持在 `prompt` 字段中使用原生参数语法，但速度和输出质量是 API 字段。

| 控制项 | 设置位置 | 取值 |
|---|---|---|
| 速度 | `model_params.speed` | `draft`, `fast`, `turbo` |
| 输出质量 | 顶层 `quality` | `standard`, `hd` |
| Prompt 参数 | `prompt` | `--ar`, `--c`, `--seed`, `--s`, `--exp`, `--raw`, `--iw`, `--sref`, `--sw`, `--oref`, `--ow` |

V8.1 在此路由不暴露 `--q`、`--no`、`--weird`、`--tile`、`--sv`、`--stop`、`--cref`、`--cw`、`--relax`、`--repeat`、`--p`、排列组合、public/stealth 标记、`--niji` 或 multi-prompt `::`。

## 集成流程

1. EvoLink.ai API 密钥
2. `POST /v1/images/generations`
3. 保存任务 ID
4. 轮询 `GET /v1/tasks/{task_id}` 或使用 callback
5. 在过期前保存最终图像 URL

## 代码示例

最新 V8.1 示例:

- [cURL: V8.1 generation](./examples/curl/generate-image-v8-1.sh)
- [JavaScript: V8.1 generation](./examples/javascript/basic-v8-1.mjs)

保留的 V7 示例:

- [cURL：完整首次运行流程](./examples/curl/complete-flow.sh)
- [cURL：基础生成](./examples/curl/generate-image.sh)
- [cURL：图生图](./examples/curl/image-to-image.sh)
- [cURL: upscale](./examples/curl/upscale.sh)
- [cURL: inpaint](./examples/curl/inpaint.sh)
- [Python：完整首次运行流程](./examples/python/complete_flow.py)
- [JavaScript：完整首次运行流程](./examples/javascript/complete-flow.mjs)
- [JavaScript：基础生成](./examples/javascript/basic.mjs)
- [JavaScript：图生图](./examples/javascript/image-to-image.mjs)
- [JavaScript: upscale](./examples/javascript/upscale.mjs)
- [JavaScript: inpaint](./examples/javascript/inpaint.mjs)

## 工作流程对比

| 如果你需要... | 推荐 工作流程 | 原因 |
|---|---|---|
| 最新图像生成 | `mj-v8.1` | 最新 V8.1 模型 |
| 快速草图探索 | `mj-v8.1` + `speed: "draft"` | 24 张轻量 0.5K 草图 |
| HD 输出 | `mj-v8.1` + `quality: "hd"` | 原生 HD 输出 |
| 变体 | `mj-v8.1-variation` | subtle / strong 变体 |
| prompt 重新诠释 | `mj-v8.1-remix` | 在保留源结构的基础上使用新 prompt |
| 画布编辑 | `mj-v8.1-edit` | 重新定位并填充空白区域 |
| 上传图像编辑 | `mj-v8.1-upload-paint` | mask 与画布工作流程 |
| 背景移除 | `mj-v8.1-remove-bg` | 不需要 prompt 或 speed 字段 |
| 现有 V7 流程 | V7 模型 | 保留兼容性 |

## 生产注意事项

- Bearer token 认证
- 异步任务
- callback 必须使用 HTTPS，且不允许使用私有 IP URL
- callback 超时 10 秒，最多重试 3 次
- 根据官方文档，V8.1 图像链接有效期为 30 天
- `model_params.speed` 控制速度
- 顶层 `quality` 控制输出分辨率
- `draft` 返回 24 张草图，且不能与 `quality: "hd"` 组合
- `mj-v8.1-remove-bg` 只接受 `model` 和 `image_urls`
- V7 文档和示例保留用于兼容现有集成

## 常见问题

### 新的 Midjourney API 集成应该用哪个模型？
默认使用 `mj-v8.1` 做新的图像生成，除非你明确需要某个保留的 V7 工作流程。

### 如何启用 V8.1 HD 输出？
设置顶层字段 `"quality": "hd"`，并把 `model_params.speed` 设为 `fast` 或 `turbo`。不要把 `hd` 和 `draft` 组合。

### 可以在 prompt 里写 `--turbo`、`--draft` 或 `--hd` 吗？
不可以。速度通过 `model_params.speed` 控制，输出质量通过顶层 `quality` 控制。

### 还能继续使用 V7 示例吗？
可以。V7 文档和示例是有意保留的，用于现有集成。

## 相关链接

- [Midjourney V8.1 图像生成 Docs](https://docs.evolink.ai/en/api-manual/image-series/midjourney/mj-v8-1-image-generate?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api)
- [Midjourney V8.1 Prompt 指南](https://docs.evolink.ai/en/api-manual/image-series/midjourney/midjourney-v8-1-prompt-guide?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api)
- [Preserved Midjourney V7 图像生成 Docs](https://docs.evolink.ai/en/api-manual/image-series/midjourney/mj-v7-image-generate?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api)
- [API 密钥](https://evolink.ai/signup?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api)

## 仓库说明

本仓库是 EvoLink.ai 上 Midjourney API 的文档与示例中心。详细官方 工作流程 资料整理在 `docs/official-api/` 下，`mjv7参考/` 作为本地参考资料保留，并通过 `.gitignore` 排除上传。
