# Midjourney API：料金・公式ドキュメント・ワークフロー・統合ガイド

<p align="center">
  <a href="./README.md">English</a> · <a href="./README.es.md">Español</a> · <a href="./README.pt.md">Português</a> · <a href="./README.ja.md">日本語</a> · <a href="./README.ko.md">한국어</a> · <a href="./README.de.md">Deutsch</a> · <a href="./README.fr.md">Français</a> · <a href="./README.tr.md">Türkçe</a> · <a href="./README.zh-TW.md">繁體中文</a> · <a href="./README.zh-CN.md">简体中文</a> · <a href="./README.ru.md">Русский</a>
</p>

<p align="center">
  <a href="https://evolink.ai/midjourney-v7?utm_source=github&utm_medium=banner&utm_campaign=midjourney-api">
    <img src="./assets/banner.jpg" alt="Midjourney API - 料金・公式ドキュメント・統合ガイド" width="100%" />
  </a>
</p>

<p align="center">
  Midjourney APIの料金を比較し、Midjourney V7の公式ワークフロードキュメントを確認して、統一されたAPIで画像生成・編集を統合しましょう。
</p>

## クイックスタート

1回のAPI呼び出しでMidjourney V7の画像生成を使用します。

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
  <a href="https://evolink.ai/midjourney-v7?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api">Midjourney API料金を見る</a> ·
  <a href="https://evolink.ai/signup?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api">APIキーを取得する</a> ·
  <a href="https://docs.evolink.ai/en/api-manual/image-series/midjourney/mj-v7-image-generate?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api">APIドキュメントを読む</a>
</p>

## Midjourney APIとは？

EvoLink.aiのMidjourney APIは、統一されたAPIキーを通じてMidjourney V7の画像生成・編集ワークフローへのアクセスを開発者に提供します。このリポジトリに提供された公式リファレンスに基づき、現在対応している操作には：画像生成、画像から画像、スタイル・オブジェクトリファレンスワークフロー、upscale、inpaint、outpaint、pan、remix、retexture、canvas edit、enhance、remove background、upload paintが含まれます。

このリポジトリは、以下を目的とする開発者向けに構築されています：

- Midjourney APIの料金と課金動作を理解する
- Midjourney V7の公式ワークフロー対応状況を一か所で確認する
- タスクに適したMidjourney操作を選択する
- Midjourneyの生成・編集を本番アプリに統合する

## EvoLinkをMidjourney APIに使う理由

- Midjourney V7の生成・編集ワークフローに対応した1つのAPIキー
- draft、fast、turbo生成の透明なリクエスト単位の料金設定
- 本番統合向けに設計された非同期タスクフロー
- Midjourney V7のネイティブプロンプトパラメータとリファレンスワークフローのサポート
- タスク完了ワークフロー向けのHTTPSコールバックサポート
- 公式製品ページにおける99.9%稼働率の実績

## Midjourney APIの料金

以下の料金は、このリポジトリに提供されたMidjourney V7製品リファレンスに従います。

| モデル | モード | 速度 | 料金 | 備考 |
|---|---|---|---:|---|
| `mj-v7` | 画像生成 | draft | $0.040 / リクエスト | 約2.7クレジット、1リクエストあたり4画像 |
| `mj-v7` | 画像生成 | fast | $0.079 / リクエスト | デフォルトモード、約5.4クレジット |
| `mj-v7` | 画像生成 | turbo | $0.159 / リクエスト | 優先モード、約10.8クレジット |

> 各リクエストで4枚の画像が生成されます。Midjourneyのコンテンツモデレーションにより一部の出力がフィルタリングされる場合があるため、返される結果は1〜4枚の画像を含む場合があります。課金はリクエスト単位であり、画像単位ではありません。

## 対応Midjourney V7ワークフロー

| ワークフロー | モデル | 概要 |
|---|---|---|
| 画像生成 | `mj-v7` | Midjourney V7ネイティブプロンプト構文によるテキストから画像、画像から画像 |
| Upscale | `mj-v7-upscale` | 完了したタスクから選択した1枚の画像を拡大 |
| Inpaint | `mj-v7-inpaint` | 選択した画像のマスク領域を編集 |
| Outpaint | `mj-v7-outpaint` | 元の画像の境界を超えて拡張 |
| Pan | `mj-v7-pan` | 一方向に構図を延長 |
| Remix | `mj-v7-remix` | 新しいプロンプトで既存画像を再解釈 |
| Retexture | `mj-v7-retexture` | 構造を保ちながらテクスチャやスタイルを変更 |
| Canvas Edit | `mj-v7-edit` | キャンバス上で画像を再配置し、空白部分を埋める |
| Enhance | `mj-v7-enhance` | 選択した生成済み画像を改善 |
| Remove Background | `mj-v7-remove-bg` | 入力画像から透明な被写体の切り抜きを生成 |
| Upload Paint | `mj-v7-upload-paint` | アップロードした画像・マスク・キャンバス設定を使った高度な編集フロー |

## 公式APIドキュメント

詳細なワークフローリファレンスは別のドキュメントに掲載されており、READMEはナビゲーション・料金・統合ガイダンスに集中しています。以下の各ページは、このリポジトリに提供された公式リファレンス資料に準拠しています。

- [画像生成](./docs/official-api/image-generation.md)
- [画像から画像とリファレンス](./docs/official-api/image-to-image-and-reference.md)
- [プロンプトパラメータ](./docs/prompt-parameters.md)
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

## プロンプトパラメータの概要

