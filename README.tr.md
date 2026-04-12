# Midjourney API: Fiyatlandırma, Resmi Belgeler, İş Akışları ve Entegrasyon Kılavuzu

<p align="center">
  <a href="./README.md">English</a> · <a href="./README.es.md">Español</a> · <a href="./README.pt.md">Português</a> · <a href="./README.ja.md">日本語</a> · <a href="./README.ko.md">한국어</a> · <a href="./README.de.md">Deutsch</a> · <a href="./README.fr.md">Français</a> · <a href="./README.tr.md">Türkçe</a> · <a href="./README.zh-TW.md">繁體中文</a> · <a href="./README.zh-CN.md">简体中文</a> · <a href="./README.ru.md">Русский</a>
</p>

<p align="center">
  <a href="https://evolink.ai/midjourney-v7?utm_source=github&utm_medium=banner&utm_campaign=midjourney-api">
    <img src="./assets/banner.jpg" alt="Midjourney API - Fiyatlandırma, Resmi Belgeler ve Entegrasyon Kılavuzu" width="100%" />
  </a>
</p>

<p align="center">
  Midjourney API fiyatlarını karşılaştırın, resmi Midjourney V7 iş akışı belgelerini inceleyin ve tek bir birleşik API aracılığıyla görüntü oluşturma ve düzenlemeyi entegre edin.
</p>

## Hızlı Başlangıç

Tek bir API çağrısıyla Midjourney V7 görüntü oluşturmayı kullanın.

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
  <a href="https://evolink.ai/midjourney-v7?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api">Midjourney API Fiyatlarını Görüntüle</a> ·
  <a href="https://evolink.ai/signup?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api">API Anahtarı Al</a> ·
  <a href="https://docs.evolink.ai/en/api-manual/image-series/midjourney/mj-v7-image-generate?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api">API Belgelerini Oku</a>
</p>

## Midjourney API Nedir?

EvoLink.ai'deki Midjourney API, geliştiricilere tek bir birleşik API anahtarı aracılığıyla Midjourney V7 görüntü oluşturma ve düzenleme iş akışlarına erişim sağlar. Bu depo için sağlanan resmi referanslara dayanarak, şu anda desteklenen işlemler şunlardır: görüntü oluşturma, görüntüden görüntüye, stil ve nesne referansı iş akışları, upscale, inpaint, outpaint, pan, remix, retexture, canvas edit, enhance, remove background ve upload paint.

Bu depo, aşağıdakileri isteyen geliştiriciler için oluşturulmuştur:

- Midjourney API fiyatlandırmasını ve faturalandırma davranışını anlamak
- Midjourney V7 iş akışı kapsamını tek bir yerde incelemek
- Bir görev için doğru Midjourney işlemini seçmek
- Midjourney oluşturma ve düzenlemeyi üretim uygulamalarına entegre etmek

## Midjourney API için Neden EvoLink Kullanmalı?

- Midjourney V7 oluşturma ve düzenleme iş akışları için tek API anahtarı
- draft, fast ve turbo oluşturma için istek başına şeffaf fiyatlandırma
- üretim entegrasyonu için tasarlanmış asenkron görev akışı
- Midjourney V7 yerel prompt parametreleri ve referans iş akışları desteği
- görev tamamlama iş akışları için HTTPS callback desteği
- resmi ürün sayfasında %99,9 çalışma süresi konumlandırması

## Midjourney API Fiyatlandırması

Aşağıdaki fiyatlar, bu depo için sağlanan Midjourney V7 ürün referansını takip eder.

| Model | Mod | Hız | Fiyat | Notlar |
|---|---|---|---:|---|
| `mj-v7` | görüntü oluşturma | draft | $0,040 / istek | yaklaşık 2,7 kredi, istek başına 4 görüntü |
| `mj-v7` | görüntü oluşturma | fast | $0,079 / istek | varsayılan mod, yaklaşık 5,4 kredi |
| `mj-v7` | görüntü oluşturma | turbo | $0,159 / istek | öncelikli mod, yaklaşık 10,8 kredi |

> Her istek 4 görüntü üretir. Midjourney içerik moderasyonu bazı çıktıları filtreleyebilir, bu nedenle döndürülen sonuç 1 ila 4 görüntü içerebilir. Faturalandırma görüntü başına değil, istek başına yapılır.

