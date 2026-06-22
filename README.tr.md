# Midjourney API: V8.1 ve V7 dokümanları, iş akışları ve entegrasyon örnekleri

<p align="center">
  <a href="./README.md">English</a> · <a href="./README.es.md">Español</a> · <a href="./README.pt.md">Português</a> · <a href="./README.ja.md">日本語</a> · <a href="./README.ko.md">한국어</a> · <a href="./README.de.md">Deutsch</a> · <a href="./README.fr.md">Français</a> · <a href="./README.tr.md">Türkçe</a> · <a href="./README.zh-TW.md">繁體中文</a> · <a href="./README.zh-CN.md">简体中文</a> · <a href="./README.ru.md">Русский</a>
</p>

<p align="center">
  <a href="https://docs.evolink.ai/en/api-manual/image-series/midjourney/mj-v8-1-image-generate?utm_source=github&utm_medium=banner&utm_campaign=midjourney-api">
    <img src="./assets/banner.jpg" alt="Midjourney API - V8.1 ve V7 resmi dokümanları ve entegrasyon örnekleri" width="100%" />
  </a>
</p>

<p align="center">
  EvoLink ile en yeni Midjourney V8.1 görüntü üretim iş akışlarını entegre edin; mevcut entegrasyonlar için V7 dokümanlarını koruyun.
</p>

<p align="left">
  <a href="https://docs.evolink.ai/en/api-manual/image-series/midjourney/mj-v8-1-image-generate?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api">V8.1 görüntü üretim dokümanını oku</a> ·
  <a href="https://docs.evolink.ai/en/api-manual/image-series/midjourney/midjourney-v8-1-prompt-guide?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api">V8.1 prompt kılavuzunu oku</a> ·
  <a href="https://evolink.ai/signup?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api">API anahtarı al</a>
</p>

## EvoLink hızlı başlangıç

Tek API çağrısıyla Midjourney V8.1 görüntü üretimini kullanın.

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

## Tam ilk çalıştırma akışı

Midjourney üretim ve düzenleme işlemleri asenkrondur. Üretim entegrasyonunda görev oluşturun, görev ID’sini saklayın, durum sorgulayın veya callback alın ve nihai görüntü URL’lerini süresi dolmadan kaydedin.

```bash
export EVOLINK_API_KEY="your_key_here"
bash examples/curl/complete-flow.sh
```

Tam örnekler:

- [cURL complete flow](./examples/curl/complete-flow.sh)
- [Python complete flow](./examples/python/complete_flow.py)
- [JavaScript complete flow](./examples/javascript/complete-flow.mjs)
- [cURL V8.1 generation](./examples/curl/generate-image-v8-1.sh)
- [JavaScript V8.1 generation](./examples/javascript/basic-v8-1.mjs)

## Midjourney API nedir?

EvoLink.ai üzerindeki Midjourney API, geliştiricilere tek bir API anahtarıyla Midjourney görüntü üretim ve düzenleme iş akışlarına erişim sağlar. Bu depo en yeni Midjourney V8.1 üretim ailesini kapsar ve hâlâ V7 model ID’lerine bağlı entegrasyonlar için V7 referanslarını korur.

Bu depo şu geliştiriciler için hazırlanmıştır:

- Midjourney V8.1 görüntü üretimini üretim uygulamalarına entegre etmek isteyenler
- V8.1 hız, kalite, prompt parametresi ve workflow davranışını anlamak isteyenler
- geçiş sırasında V7 örneklerini erişilebilir tutmak isteyenler
- üretim, variation, remix, düzenleme, retexture veya arka plan kaldırma için doğru işlemi seçmek isteyenler

## Midjourney API için neden EvoLink kullanılmalı

- Midjourney V8.1 ve korunan V7 örnekleri için tek API anahtarı
- üretim entegrasyonu için tasarlanmış asenkron görev akışı
- üst seviye `quality` alanıyla V8.1 yerel HD çıktı
- `model_params.speed` ile V8.1 hız kontrolü
- Midjourney yerel prompt parametreleri ve referans iş akışları desteği
- görev tamamlama iş akışları için HTTPS callback desteği

