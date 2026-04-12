# Midjourney API：定价、官方文档、工作流程与集成指南

<p align="center">
  <a href="./README.md">English</a> · <a href="./README.es.md">Español</a> · <a href="./README.pt.md">Português</a> · <a href="./README.ja.md">日本語</a> · <a href="./README.ko.md">한국어</a> · <a href="./README.de.md">Deutsch</a> · <a href="./README.fr.md">Français</a> · <a href="./README.tr.md">Türkçe</a> · <a href="./README.zh-TW.md">繁體中文</a> · <a href="./README.zh-CN.md">简体中文</a> · <a href="./README.ru.md">Русский</a>
</p>

<p align="center">
  <a href="https://evolink.ai/midjourney-v7?utm_source=github&utm_medium=banner&utm_campaign=midjourney-api">
    <img src="./assets/banner.jpg" alt="Midjourney API - 定价、官方文档与集成指南" width="100%" />
  </a>
</p>

<p align="center">
  比较 Midjourney API 定价，查阅官方 Midjourney V7 工作流程文档，并通过单一统一 API 集成图像生成与编辑功能。
</p>

## 快速开始

通过一次 API 调用使用 Midjourney V7 图像生成。

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
  <a href="https://evolink.ai/midjourney-v7?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api">查看 Midjourney API 定价</a> ·
  <a href="https://evolink.ai/signup?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api">获取 API 密钥</a> ·
  <a href="https://docs.evolink.ai/en/api-manual/image-series/midjourney/mj-v7-image-generate?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api">阅读 API 文档</a>
</p>

## 什么是 Midjourney API？

EvoLink.ai 上的 Midjourney API 让开发者通过单一统一 API 密钥访问 Midjourney V7 图像生成与编辑工作流程。根据本仓库提供的官方参考资料，当前涵盖的操作包括：图像生成、图像转图像、风格与对象参考工作流程、upscale、inpaint、outpaint、pan、remix、retexture、canvas edit、enhance、remove background 及 upload paint。

本仓库为以下需求的开发者而建：

- 了解 Midjourney API 定价与计费行为
- 在同一处查阅 Midjourney V7 官方工作流程覆盖范围
- 为任务选择正确的 Midjourney 操作
- 将 Midjourney 生成与编辑集成到生产应用程序

## 为何使用 EvoLink 调用 Midjourney API？

- 一个 API 密钥即可使用 Midjourney V7 生成与编辑工作流程
- draft、fast、turbo 生成的透明按请求定价
- 专为生产集成设计的异步任务流程
- 支持 Midjourney V7 原生 prompt 参数与参考工作流程
- 任务完成工作流程的 HTTPS callback 支持
- 官方产品页面上的 99.9% 正常运行时间定位

## Midjourney API 定价

以下定价依据本仓库提供的 Midjourney V7 产品参考资料。

| 模型 | 模式 | 速度 | 价格 | 备注 |
|---|---|---|---:|---|
| `mj-v7` | 图像生成 | draft | $0.040 / 请求 | 约 2.7 积分，每次请求 4 张图像 |
| `mj-v7` | 图像生成 | fast | $0.079 / 请求 | 默认模式，约 5.4 积分 |
| `mj-v7` | 图像生成 | turbo | $0.159 / 请求 | 优先模式，约 10.8 积分 |

> 每次请求产生 4 张图像。Midjourney 内容审核可能过滤部分输出，因此返回结果可能包含 1 至 4 张图像。计费以请求为单位，而非以图像为单位。

## 支持的 Midjourney V7 工作流程

| 工作流程 | 模型 | 说明 |
|---|---|---|
| 图像生成 | `mj-v7` | 使用 Midjourney V7 原生 prompt 语法进行文字转图像与图像转图像 |
| Upscale | `mj-v7-upscale` | 从已完成任务中放大所选的一张图像 |
| Inpaint | `mj-v7-inpaint` | 编辑所选图像中的遮罩区域 |
| Outpaint | `mj-v7-outpaint` | 向原始图像边界以外扩展 |
| Pan | `mj-v7-pan` | 向单一方向延伸构图 |
| Remix | `mj-v7-remix` | 以新 prompt 重新诠释现有图像 |
| Retexture | `mj-v7-retexture` | 在保留结构的同时更改纹理或风格 |
| Canvas Edit | `mj-v7-edit` | 在画布上重新定位图像并填补空白区域 |
| Enhance | `mj-v7-enhance` | 改善所选的已生成图像 |
| Remove Background | `mj-v7-remove-bg` | 从输入图像生成透明主体抠图 |
| Upload Paint | `mj-v7-upload-paint` | 使用上传图像、遮罩与画布设置的高级编辑流程 |

## 官方 API 文档

详细的工作流程参考资料放在独立文档中，让 README 专注于导航、定价与集成说明。以下每个页面均与本仓库提供的官方参考资料保持一致。

- [图像生成](./docs/official-api/image-generation.md)
- [图像转图像与参考](./docs/official-api/image-to-image-and-reference.md)
- [Prompt 参数](./docs/prompt-parameters.md)
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

