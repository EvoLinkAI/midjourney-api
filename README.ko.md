# Midjourney API V8.1 + V7: 가격, 공식 문서, 워크플로우 및 통합 가이드

<p align="center">
  <a href="./README.md">English</a> · <a href="./README.es.md">Español</a> · <a href="./README.pt.md">Português</a> · <a href="./README.ja.md">日本語</a> · <a href="./README.ko.md">한국어</a> · <a href="./README.de.md">Deutsch</a> · <a href="./README.fr.md">Français</a> · <a href="./README.tr.md">Türkçe</a> · <a href="./README.zh-TW.md">繁體中文</a> · <a href="./README.zh-CN.md">简体中文</a> · <a href="./README.ru.md">Русский</a>
</p>

<p align="center">
  <a href="https://docs.evolink.ai/en/api-manual/image-series/midjourney/mj-v8-1-image-generate?utm_source=github&utm_medium=banner&utm_campaign=midjourney-api">
    <img src="./assets/banner.jpg" alt="Midjourney API - 가격, 공식 문서 및 통합 가이드" width="100%" />
  </a>
</p>

<p align="center">
  Midjourney API 가격을 비교하고, Midjourney V8.1 공식 워크플로우 문서를 검토하며, 단일 통합 API를 통해 이미지 생성 및 편집을 통합하세요.
</p>

## 빠른 시작

한 번의 API 호출로 Midjourney V8.1 이미지 생성을 사용하세요.

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
  <a href="https://docs.evolink.ai/en/api-manual/image-series/midjourney/mj-v8-1-image-generate?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api">Midjourney API 가격 보기</a> ·
  <a href="https://evolink.ai/signup?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api">API 키 받기</a> ·
  <a href="https://docs.evolink.ai/en/api-manual/image-series/midjourney/mj-v8-1-image-generate?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api">API 문서 읽기</a>
</p>

## Midjourney V8.1 Pricing Notes

The V8.1 official docs describe pricing through speed and quality multipliers. This repository does not invent fixed dollar prices for V8.1.

| Setting | Values | Billing note |
|---|---|---|
| `model_params.speed` | `draft`, `fast`, `turbo` | `draft` and `fast` use the same speed multiplier; `turbo` is about 2x fast |
| `quality` | `standard`, `hd` | `standard` is 1x; `hd` is 1.5x |
| Combined cost | speed x quality | for example, `turbo` + `hd` is about 3x the base |

> V8.1 `draft` returns 24 lightweight 0.5K sketch images in one run and cannot be combined with `quality: "hd"`. Fast and turbo modes return 4 images per generation.

## Midjourney API란?

Midjourney API on EvoLink.ai gives developers access to Midjourney image generation and editing workflows through one unified API key. This repository now covers the latest Midjourney V8.1 generation family while preserving the existing Midjourney V7 workflow references for integrations that still depend on V7 model IDs.

This repository is built for developers who want to:

- integrate Midjourney V8.1 image generation into production apps
- understand V8.1 speed, quality, prompt parameter, and workflow behavior
- keep existing V7 workflow examples available during migration
- choose the right Midjourney operation for generation, variation, remix, edit, retexture, or background removal


## 왜 EvoLink로 Midjourney API를 사용하나요?

- one API key for Midjourney V8.1 and preserved V7 workflow examples
- asynchronous task flow designed for production integration
- V8.1 native HD output through the top-level `quality` field
- V8.1 speed control through `model_params.speed`
- support for native Midjourney prompt parameters and reference workflows
- HTTPS callback support for task completion workflows


## Midjourney API 가격

아래 가격은 이 리포지토리에 제공된 Midjourney V7 제품 참조를 따릅니다.

| 모델 | 모드 | 속도 | 가격 | 비고 |
|---|---|---|---:|---|
| `mj-v7` | 이미지 생성 | draft | $0.040 / 요청 | 약 2.7 크레딧, 요청당 4개 이미지 |
| `mj-v7` | 이미지 생성 | fast | $0.079 / 요청 | 기본 모드, 약 5.4 크레딧 |
| `mj-v7` | 이미지 생성 | turbo | $0.159 / 요청 | 우선순위 모드, 약 10.8 크레딧 |

> 각 요청은 4개의 이미지를 생성합니다. Midjourney 콘텐츠 모더레이션으로 일부 출력이 필터링될 수 있으므로 반환되는 결과에는 1~4개의 이미지가 포함될 수 있습니다. 청구는 이미지 단위가 아닌 요청 단위로 이루어집니다.

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

## Preserved 지원되는 Midjourney V7 워크플로우