## Midjourney V8.1 fiyatlandırma notları

V8.1 resmi dokümanları ücretlendirmeyi hız ve kalite çarpanlarıyla açıklar. Bu depo V8.1 için sabit dolar fiyatları uydurmaz.

| Ayar | Değerler | Ücretlendirme notu |
|---|---|---|
| `model_params.speed` | `draft`, `fast`, `turbo` | `draft` / `fast` = 1x; `turbo` ≈ 2x |
| `quality` | `standard`, `hd` | `standard` = 1x; `hd` = 1.5x |
| Birleşik maliyet | speed x quality | `turbo` + `hd` ≈ 3x |

> V8.1 `draft` tek çalıştırmada 24 hafif 0.5K eskiz döndürür ve `quality: "hd"` ile birlikte kullanılamaz. fast ve turbo modları üretim başına 4 görüntü döndürür.

## Korunan Midjourney V7 üretim fiyatları

| Model | Mod | Hız | Fiyat | Notlar |
|---|---|---|---:|---|
| `mj-v7` | görüntü üretimi | draft | $0.040 / istek | yaklaşık 2,7 kredi; istek başına 4 görüntü |
| `mj-v7` | görüntü üretimi | fast | $0.079 / istek | varsayılan mod; yaklaşık 5,4 kredi |
| `mj-v7` | görüntü üretimi | turbo | $0.159 / istek | öncelikli mod; yaklaşık 10,8 kredi |

## En yeni Midjourney V8.1 iş akışları

| İş akışı | Model | Özet |
|---|---|---|
| Görüntü Üretimi | `mj-v8.1` | V8.1 prompt sözdizimi, `quality` ve `speed` ile metinden görüntü ve görüntüden görüntü |
| Varyasyon | `mj-v8.1-variation` | tamamlanmış bir V8.1 görevinden subtle veya strong varyantlar oluşturma |
| Remix | `mj-v8.1-remix` | zorunlu yeni prompt ile tamamlanmış sonucu yeniden yorumlama |
| Retexture | `mj-v8.1-retexture` | giriş görüntüsü URL’sinden doğrudan doku veya stil değiştirme |
| Upload Paint | `mj-v8.1-upload-paint` | yüklenen görüntü, mask ve konum alanlarıyla gelişmiş canvas düzenleme |
| Canvas Edit | `mj-v8.1-edit` | görev görüntüsünü canvas üzerinde yeniden konumlandırıp boş alanları doldurma |
| Arka Plan Kaldırma | `mj-v8.1-remove-bg` | prompt veya speed olmadan bir görüntü URL’sinden arka plan kaldırma |

## Korunan Midjourney V7 iş akışları

| İş akışı | Model | Özet |
|---|---|---|
| Görüntü Üretimi | `mj-v7` | V7 metinden görüntü / görüntüden görüntü |
| Upscale | `mj-v7-upscale` | seçilen bir görüntüyü büyütme |
| Inpaint | `mj-v7-inpaint` | maskelenmiş alanı düzenleme |
| Outpaint | `mj-v7-outpaint` | görüntü sınırının ötesine genişletme |
| Pan | `mj-v7-pan` | tek yönde genişletme |
| Remix | `mj-v7-remix` | yeni prompt ile yeniden yorumlama |
| Retexture | `mj-v7-retexture` | yapıyı koruyarak doku/stil değiştirme |
| Canvas Edit | `mj-v7-edit` | görüntüyü yeniden konumlandırıp boş alanları doldurma |
| Enhance | `mj-v7-enhance` | seçili sonucu iyileştirme |
| Arka Plan Kaldırma | `mj-v7-remove-bg` | şeffaf konu kesimi |
| Upload Paint | `mj-v7-upload-paint` | upload, maske ve canvas ile gelişmiş düzenleme |

