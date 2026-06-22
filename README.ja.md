# Midjourney API：V8.1 / V7 ドキュメント、ワークフロー、統合例

<p align="center">
  <a href="./README.md">English</a> · <a href="./README.es.md">Español</a> · <a href="./README.pt.md">Português</a> · <a href="./README.ja.md">日本語</a> · <a href="./README.ko.md">한국어</a> · <a href="./README.de.md">Deutsch</a> · <a href="./README.fr.md">Français</a> · <a href="./README.tr.md">Türkçe</a> · <a href="./README.zh-TW.md">繁體中文</a> · <a href="./README.zh-CN.md">简体中文</a> · <a href="./README.ru.md">Русский</a>
</p>

<p align="center">
  <a href="https://docs.evolink.ai/en/api-manual/image-series/midjourney/mj-v8-1-image-generate?utm_source=github&utm_medium=banner&utm_campaign=midjourney-api">
    <img src="./assets/banner.jpg" alt="Midjourney API - V8.1 / V7 公式ドキュメントと統合例" width="100%" />
  </a>
</p>

<p align="center">
  EvoLink 経由で最新の Midjourney V8.1 画像生成ワークフローを統合し、既存統合向けの V7 ドキュメントも保持します。
</p>

<p align="left">
  <a href="https://docs.evolink.ai/en/api-manual/image-series/midjourney/mj-v8-1-image-generate?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api">V8.1 画像生成ドキュメント</a> ·
  <a href="https://docs.evolink.ai/en/api-manual/image-series/midjourney/midjourney-v8-1-prompt-guide?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api">V8.1 Prompt ガイド</a> ·
  <a href="https://evolink.ai/signup?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api">API キーを取得</a>
</p>

## EvoLink クイックスタート

1 回の API 呼び出しで Midjourney V8.1 の画像生成を使います。

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

## 初回実行の完全フロー

Midjourney の生成と編集は非同期です。本番統合ではタスクを作成し、タスク ID を保存し、ポーリングまたは callback で完了を受け取り、期限切れ前に最終画像 URL を保存します。

```bash
export EVOLINK_API_KEY="your_key_here"
bash examples/curl/complete-flow.sh
```

完全な例:

- [cURL complete flow](./examples/curl/complete-flow.sh)
- [Python complete flow](./examples/python/complete_flow.py)
- [JavaScript complete flow](./examples/javascript/complete-flow.mjs)
- [cURL V8.1 generation](./examples/curl/generate-image-v8-1.sh)
- [JavaScript V8.1 generation](./examples/javascript/basic-v8-1.mjs)

## Midjourney API とは？

EvoLink.ai の Midjourney API は、1 つの API キーで Midjourney の画像生成・編集ワークフローへアクセスできる開発者向け API です。このリポジトリは最新の Midjourney V8.1 生成系を扱いながら、V7 モデル ID に依存する既存統合向けに V7 ワークフロー参照も保持しています。

このリポジトリは、次の目的を持つ開発者向けです：

- Midjourney V8.1 画像生成を本番アプリへ統合する
- V8.1 の速度、品質、prompt パラメータ、workflow の挙動を理解する
- 移行中も V7 の例を利用できるようにする
- 生成、variation、remix、編集、retexture、背景削除に適した操作を選ぶ

## Midjourney API に EvoLink を使う理由

- Midjourney V8.1 と保持された V7 例を 1 つの API キーで利用
- 本番統合向けの非同期タスクフロー
- トップレベル `quality` による V8.1 ネイティブ HD 出力
- `model_params.speed` による V8.1 速度制御
- Midjourney ネイティブ prompt パラメータと参照ワークフローをサポート
- タスク完了ワークフロー向け HTTPS callback

## Midjourney V8.1 の料金メモ

V8.1 公式ドキュメントでは、速度と品質の倍率で課金を説明しています。このリポジトリでは V8.1 の固定ドル価格を作りません。

| 設定 | 値 | 課金メモ |
|---|---|---|
| `model_params.speed` | `draft`, `fast`, `turbo` | `draft` / `fast` = 1x; `turbo` ≈ 2x |
| `quality` | `standard`, `hd` | `standard` = 1x; `hd` = 1.5x |
| 組み合わせコスト | speed x quality | `turbo` + `hd` ≈ 3x |

> V8.1 `draft` は 1 回で軽量 0.5K スケッチを 24 枚返し、`quality: "hd"` とは併用できません。fast と turbo は 1 回の生成で 4 枚を返します。

## 保持された Midjourney V7 生成料金