| 워크플로우 | 모델 | 요약 |
|---|---|---|
| 이미지 생성 | `mj-v7` | Midjourney V7 네이티브 프롬프트 구문을 사용한 텍스트-이미지 및 이미지-이미지 |
| Upscale | `mj-v7-upscale` | 완료된 작업에서 선택한 이미지 1장 확대 |
| Inpaint | `mj-v7-inpaint` | 선택한 이미지의 마스크 영역 편집 |
| Outpaint | `mj-v7-outpaint` | 원본 이미지 경계 너머로 확장 |
| Pan | `mj-v7-pan` | 한 방향으로 구도 연장 |
| Remix | `mj-v7-remix` | 새 프롬프트로 기존 이미지 재해석 |
| Retexture | `mj-v7-retexture` | 구조를 유지하면서 텍스처나 스타일 변경 |
| Canvas Edit | `mj-v7-edit` | 캔버스에서 이미지 재배치 및 빈 영역 채우기 |
| Enhance | `mj-v7-enhance` | 선택한 생성 이미지 개선 |
| Remove Background | `mj-v7-remove-bg` | 입력 이미지에서 투명한 피사체 컷아웃 생성 |
| Upload Paint | `mj-v7-upload-paint` | 업로드된 이미지, 마스크 및 캔버스 설정을 사용한 고급 편집 흐름 |

## 공식 API 문서

상세한 워크플로우 참조는 별도의 문서에 있어 README는 탐색, 가격, 통합 안내에 집중합니다. 아래 각 페이지는 이 리포지토리에 제공된 공식 참조 자료와 일치합니다.

Latest V8.1 docs:

- [V8.1 Image Generation](./docs/official-api/v8-1-image-generation.md)
- [V8.1 Variation](./docs/official-api/v8-1-variation.md)
- [V8.1 Remix](./docs/official-api/v8-1-remix.md)
- [V8.1 Retexture](./docs/official-api/v8-1-retexture.md)
- [V8.1 Upload Paint](./docs/official-api/v8-1-upload-paint.md)
- [V8.1 Canvas Edit](./docs/official-api/v8-1-canvas-edit.md)
- [V8.1 Remove Background](./docs/official-api/v8-1-remove-background.md)

Preserved V7 docs:

- [이미지 생성](./docs/official-api/image-generation.md)
- [이미지 간 변환 및 참조](./docs/official-api/image-to-image-and-reference.md)
- [프롬프트 파라미터](./docs/prompt-parameters.md)
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

## 프롬프트 파라미터 개요

Midjourney V7은 `prompt` 필드 안에서 직접 네이티브 파라미터 구문을 지원합니다.

Midjourney V8.1 supports native parameter syntax inside the `prompt` field, but speed and output quality are API fields. Use top-level `quality` (`standard` or `hd`) and `model_params.speed` (`draft`, `fast`, or `turbo`). V8.1 `draft` returns 24 lightweight 0.5K sketch images and cannot be combined with `quality: hd`.

Preserved V7 parameter overview:

| 파라미터 | 예시 | 목적 |
|---|---|---|
| `--ar` | `--ar 16:9` | 화면 비율 |
| `--s` | `--s 500` | 스타일화 강도 |
| `--c` / `--chaos` | `--c 30` | 결과 다양성 |
| `--q` | `--q 2` | 품질 수준 |
| `--seed` | `--seed 12345` | 재현 가능한 탐색 |
| `--no` | `--no text, watermark` | 요소 제외 |
| `--iw` | `--iw 1.5` | 이미지 프롬프트 가중치 |
| `--sref` | `--sref https://...` | 스타일 참조 |
| `--oref` | `--oref https://...` | 오브젝트 참조 |
| `--raw` | `--raw` | 미화 감소 |
| `--tile` | `--tile` | 원활한 패턴 생성 |
| `--w` | `--w 500` | 기이함 |
| `--exp` | `--exp 25` | 실험적 미학 |

자세한 파라미터 규칙은 [`docs/prompt-parameters.md`](./docs/prompt-parameters.md)에 있습니다.

## 통합 워크플로우

1. EvoLink.ai에서 API 키 받기
2. `POST /v1/images/generations`으로 생성 또는 편집 작업 생성
3. 반환된 작업 ID 저장
4. 작업이 완료될 때까지 `GET /v1/tasks/{task_id}` 폴링
5. 생성된 링크는 임시적이므로 결과 이미지를 신속하게 다운로드하여 저장

## 코드 예시

Latest V8.1 examples:

- [cURL: V8.1 generation](./examples/curl/generate-image-v8-1.sh)
- [JavaScript: V8.1 generation](./examples/javascript/basic-v8-1.mjs)