## Desteklenen Midjourney V7 İş Akışları

| İş Akışı | Model | Özet |
|---|---|---|
| Görüntü Oluşturma | `mj-v7` | Midjourney V7 yerel prompt sözdizimi ile metin-görüntü ve görüntü-görüntü |
| Upscale | `mj-v7-upscale` | tamamlanmış bir görevden seçilen bir görüntüyü büyütme |
| Inpaint | `mj-v7-inpaint` | seçilen bir görüntüdeki maskelenmiş alanı düzenleme |
| Outpaint | `mj-v7-outpaint` | orijinal görüntü sınırının ötesine genişletme |
| Pan | `mj-v7-pan` | kompozisyonu bir yönde genişletme |
| Remix | `mj-v7-remix` | mevcut bir görüntüyü yeni bir prompt ile yeniden yorumlama |
| Retexture | `mj-v7-retexture` | yapıyı koruyarak doku veya stili değiştirme |
| Canvas Edit | `mj-v7-edit` | görüntüyü tuval üzerinde yeniden konumlandırma ve boş alanları doldurma |
| Enhance | `mj-v7-enhance` | seçilen oluşturulmuş bir görüntüyü iyileştirme |
| Remove Background | `mj-v7-remove-bg` | bir giriş görüntüsünden şeffaf özne kesimi oluşturma |
| Upload Paint | `mj-v7-upload-paint` | yüklenen görüntü, maske ve tuval ayarlarını kullanan gelişmiş düzenleme akışı |

## Resmi API Belgeleri

Ayrıntılı iş akışı referansları, README'nin navigasyon, fiyatlandırma ve entegrasyon rehberliğine odaklanması için ayrı belgelerde yer almaktadır. Aşağıdaki her sayfa, bu depo için sağlanan resmi referans materyalleriyle hizalanmıştır.

- [Görüntü Oluşturma](./docs/official-api/image-generation.md)
- [Görüntüden Görüntüye ve Referans](./docs/official-api/image-to-image-and-reference.md)
- [Prompt Parametreleri](./docs/prompt-parameters.md)
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

## Prompt Parametrelerine Genel Bakış

Midjourney V7, `prompt` alanı içinde doğrudan yerel parametre sözdizimini destekler.

| Parametre | Örnek | Amaç |
|---|---|---|
| `--ar` | `--ar 16:9` | en boy oranı |
| `--s` | `--s 500` | stilize etme gücü |
| `--c` / `--chaos` | `--c 30` | sonuç çeşitliliği |
| `--q` | `--q 2` | kalite seviyesi |
| `--seed` | `--seed 12345` | tekrarlanabilir keşif |
| `--no` | `--no text, watermark` | öğeleri dışla |
| `--iw` | `--iw 1.5` | görüntü prompt ağırlığı |
| `--sref` | `--sref https://...` | stil referansı |
| `--oref` | `--oref https://...` | nesne referansı |
| `--raw` | `--raw` | güzelleştirmeyi azalt |
| `--tile` | `--tile` | kesintisiz desen oluşturma |
| `--w` | `--w 500` | tuhaflık |
| `--exp` | `--exp 25` | deneysel estetik |

Ayrıntılı parametre kuralları [`docs/prompt-parameters.md`](./docs/prompt-parameters.md) dosyasındadır.

## Entegrasyon İş Akışı

1. EvoLink.ai'den API anahtarı al
2. `POST /v1/images/generations` ile oluşturma veya düzenleme görevi oluştur
3. döndürülen görev kimliğini sakla
4. görev tamamlanana kadar `GET /v1/tasks/{task_id}` sorgula
5. oluşturulan bağlantılar geçici olduğundan ortaya çıkan görüntüleri hemen indir ve kaydet

## Kod Örnekleri

- [cURL: temel oluşturma](./examples/curl/generate-image.sh)
- [cURL: görüntüden görüntüye](./examples/curl/image-to-image.sh)
- [cURL: upscale](./examples/curl/upscale.sh)
- [cURL: inpaint](./examples/curl/inpaint.sh)
- [JavaScript: temel oluşturma](./examples/javascript/basic.mjs)
- [JavaScript: görüntüden görüntüye](./examples/javascript/image-to-image.mjs)
- [JavaScript: upscale](./examples/javascript/upscale.mjs)
- [JavaScript: inpaint](./examples/javascript/inpaint.mjs)

