# Web Geliştirme

1.  [HTML](#html-konu-i̇çeriği)
1.  [CSS](#css)
	* [CSS Temelleri](#css-fundamentals)
		* [Konular](#konular-1)
		* [Uygulama](#uygulama)
	* [CSS Responsive](#css-responsive)

<br>
<!-- 
==========================
	HTML 
==========================
-->

# HTML

### Konular

1. [HTML Temelleri](html/01-html-temelleri.html)
	- `<html>`, `<head>`, `<body>`,`doctype`, `<meta>`
2. [Header Tag](html/02-header-tags.html)
	- `<h1>` - `<h6>` arası
3. [Paragraf](html/03-paragraphs.html)
	- `<p>`, `<br>`
4. [Yazı Biçimlendirme](html/04-yazi-bicimlendirme-etiketi.html)
	- `<hr>`, `<b>`, `<strong>`, `<i>`, `<em>`, `<u>`, `<ins>`, `<sup>`, `<sub>`, `<del>`, `<mark>`,
5. [Sırasız Listeler](html/05-sirasiz-listeler.html)
	- `<ul>`, `<li>`
6. [Sıralı Listeler](html/06-sirali-listeler.html)
	- `<ol>`, `<li>`
7. [Image](html/07-images.html)
	- `<img>`
8. [Form](html/08-forms.html)
	- `<form>`, `<input>`, `<select>`, `<option>` 
9. [Tablo](html/09-table.html)
	- `<table>`, `<thead>`, `<tbody>`, `<th>`, `<tr>`, `<td>` 
10. [Link](html/10-links.html)
	- `<a>`
11. [Div & Span](html/11-div-span.html)
	- `<div>`, `<span>`
12. [Semantik Elementler](html/12-semantic-elements.html)
	- `<header>`, `<nav>`, `<menu>`, `<artivle>`, `<aside>`, `<section>`, `<footer>`  
13. [iframe](html/13-iframe.html)
	- `<iframe>`

<br>
<!-- 
==========================
	CSS
==========================
-->

# CSS

<!-- CSS Temelleri -->
## CSS Fundamentals

### Konular

1. **HTML Sayfasına CSS Ekleme**
	- [Internal (Sayfa İçi) CSS](css/01-CSS-Fundamentals/Konular/01-Internal-css/) - `<style>` etiketi ile sayfa içinde CSS yazma
	- [Inline (Satır İçi) CSS](css/01-CSS-Fundamentals/Konular/02-Inline-css/) - HTML elementine `style=""` ile stil verme
	- [External (Harici) CSS](css/01-CSS-Fundamentals/Konular/03-External-css/) - `.css` dosyasını `<link>` ile bağlama ve CSS Override

1. **Selectors (Seçiciler)** 
	- [Selectors (Seçiciler)](css/01-CSS-Fundamentals/Konular/04-Selectors/) - `id`, `class`, `element` seçimi
	- [Group Selectors](css/01-CSS-Fundamentals/Konular/05-Group-Selector/) - Birden fazla eleman seçme
	- [Attribute Selector](css/01-CSS-Fundamentals/Konular/06-Attribute-Selector/) - Elementlerin `attribute`'larına göre seçme
	- [Pseudo Selector](css/01-CSS-Fundamentals/Konular/07-Pseudo-Selector/) - `:hover`,`::before`, `::after` gibi özel durumlar

1. **Kutu Modeli**
	- [Margin](css/01-CSS-Fundamentals/Konular/15-Margin/) - Dış boşluk ayarı
	- [Padding](css/01-CSS-Fundamentals/Konular/16-Padding/) - İç boşluk ayarı
	- [Border](css/01-CSS-Fundamentals/Konular/17-Border/)	- Kenarlık ekleme
	- [Box-Sizing](css/01-CSS-Fundamentals/Konular/18-Box-Sizing/) - `content-box`, `border-box` kutu boyutu hesaplama yöntemleri

1. **Yazı & Renk**
	- [Colors](css/01-CSS-Fundamentals/Konular/11-Colors/) - `Hexdecimal`, `rgb()`, `rgba()` vb. renk ayarları
	- [Fonts](css/01-CSS-Fundamentals/Konular/19-Fonts/) - `Google Fonts`, Yazı Tipleri
	- [Icons](css/01-CSS-Fundamentals/Konular/20-Icons/) - `Font Awsome`, İkon ekleme
	- [Styling Text](css/01-CSS-Fundamentals/Konular/21-Styling-Text/) - Satır yüksekliği, paragraf boşluğu vb. yazı stilleri
	- [Aligning Text](css/01-CSS-Fundamentals/Konular/22-Aligning-Text/) - İçerik Hizalama

1. **Diğer**
	- [Inheritance (Miras)](css/01-CSS-Fundamentals/Konular/08-Inherit/) - `inherit` stil mirası
	- [Styling Table](css/01-CSS-Fundamentals/Konular/09-Styling-Table/) - tablo stil verme
	- [Div](css/01-CSS-Fundamentals/Konular/10-Div/) - Genel kutu elementi
	- [Floating Divs](css/01-CSS-Fundamentals/Konular/12-Floating-Divs/) - `float`, `clear`, sayfa içerik konumlandırma
	- [Display](css/01-CSS-Fundamentals/Konular/13-Display/) - `block`, `inline-block`, `inline`
	- [Position](css/01-CSS-Fundamentals/Konular/14-Position/) - `static`, `relative`, `absolute`, `fixed`, `sticky`,
	- [Styling List](css/01-CSS-Fundamentals/Konular/23-Styling-List/) - Liste şekillendirme
	- [Styling Link](css/01-CSS-Fundamentals/Konular/24-Styling-Link/) - Buton oluşturma
	- [Box Shadow](css/01-CSS-Fundamentals/Konular/25-Box-Shadow/) - Gölgelendirme
	- [Transitions](css/01-CSS-Fundamentals/Konular/26-Transitions/) - Animasyon
	- [Background Image](css/01-CSS-Fundamentals/Konular/27-Background-Image/) - Arka plan resim ayarları, renk geçişleri vs.


### Uygulama

* Blog Uygulaması
	1. [Div](css/01-CSS-Fundamentals/Uygulamalar/01-Uygulama-Div/)
	1. [Floating](css/01-CSS-Fundamentals/Uygulamalar/02-Uygulama-Floating/)
	1. [Display](css/01-CSS-Fundamentals/Uygulamalar/03-Uygulama-Display/)
	1. [Position](css/01-CSS-Fundamentals/Uygulamalar/04-Uygulama-Position/)
	1. [Box Sizing](css/01-CSS-Fundamentals/Uygulamalar/05-Uygulama-Box-Sizing/)
	1. [Text](css/01-CSS-Fundamentals/Uygulamalar/06-Uygulama-Text/)
	1. [Styling Links & Link](css/01-CSS-Fundamentals/Uygulamalar/07-Uygulama-Styling-List-Link/)
	1. [Transition](css/01-CSS-Fundamentals/Uygulamalar/08-Uygulama-Transition/)
	1. [Navbar](css/01-CSS-Fundamentals/Uygulamalar/09-Uygulama-Navbar/)
* [Floating Images](css/01-CSS-Fundamentals/Uygulamalar/10-Floating-Images/)
* [Uygulama Product Card](css/01-CSS-Fundamentals/Uygulamalar/11-Uygulama-Product-Card/)
* [Uygulama Images Gallery](css/01-CSS-Fundamentals/Uygulamalar/12-Uygulama-Image-Gallery/)
* [Uygulama Styling Form](css/01-CSS-Fundamentals/Uygulamalar/13-Uygulama-Styling-Form/)
* [Uygulama Tooltip](css/01-CSS-Fundamentals/Uygulamalar/14-Uygulama-Tooltip/)
* [Uygulama Dropdown](css/01-CSS-Fundamentals/Uygulamalar/15-Uygulama-Dropdown/)

<br>
<!-- CSS Responsive -->

## CSS Responsive

1. [Media Query](css/02-CSS-Responsive-Design/01-Media-Query/) 
1. [Image Gallery](css/02-CSS-Responsive-Design/02-Image-Gallery/) 
1. [Responsive Uygulama](css/02-CSS-Responsive-Design/03-Responsive-Uygulama/) 