## Resmi API dokümanları

Ayrıntılı workflow referansları ayrı dokümanlarda tutulur; README gezinme, fiyat notları ve entegrasyon rehberine odaklanır.

En yeni V8.1 dokümanları:

- [V8.1 Görüntü Üretimi](./docs/official-api/v8-1-image-generation.md)
- [V8.1 Varyasyon](./docs/official-api/v8-1-variation.md)
- [V8.1 Remix](./docs/official-api/v8-1-remix.md)
- [V8.1 Retexture](./docs/official-api/v8-1-retexture.md)
- [V8.1 Upload Paint](./docs/official-api/v8-1-upload-paint.md)
- [V8.1 Canvas Edit](./docs/official-api/v8-1-canvas-edit.md)
- [V8.1 Arka Plan Kaldırma](./docs/official-api/v8-1-remove-background.md)
- [Prompt Parametreleri](./docs/prompt-parameters.md)

Korunan V7 dokümanları:

- [V7 Görüntü Üretimi](./docs/official-api/image-generation.md)
- [V7 görüntüden görüntü ve referans](./docs/official-api/image-to-image-and-reference.md)
- [V7 Upscale](./docs/official-api/upscale.md)
- [V7 Inpaint](./docs/official-api/inpaint.md)
- [V7 Outpaint](./docs/official-api/outpaint.md)
- [V7 Pan](./docs/official-api/pan.md)
- [V7 Remix](./docs/official-api/remix.md)
- [V7 Retexture](./docs/official-api/retexture.md)
- [V7 Canvas Edit](./docs/official-api/canvas-edit.md)
- [V7 Enhance](./docs/official-api/enhance.md)
- [V7 Arka Plan Kaldırma](./docs/official-api/remove-background.md)
- [V7 Upload Paint](./docs/official-api/upload-paint.md)

## Prompt parametrelerine genel bakış

Midjourney V8.1, `prompt` içinde yerel parametre sözdizimini destekler; ancak hız ve çıktı kalitesi API alanlarıdır.

| Kontrol | Nerede ayarlanır | Değerler |
|---|---|---|
| Hız | `model_params.speed` | `draft`, `fast`, `turbo` |
| Çıktı kalitesi | üst seviye `quality` | `standard`, `hd` |
| Prompt parametreleri | `prompt` | `--ar`, `--c`, `--seed`, `--s`, `--exp`, `--raw`, `--iw`, `--sref`, `--sw`, `--oref`, `--ow` |

V8.1 bu rotada `--q`, `--no`, `--weird`, `--tile`, `--sv`, `--stop`, `--cref`, `--cw`, `--relax`, `--repeat`, `--p`, permütasyonlar, public/stealth bayrakları, `--niji` veya multi-prompt `::` sunmaz.

## Entegrasyon akışı

1. EvoLink.ai API anahtarı
2. `POST /v1/images/generations`
3. görev ID’sini kaydet
4. `GET /v1/tasks/{task_id}` sorgula veya callback kullan
5. son görüntü URL’lerini süre dolmadan kaydet

## Kod örnekleri

En yeni V8.1 örnekleri:

- [cURL: V8.1 generation](./examples/curl/generate-image-v8-1.sh)
- [JavaScript: V8.1 generation](./examples/javascript/basic-v8-1.mjs)

Korunan V7 örnekleri:

- [cURL: tam ilk çalıştırma akışı](./examples/curl/complete-flow.sh)
- [cURL: temel üretim](./examples/curl/generate-image.sh)
- [cURL: görüntüden görüntü](./examples/curl/image-to-image.sh)
- [cURL: upscale](./examples/curl/upscale.sh)
- [cURL: inpaint](./examples/curl/inpaint.sh)
- [Python: tam ilk çalıştırma akışı](./examples/python/complete_flow.py)
- [JavaScript: tam ilk çalıştırma akışı](./examples/javascript/complete-flow.mjs)
- [JavaScript: temel üretim](./examples/javascript/basic.mjs)
- [JavaScript: görüntüden görüntü](./examples/javascript/image-to-image.mjs)
- [JavaScript: upscale](./examples/javascript/upscale.mjs)
- [JavaScript: inpaint](./examples/javascript/inpaint.mjs)