## Prompt 参数概览

Midjourney V7 在 `prompt` 字段中直接支持原生参数语法。

| 参数 | 示例 | 用途 |
|---|---|---|
| `--ar` | `--ar 16:9` | 宽高比 |
| `--s` | `--s 500` | 风格化强度 |
| `--c` / `--chaos` | `--c 30` | 结果多样性 |
| `--q` | `--q 2` | 质量等级 |
| `--seed` | `--seed 12345` | 可重现探索 |
| `--no` | `--no text, watermark` | 排除元素 |
| `--iw` | `--iw 1.5` | 图像 prompt 权重 |
| `--sref` | `--sref https://...` | 风格参考 |
| `--oref` | `--oref https://...` | 对象参考 |
| `--raw` | `--raw` | 减少美化 |
| `--tile` | `--tile` | 无缝图案生成 |
| `--w` | `--w 500` | 奇异度 |
| `--exp` | `--exp 25` | 实验性美学 |

详细参数规则请见 [`docs/prompt-parameters.md`](./docs/prompt-parameters.md)。

## 集成工作流程

1. 从 EvoLink.ai 获取 API 密钥
2. 使用 `POST /v1/images/generations` 创建生成或编辑任务
3. 保存返回的任务 ID
4. 持续轮询 `GET /v1/tasks/{task_id}` 直到任务完成
5. 尽快下载并保存结果图像，因为生成的链接为临时链接

## 代码示例

- [cURL：基本生成](./examples/curl/generate-image.sh)
- [cURL：图像转图像](./examples/curl/image-to-image.sh)
- [cURL：upscale](./examples/curl/upscale.sh)
- [cURL：inpaint](./examples/curl/inpaint.sh)
- [JavaScript：基本生成](./examples/javascript/basic.mjs)
- [JavaScript：图像转图像](./examples/javascript/image-to-image.mjs)
- [JavaScript：upscale](./examples/javascript/upscale.mjs)
- [JavaScript：inpaint](./examples/javascript/inpaint.mjs)

## 工作流程比较

| 需求 | 推荐工作流程 | 原因 |
|---|---|---|
| 初次生成 | `mj-v7` | V7 原生图像生成 |
| 在 prompt 中使用一张或多张参考图像 | `mj-v7` | 支持在 prompt 开头放置图像 URL |
| 仅更改选定的局部区域 | `mj-v7-inpaint` | 遮罩式编辑 |
| 向外扩展构图 | `mj-v7-outpaint` | 超越原始图像的更宽取景 |
| 向左、右、上或下延伸 | `mj-v7-pan` | 方向性延伸 |
| 以新 prompt 重新诠释一个结果 | `mj-v7-remix` | 从现有任务进行 prompt 式变化 |
| 保留版面但更改材质或表面效果 | `mj-v7-retexture` | 从输入图像进行风格与纹理转换 |
| 从一张图像抠出主体 | `mj-v7-remove-bg` | 无需 prompt |
| 在更大画布上重新定位图像 | `mj-v7-edit` | 具备定位控制的画布扩展 |

## 生产环境注意事项

- 所有 endpoint 均需 Bearer token 验证
- Midjourney 生成与编辑工作流程均为异步
- callback 必须使用 HTTPS，且不能指向私有 IP 地址
- callback 超时为 10 秒，最多重试 3 次
- 生成的图像链接有效期为 24 小时，请尽快保存
- `--v`、`--version` 及 `--niji` 在此处的 V7 请求中不支持
- `--fast`、`--draft` 及 `--turbo` 不应写入 prompt，请使用 `model_params.speed`
- 编辑工作流程通常需要已完成的任务 ID 及所选图像编号
- remove background 不使用 prompt 或速度参数
- retexture 与 remove background 直接接受输入图像 URL，而非依赖来源任务

## 常见问题

### Midjourney API 如何计费？
Midjourney V7 生成以请求为单位计费，而非以图像计费。一次请求目标输出 4 张图像，但审核过滤可能减少返回图像数量。

### 如何进行图像转图像？
在 `prompt` 开头放置一张或多张图像 URL，然后加入文字描述与 Midjourney 参数。

### 为何编辑 endpoint 需要任务 ID？
upscale、inpaint、outpaint、pan、enhance 及 remix 等操作作用于已完成任务中所选的图像，因此需要原始任务参考。

### 可以在 prompt 中使用 `--turbo` 或 `--draft` 吗？
不行。速度通过 `model_params.speed` 控制。

## 相关链接

- [Midjourney V7 产品页面](https://evolink.ai/midjourney-v7?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api)
- [获取 API 密钥](https://evolink.ai/signup?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api)
- [Midjourney API 文档](https://docs.evolink.ai/en/api-manual/image-series/midjourney/mj-v7-image-generate?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api)

## 仓库说明

本仓库是 EvoLink.ai 上 Midjourney API 使用的文档与示例中心。详细的官方工作流程资料整理于 `docs/official-api/` 下，`mjv7参考/` 作为本地参考资料保留，并通过 `.gitignore` 排除于上传之外。
