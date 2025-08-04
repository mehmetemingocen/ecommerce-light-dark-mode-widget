# E-commerce Light Dark Mode Widget

Modern bir e-commerce web sitesi örneği. Dark/Light mode özelliği, responsive tasarım ve interaktif özellikler içerir.

## 🚀 Özellikler

### 🌓 Dark/Light Mode
- **Otomatik Tema Hatırlama**: Kullanıcının seçimi localStorage'da saklanır
- **Smooth Geçişler**: Tema değişikliklerinde yumuşak animasyonlar
- **Keyboard Shortcut**: `Ctrl/Cmd + J` ile tema değiştirme
- **Header'da Toggle Butonu**: Sağ üst köşede kolay erişim

### 🛒 E-commerce Özellikleri
- **Ürün Kartları**: Modern ve responsive ürün kartları
- **Sepete Ekleme**: Ürünleri sepete ekleme fonksiyonu
- **Sepet Sayacı**: Header'da sepet içeriği sayısı
- **Arama Fonksiyonu**: Ürün arama ve filtreleme
- **Bildirimler**: Sepete ekleme işlemlerinde bildirimler

### 📱 Responsive Tasarım
- **Mobile First**: Mobil cihazlarda optimize edilmiş tasarım
- **Flexible Grid**: CSS Grid ile responsive ürün düzeni
- **Touch Friendly**: Dokunmatik cihazlar için optimize edilmiş butonlar

### 🎨 Modern UI/UX
- **Smooth Animations**: Hover efektleri ve geçiş animasyonları
- **Material Design**: Modern tasarım prensipleri
- **Accessibility**: Erişilebilirlik standartlarına uygun
- **Performance**: Optimize edilmiş yükleme ve çalışma performansı

## 🛠️ Teknolojiler

- **HTML5**: Semantic markup
- **CSS3**: Modern CSS özellikleri (Grid, Flexbox, Variables)
- **JavaScript (ES6+)**: Modern JavaScript sınıfları ve modüler yapı
- **Font Awesome**: İkonlar için
- **LocalStorage**: Veri saklama

## 📁 Dosya Yapısı

```
darkLightMode/
├── index.html          # Ana HTML dosyası
├── styles.css          # CSS stilleri ve tema değişkenleri
├── script.js           # JavaScript fonksiyonalitesi
└── README.md          # Proje dokümantasyonu
```

## 🚀 Kullanım

1. **Projeyi İndirin**: Tüm dosyaları bir klasöre indirin
2. **Tarayıcıda Açın**: `index.html` dosyasını tarayıcıda açın
3. **Tema Değiştirin**: Header'daki güneş/ay ikonuna tıklayın
4. **Ürünleri Keşfedin**: Ürünleri sepete ekleyin ve arama yapın

## 🎯 Özellik Detayları

### Dark/Light Mode
- **CSS Variables**: Tema renkleri CSS değişkenleri ile yönetiliyor
- **LocalStorage**: Kullanıcı tercihi tarayıcıda saklanıyor
- **Smooth Transitions**: 0.3s geçiş animasyonları
- **Icon Switching**: Tema değişikliğinde ikon değişimi

### Ürün Yönetimi
- **Cart System**: Sepet içeriği localStorage'da saklanıyor
- **Product Search**: Gerçek zamanlı ürün arama
- **Visual Feedback**: Sepete ekleme işlemlerinde görsel geri bildirim
- **Notifications**: Toast bildirimleri

### Responsive Design
- **Breakpoints**: 768px ve 480px breakpoint'leri
- **Flexible Layout**: CSS Grid ve Flexbox kullanımı
- **Mobile Navigation**: Mobil cihazlarda optimize edilmiş navigasyon

## 🎨 Tema Renkleri

### Light Mode
- Primary: `#4a90e2` (Mavi)
- Secondary: `#50c878` (Yeşil)
- Background: `#ffffff` (Beyaz)
- Text: `#333333` (Koyu Gri)

### Dark Mode
- Primary: `#64b5f6` (Açık Mavi)
- Secondary: `#81c784` (Açık Yeşil)
- Background: `#121212` (Koyu Gri)
- Text: `#ffffff` (Beyaz)

## ⌨️ Klavye Kısayolları

- `Ctrl/Cmd + J`: Dark/Light mode geçişi
- `Enter`: Arama kutusunda arama yapma

## 🔧 Özelleştirme

### Yeni Ürün Ekleme
HTML'de yeni ürün kartı eklemek için:
```html
<div class="product-card">
    <div class="product-image">
        <img src="ürün-resmi.jpg" alt="Ürün Adı">
    </div>
    <div class="product-info">
        <h3 class="product-title">Ürün Adı</h3>
        <p class="product-description">Ürün açıklaması</p>
        <div class="product-price">₺Fiyat</div>
        <button class="add-to-cart-btn">Sepete Ekle</button>
    </div>
</div>
```

### Tema Renklerini Değiştirme
CSS dosyasında `:root` ve `.dark-mode` seçicilerindeki renk değerlerini değiştirin.

## 🌐 Tarayıcı Desteği

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 📱 Mobil Uyumluluk

- iOS Safari 12+
- Android Chrome 60+
- Responsive tasarım tüm mobil cihazlarda çalışır

## 🔮 Gelecek Özellikler

- [ ] Sepet sayfası
- [ ] Ürün detay sayfası
- [ ] Kullanıcı hesabı
- [ ] Ödeme sistemi
- [ ] Ürün kategorileri
- [ ] Filtreleme seçenekleri

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 🤝 Katkıda Bulunma

1. Projeyi fork edin
2. Feature branch oluşturun (`git checkout -b feature/AmazingFeature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add some AmazingFeature'`)
4. Branch'inizi push edin (`git push origin feature/AmazingFeature`)
5. Pull Request oluşturun

---

**TechStore** - Modern E-commerce deneyimi için tasarlanmış responsive web sitesi. 