## İş akışı karşılaştırması

| İhtiyacınız varsa... | Önerilen workflow | Neden |
|---|---|---|
| en yeni üretim | `mj-v8.1` | en yeni V8.1 modeli |
| hızlı eskizler | `mj-v8.1` + `speed: "draft"` | 24 hafif 0.5K eskiz |
| HD çıktı | `mj-v8.1` + `quality: "hd"` | yerel HD çıktı |
| varyantlar | `mj-v8.1-variation` | subtle / strong varyantlar |
| prompt ile yeniden yorumlama | `mj-v8.1-remix` | kaynak yapıyla yeni prompt |
| canvas düzenleme | `mj-v8.1-edit` | yeniden konumlandırma ve boş alanları doldurma |
| yüklenen görüntü düzenleme | `mj-v8.1-upload-paint` | maske ve canvas workflow |
| arka plan kaldırma | `mj-v8.1-remove-bg` | prompt veya speed alanı yok |
| mevcut V7 akışları | V7 模型 | korunan uyumluluk |

## Üretim notları

- Bearer token kimlik doğrulaması
- asenkron görevler
- yalnızca HTTPS callback; özel IP callback URL’leri yasaktır
- callback timeout 10 saniye, en fazla 3 tekrar
- resmi dokümana göre V8.1 görüntü bağlantıları 30 gün geçerlidir
- `model_params.speed` hızı kontrol eder
- üst seviye `quality` çıktı çözünürlüğünü kontrol eder
- `draft` 24 eskiz döndürür ve `quality: "hd"` ile uyumsuzdur
- `mj-v8.1-remove-bg` yalnızca `model` ve `image_urls` kabul eder
- V7 dokümanları ve örnekleri uyumluluk için korunur

## SSS

### Yeni Midjourney API entegrasyonları için hangi modeli kullanmalıyım?
Korunan bir V7 workflow özellikle gerekmiyorsa yeni görüntü üretimi için `mj-v8.1` kullanın.

### V8.1 HD çıktısını nasıl etkinleştiririm?
Üst seviyede `"quality": "hd"` ayarlayın ve `model_params.speed` için `fast` veya `turbo` kullanın. `hd` ile `draft` birlikte kullanılmaz.

### Prompt içinde `--turbo`, `--draft` veya `--hd` yazabilir miyim?
Hayır. Hız `model_params.speed` ile, çıktı kalitesi üst seviye `quality` alanıyla kontrol edilir.

### V7 örneklerini kullanmaya devam edebilir miyim?
Evet. V7 dokümanları ve örnekleri mevcut entegrasyonlar için bilinçli olarak korunur.

## İlgili bağlantılar

- [Midjourney V8.1 Görüntü Üretimi Docs](https://docs.evolink.ai/en/api-manual/image-series/midjourney/mj-v8-1-image-generate?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api)
- [Midjourney V8.1 Prompt Guide](https://docs.evolink.ai/en/api-manual/image-series/midjourney/midjourney-v8-1-prompt-guide?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api)
- [Preserved Midjourney V7 Görüntü Üretimi Docs](https://docs.evolink.ai/en/api-manual/image-series/midjourney/mj-v7-image-generate?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api)
- [API Anahtarı](https://evolink.ai/signup?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api)

## Depo notu

Bu depo, EvoLink.ai üzerinde Midjourney API kullanımı için dokümantasyon ve örnek merkezidir. Ayrıntılı resmi workflow içerikleri `docs/official-api/` altında düzenlenmiştir; `mjv7参考/` yerel referans olarak kalır ve `.gitignore` ile upload dışında bırakılır.