Preserved V7 examples:

- [cURL: 기본 생성](./examples/curl/generate-image.sh)
- [cURL: 이미지 간 변환](./examples/curl/image-to-image.sh)
- [cURL: upscale](./examples/curl/upscale.sh)
- [cURL: inpaint](./examples/curl/inpaint.sh)
- [JavaScript: 기본 생성](./examples/javascript/basic.mjs)
- [JavaScript: 이미지 간 변환](./examples/javascript/image-to-image.mjs)
- [JavaScript: upscale](./examples/javascript/upscale.mjs)
- [JavaScript: inpaint](./examples/javascript/inpaint.mjs)

## 워크플로우 비교

| 필요한 것 | 권장 워크플로우 | 이유 |
|---|---|---|
| 최초 생성 | `mj-v7` | V7 네이티브 이미지 생성 |
| 프롬프트에 하나 이상의 참조 이미지 사용 | `mj-v7` | 프롬프트 시작 부분에 이미지 URL 지원 |
| 선택한 로컬 영역만 변경 | `mj-v7-inpaint` | 마스크 기반 편집 |
| 구도를 바깥쪽으로 확장 | `mj-v7-outpaint` | 원본 이미지 너머의 넓은 프레이밍 |
| 왼쪽, 오른쪽, 위, 아래로 연장 | `mj-v7-pan` | 방향성 확장 |
| 새 프롬프트로 하나의 결과 재해석 | `mj-v7-remix` | 기존 작업에서 프롬프트 기반 변형 |
| 레이아웃을 유지하면서 재질이나 마감 변경 | `mj-v7-retexture` | 입력 이미지에서 스타일 및 텍스처 변환 |
| 이미지에서 피사체 컷아웃 | `mj-v7-remove-bg` | 프롬프트 불필요 |
| 더 큰 캔버스에 이미지 재배치 | `mj-v7-edit` | 배치 제어가 있는 캔버스 확장 |

## 프로덕션 노트

- 모든 엔드포인트에 Bearer 토큰 인증 필요
- Midjourney 생성 및 편집 워크플로우는 비동기식
- 콜백은 HTTPS를 사용해야 하며 사설 IP 주소를 대상으로 할 수 없음
- 콜백 타임아웃은 최대 3회 재시도로 10초
- 생성된 이미지 링크는 24시간 유효하므로 신속하게 저장
- `--v`, `--version`, `--niji`는 여기서 V7 요청에서 지원되지 않음
- `--fast`, `--draft`, `--turbo`는 프롬프트에 작성하지 말고 `model_params.speed`를 사용
- 편집 워크플로우는 일반적으로 완료된 작업 ID와 선택한 이미지 번호가 필요
- remove background는 프롬프트나 속도 파라미터를 사용하지 않음
- retexture와 remove background는 소스 작업에 의존하는 대신 입력 이미지 URL을 직접 허용

## FAQ

### Midjourney API는 어떻게 청구되나요?
Midjourney V7 생성은 이미지 단위가 아닌 요청 단위로 청구됩니다. 요청은 4개의 출력을 목표로 하지만 모더레이션 필터링으로 반환되는 이미지 수가 줄어들 수 있습니다.

### 이미지 간 변환은 어떻게 하나요?
`prompt`의 시작 부분에 하나 이상의 이미지 URL을 넣은 다음 텍스트 설명과 Midjourney 파라미터를 추가하세요.

### 편집 엔드포인트에 작업 ID가 필요한 이유는?
upscale, inpaint, outpaint, pan, enhance, remix 같은 작업은 완료된 작업에서 선택한 이미지에 대해 동작하므로 원본 작업 참조가 필요합니다.

### 프롬프트에 `--turbo`나 `--draft`를 사용할 수 있나요?
아니요. 속도는 `model_params.speed`를 통해 제어합니다.

## 관련 링크

- [Midjourney V8.1 Image Generation Docs](https://docs.evolink.ai/en/api-manual/image-series/midjourney/mj-v8-1-image-generate?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api)
- [API 키 받기](https://evolink.ai/signup?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api)
- [Midjourney API 문서](https://docs.evolink.ai/en/api-manual/image-series/midjourney/mj-v8-1-image-generate?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api)

## 리포지토리 안내

이 리포지토리는 EvoLink.ai에서 Midjourney API 사용을 위한 문서 및 예시 허브입니다. 상세한 공식 워크플로우 자료는 `docs/official-api/` 아래에 정리되어 있으며, `mjv7参考/`는 로컬 참조 자료로 남아 있고 `.gitignore`를 통해 업로드에서 제외됩니다.