## İş Akışı Karşılaştırması

| İhtiyacınız varsa... | Önerilen iş akışı | Neden |
|---|---|---|
| ilk geçiş oluşturma | `mj-v7` | yerel V7 görüntü oluşturma |
| promptta bir veya daha fazla referans görüntüsü kullanma | `mj-v7` | promptun başında görüntü URL'lerini destekler |
| yalnızca seçili bir yerel alanı değiştirme | `mj-v7-inpaint` | maske tabanlı düzenleme |
| kompozisyonu dışa doğru genişletme | `mj-v7-outpaint` | orijinal görüntünün ötesinde daha geniş çerçeveleme |
| sol, sağ, yukarı veya aşağı uzatma | `mj-v7-pan` | yönlü uzatma |
| yeni bir promptla bir sonucu yeniden yorumlama | `mj-v7-remix` | mevcut bir görevden prompt tabanlı varyasyon |
| düzeni koruyarak malzeme veya bitişi değiştirme | `mj-v7-retexture` | giriş görüntüsünden stil ve doku dönüşümü |
| bir görüntüden özne kesimi | `mj-v7-remove-bg` | prompt gerekmez |
| bir görüntüyü daha büyük bir tuvale yeniden konumlandırma | `mj-v7-edit` | yerleştirme kontrolüyle tuval genişletme |

## Üretim Notları

- tüm endpoint'ler Bearer token kimlik doğrulaması gerektirir
- Midjourney oluşturma ve düzenleme iş akışları asenkrondur
- callback'ler HTTPS kullanmalı ve özel IP adreslerini hedef alamaz
- callback zaman aşımı en fazla 3 yeniden deneme ile 10 saniyedir
- oluşturulan görüntü bağlantıları 24 saat geçerlidir, hemen kaydedin
- `--v`, `--version` ve `--niji` burada V7 isteklerinde desteklenmez
- `--fast`, `--draft` ve `--turbo` promptta yazılmamalı, `model_params.speed` kullanın
- düzenleme iş akışları genellikle tamamlanmış görev kimliği ve seçilen görüntü numarası gerektirir
- remove background, prompt veya hız parametresi kullanmaz
- retexture ve remove background, kaynak bir göreve dayanmak yerine giriş görüntüsü URL'lerini doğrudan kabul eder

## SSS

### Midjourney API nasıl faturalandırılır?
Midjourney V7 oluşturma, görüntü başına değil istek başına faturalandırılır. Bir istek 4 çıktıyı hedefler, ancak moderasyon filtresi döndürülen görüntü sayısını azaltabilir.

### Görüntüden görüntüye nasıl yapılır?
`prompt`un başına bir veya daha fazla görüntü URL'si koyun, ardından metin açıklamanızı ve Midjourney parametrelerinizi ekleyin.

### Düzenleme endpoint'leri neden görev kimliğine ihtiyaç duyar?
upscale, inpaint, outpaint, pan, enhance ve remix gibi işlemler, tamamlanmış bir görevden seçilen bir görüntü üzerinde çalışır, bu nedenle orijinal görev referansı gereklidir.

### Promptta `--turbo` veya `--draft` kullanabilir miyim?
Hayır. Hız `model_params.speed` aracılığıyla kontrol edilir.

## İlgili Bağlantılar

- [Midjourney V7 Ürün Sayfası](https://evolink.ai/midjourney-v7?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api)
- [API Anahtarı Al](https://evolink.ai/signup?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api)
- [Midjourney API Belgeleri](https://docs.evolink.ai/en/api-manual/image-series/midjourney/mj-v7-image-generate?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api)

## Depo Notu

Bu depo, EvoLink.ai'de Midjourney API kullanımı için bir belge ve örnek merkezidir. Ayrıntılı resmi iş akışı materyalleri `docs/official-api/` altında düzenlenmiştir. `mjv7参考/` ise yerel referans materyali olarak kalır ve `.gitignore` aracılığıyla yüklemelerden hariç tutulur.