| モデル | モード | 速度 | 価格 | メモ |
|---|---|---|---:|---|
| `mj-v7` | 画像生成 | draft | $0.040 / リクエスト | 約2.7クレジット、1リクエスト4枚 |
| `mj-v7` | 画像生成 | fast | $0.079 / リクエスト | デフォルトモード、約5.4クレジット |
| `mj-v7` | 画像生成 | turbo | $0.159 / リクエスト | 優先モード、約10.8クレジット |

## 最新 Midjourney V8.1 ワークフロー

| ワークフロー | モデル | 概要 |
|---|---|---|
| 画像生成 | `mj-v8.1` | V8.1 prompt 構文、`quality`、`speed` による text-to-image / image-to-image |
| バリエーション | `mj-v8.1-variation` | 完了済み V8.1 タスクから subtle / strong のバリエーションを生成 |
| Remix | `mj-v8.1-remix` | 必須の新しい prompt で完了済み結果を再解釈 |
| Retexture | `mj-v8.1-retexture` | 入力画像 URL から直接テクスチャやスタイルを変更 |
| Upload Paint | `mj-v8.1-upload-paint` | アップロード画像、mask、配置情報による高度なキャンバス編集 |
| Canvas Edit | `mj-v8.1-edit` | 既存タスク画像をキャンバス上で再配置し空白を補完 |
| 背景削除 | `mj-v8.1-remove-bg` | prompt や speed なしで入力画像 URL から背景を削除 |

## 保持された Midjourney V7 ワークフロー

| ワークフロー | モデル | 概要 |
|---|---|---|
| 画像生成 | `mj-v7` | V7 テキストから画像 / 画像から画像生成 |
| Upscale | `mj-v7-upscale` | 選択した画像をアップスケール |
| Inpaint | `mj-v7-inpaint` | マスク領域を編集 |
| Outpaint | `mj-v7-outpaint` | 画像境界の外へ拡張 |
| Pan | `mj-v7-pan` | 一方向へ延長 |
| Remix | `mj-v7-remix` | 新しい prompt で再解釈 |
| Retexture | `mj-v7-retexture` | 構造を保ちながら質感やスタイルを変更 |
| Canvas Edit | `mj-v7-edit` | 画像を再配置し空白を補完 |
| Enhance | `mj-v7-enhance` | 選択結果を改善 |
| 背景削除 | `mj-v7-remove-bg` | 透明な被写体切り抜き |
| Upload Paint | `mj-v7-upload-paint` | アップロード、マスク、キャンバスの高度な編集 |

## 公式 API ドキュメント

詳細な workflow 参照は別ドキュメントに分け、README はナビゲーション、料金メモ、統合ガイドに集中します。

最新 V8.1 ドキュメント:

- [V8.1 画像生成](./docs/official-api/v8-1-image-generation.md)
- [V8.1 バリエーション](./docs/official-api/v8-1-variation.md)
- [V8.1 Remix](./docs/official-api/v8-1-remix.md)
- [V8.1 Retexture](./docs/official-api/v8-1-retexture.md)
- [V8.1 Upload Paint](./docs/official-api/v8-1-upload-paint.md)
- [V8.1 Canvas Edit](./docs/official-api/v8-1-canvas-edit.md)
- [V8.1 背景削除](./docs/official-api/v8-1-remove-background.md)
- [Prompt パラメータ](./docs/prompt-parameters.md)

保持された V7 ドキュメント:

- [V7 画像生成](./docs/official-api/image-generation.md)
- [V7 image-to-image と参照](./docs/official-api/image-to-image-and-reference.md)
- [V7 Upscale](./docs/official-api/upscale.md)
- [V7 Inpaint](./docs/official-api/inpaint.md)
- [V7 Outpaint](./docs/official-api/outpaint.md)
- [V7 Pan](./docs/official-api/pan.md)
- [V7 Remix](./docs/official-api/remix.md)
- [V7 Retexture](./docs/official-api/retexture.md)
- [V7 Canvas Edit](./docs/official-api/canvas-edit.md)
- [V7 Enhance](./docs/official-api/enhance.md)
- [V7 背景削除](./docs/official-api/remove-background.md)
- [V7 Upload Paint](./docs/official-api/upload-paint.md)

## Prompt パラメータ概要

Midjourney V8.1 は `prompt` 内のネイティブパラメータ構文をサポートしますが、速度と出力品質は API フィールドです。

| 制御項目 | 設定場所 | 値 |
|---|---|---|
| 速度 | `model_params.speed` | `draft`, `fast`, `turbo` |
| 出力品質 | トップレベル `quality` | `standard`, `hd` |
| Prompt パラメータ | `prompt` | `--ar`, `--c`, `--seed`, `--s`, `--exp`, `--raw`, `--iw`, `--sref`, `--sw`, `--oref`, `--ow` |