Midjourney V7は`prompt`フィールド内でネイティブのパラメータ構文を直接サポートしています。

| パラメータ | 例 | 用途 |
|---|---|---|
| `--ar` | `--ar 16:9` | アスペクト比 |
| `--s` | `--s 500` | スタイライズ強度 |
| `--c` / `--chaos` | `--c 30` | 結果の多様性 |
| `--q` | `--q 2` | 品質レベル |
| `--seed` | `--seed 12345` | 再現可能な探索 |
| `--no` | `--no text, watermark` | 要素の除外 |
| `--iw` | `--iw 1.5` | 画像プロンプトの重み |
| `--sref` | `--sref https://...` | スタイルリファレンス |
| `--oref` | `--oref https://...` | オブジェクトリファレンス |
| `--raw` | `--raw` | 美化を軽減 |
| `--tile` | `--tile` | シームレスパターン生成 |
| `--w` | `--w 500` | 奇妙さ |
| `--exp` | `--exp 25` | 実験的な美学 |

詳細なパラメータルールは[`docs/prompt-parameters.md`](./docs/prompt-parameters.md)にあります。

## 統合ワークフロー

1. EvoLink.aiでAPIキーを取得する
2. `POST /v1/images/generations`で生成または編集タスクを作成する
3. 返されたタスクIDを保存する
4. タスクが完了するまで`GET /v1/tasks/{task_id}`をポーリングする
5. 生成されたリンクは一時的なため、結果の画像を速やかにダウンロードして保存する

## コード例

- [cURL: 基本的な生成](./examples/curl/generate-image.sh)
- [cURL: 画像から画像](./examples/curl/image-to-image.sh)
- [cURL: upscale](./examples/curl/upscale.sh)
- [cURL: inpaint](./examples/curl/inpaint.sh)
- [JavaScript: 基本的な生成](./examples/javascript/basic.mjs)
- [JavaScript: 画像から画像](./examples/javascript/image-to-image.mjs)
- [JavaScript: upscale](./examples/javascript/upscale.mjs)
- [JavaScript: inpaint](./examples/javascript/inpaint.mjs)

## ワークフロー比較

| 目的 | 推奨ワークフロー | 理由 |
|---|---|---|
| 初回生成 | `mj-v7` | V7ネイティブ画像生成 |
| プロンプトに1枚以上のリファレンス画像を使用 | `mj-v7` | プロンプトの先頭に画像URLをサポート |
| 選択したローカル領域のみを変更 | `mj-v7-inpaint` | マスクベースの編集 |
| 構図を外側に拡張 | `mj-v7-outpaint` | 元の画像を超えた広いフレーミング |
| 左・右・上・下に延長 | `mj-v7-pan` | 方向性のある拡張 |
| 新しいプロンプトで1つの結果を再解釈 | `mj-v7-remix` | 既存タスクからプロンプトベースのバリエーション |
| レイアウトを保ちながら素材や仕上げを変更 | `mj-v7-retexture` | 入力画像からのスタイル・テクスチャ変換 |
| 1枚の画像から被写体を切り抜く | `mj-v7-remove-bg` | プロンプト不要 |
| より大きなキャンバスに画像を再配置 | `mj-v7-edit` | 配置制御付きキャンバス拡張 |

## 本番環境での注意事項

- すべてのエンドポイントにBearerトークン認証が必要
- Midjourneyの生成・編集ワークフローは非同期
- コールバックはHTTPSを使用する必要があり、プライベートIPアドレスを対象にできない
- コールバックのタイムアウトは10秒で、最大3回のリトライ
- 生成された画像リンクは24時間有効なため、速やかに保存すること
- `--v`、`--version`、`--niji`はここではV7リクエストでサポートされていない
- `--fast`、`--draft`、`--turbo`はプロンプトに書かず、`model_params.speed`を使用すること
- 編集ワークフローは通常、完了したタスクIDと選択した画像番号が必要
- remove backgroundはプロンプトや速度パラメータを使用しない
- retextureとremove backgroundは、元タスクに依存する代わりに入力画像URLを直接受け入れる

## よくある質問

### Midjourney APIの課金方法は？
Midjourney V7の生成はリクエスト単位で課金されます（画像単位ではありません）。1リクエストで4つの出力を対象としますが、モデレーションフィルタリングにより返される画像数が減る場合があります。

### 画像から画像はどうすればよいですか？
`prompt`の先頭に1つ以上の画像URLを配置し、テキストの説明とMidjourneyのパラメータを追加します。

### 編集エンドポイントにタスクIDが必要な理由は？
upscale、inpaint、outpaint、pan、enhance、remixなどの操作は、完了したタスクから選択した画像に対して動作するため、元のタスクの参照が必要です。

### プロンプトに`--turbo`や`--draft`を使えますか？
いいえ。速度は`model_params.speed`で制御します。

## 関連リンク

- [Midjourney V7製品ページ](https://evolink.ai/midjourney-v7?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api)
- [APIキーを取得する](https://evolink.ai/signup?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api)
- [Midjourney APIドキュメント](https://docs.evolink.ai/en/api-manual/image-series/midjourney/mj-v7-image-generate?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api)

## リポジトリについて

このリポジトリは、EvoLink.aiでのMidjourney API使用のためのドキュメントとサンプルのハブです。詳細な公式ワークフロー資料は`docs/official-api/`に整理されており、`mjv7参考/`はローカルリファレンス資料として残され、`.gitignore`によってアップロードから除外されています。