V8.1 のこのルートでは `--q`、`--no`、`--weird`、`--tile`、`--sv`、`--stop`、`--cref`、`--cw`、`--relax`、`--repeat`、`--p`、順列、public/stealth フラグ、`--niji`、multi-prompt `::` は公開されていません。

## 統合フロー

1. EvoLink.ai API キー
2. `POST /v1/images/generations`
3. タスク ID を保存
4. `GET /v1/tasks/{task_id}` をポーリング、または callback を使用
5. 期限切れ前に最終画像 URL を保存

## コード例

最新 V8.1 例:

- [cURL: V8.1 generation](./examples/curl/generate-image-v8-1.sh)
- [JavaScript: V8.1 generation](./examples/javascript/basic-v8-1.mjs)

保持された V7 例:

- [cURL: 初回実行の完全フロー](./examples/curl/complete-flow.sh)
- [cURL: 基本生成](./examples/curl/generate-image.sh)
- [cURL: image-to-image](./examples/curl/image-to-image.sh)
- [cURL: upscale](./examples/curl/upscale.sh)
- [cURL: inpaint](./examples/curl/inpaint.sh)
- [Python: 初回実行の完全フロー](./examples/python/complete_flow.py)
- [JavaScript: 初回実行の完全フロー](./examples/javascript/complete-flow.mjs)
- [JavaScript: 基本生成](./examples/javascript/basic.mjs)
- [JavaScript: image-to-image](./examples/javascript/image-to-image.mjs)
- [JavaScript: upscale](./examples/javascript/upscale.mjs)
- [JavaScript: inpaint](./examples/javascript/inpaint.mjs)

## ワークフロー比較

| 必要なこと | 推奨 workflow | 理由 |
|---|---|---|
| 最新生成 | `mj-v8.1` | 最新 V8.1 モデル |
| 高速スケッチ | `mj-v8.1` + `speed: "draft"` | 軽量 0.5K スケッチ 24 枚 |
| HD 出力 | `mj-v8.1` + `quality: "hd"` | native HD 出力 |
| バリエーション | `mj-v8.1-variation` | subtle / strong バリエーション |
| prompt による再解釈 | `mj-v8.1-remix` | 元構造を保った新 prompt |
| キャンバス編集 | `mj-v8.1-edit` | 再配置して空白を補完 |
| アップロード画像編集 | `mj-v8.1-upload-paint` | マスクとキャンバスの workflow |
| 背景削除 | `mj-v8.1-remove-bg` | prompt や speed フィールド不要 |
| 既存 V7 フロー | V7 模型 | 互換性を保持 |

## 本番運用メモ

- Bearer token 認証
- 非同期タスク
- callback は HTTPS のみ。プライベート IP URL は不可
- callback タイムアウトは10秒、最大3回リトライ
- 公式ドキュメント上、V8.1 画像リンクは30日有効
- `model_params.speed` が速度を制御
- トップレベル `quality` 控制输出分辨率
- `draft` は24枚のスケッチを返し、`quality: "hd"` と併用不可
- `mj-v8.1-remove-bg` 只接受 `model` 和 `image_urls`
- V7 ドキュメントと例は互換性のため保持

## FAQ

### 新しい Midjourney API 統合ではどのモデルを使うべきですか？
保持された V7 workflow が必要な場合を除き、新しい画像生成には `mj-v8.1` を使います。

### V8.1 の HD 出力はどう有効化しますか？
トップレベルで `"quality": "hd"` を設定し、`model_params.speed` は `fast` または `turbo` にします。`hd` と `draft` は組み合わせないでください。

### prompt に `--turbo`、`--draft`、`--hd` を書けますか？
いいえ。速度は `model_params.speed`、出力品質はトップレベルの `quality` で制御します。

### V7 の例はまだ使えますか？
はい。V7 ドキュメントと例は既存統合向けに意図的に保持されています。

## 関連リンク

- [Midjourney V8.1 画像生成 Docs](https://docs.evolink.ai/en/api-manual/image-series/midjourney/mj-v8-1-image-generate?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api)
- [Midjourney V8.1 Prompt Guide](https://docs.evolink.ai/en/api-manual/image-series/midjourney/midjourney-v8-1-prompt-guide?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api)
- [Preserved Midjourney V7 画像生成 Docs](https://docs.evolink.ai/en/api-manual/image-series/midjourney/mj-v7-image-generate?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api)
- [API キー](https://evolink.ai/signup?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api)

## リポジトリ注記

このリポジトリは EvoLink.ai の Midjourney API 用ドキュメントと例のハブです。詳細な公式 workflow は `docs/official-api/` に整理され、`mjv7参考/` はローカル参照として残り、`.gitignore` によりアップロード対象外です。
