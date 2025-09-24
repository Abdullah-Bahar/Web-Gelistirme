/*
	===========================
        Variables
    ===========================

	* JavaScript uygulamaları veri ile çalışır. Değişkenler, bu verileri tutmamızı sağlarlar.

	* JavaScript'te değişken tanımlamak için üç temel anahtar kelime kullanılır: var, let ve const. 
	Her birinin kendine özgü kullanım alanları ve özellikleri vardır.

	* Değişken tanımlaması :
		- {Değişken Türü} {Değişken Adı};
			> Bir değişken oluşturuldu ancak bir değere sahip değil

		- {Değişken Türü} {Değişken Adı} = {Değişken değeri};
			> Değişken oluşturuldu ve değer ataması yapıldı.
			> "=" ile değer ataması yapılır.
*/


/*
	================
		1. var
	================

	- ES6 öncesinde kullanılan geleneksel değişken tanımlama yöntemidir.

	- Fonksiyon kapsamına (function scope) sahiptir.
		> Sadece tanımlandığı fonksiyon içerisinde geçerli olur.
	
	- Hoisting (yukarı çekme) özelliğine sahiptir.
		> "var" ile tanımlanan değişkenler, kodun en üstüne taşınır, 
		bu yüzden tanımlanmadan önce bile kullanılabilirler.
		> Bu durum `undefined` hatasına yol açabilir.
	
	- Tekrar tanımlanabilir. Bu da beklenmedik hatalara neden olabilir.
*/

// "yas" değişkenine değer atanmadığı için "underfined" hatası verir
console.log(yas);

var yas = 25;
console.log(yas);
		
yas = "18";
console.log(yas);

// tanımlanmış bir değişkeni tekrar tanımladık
var yas = true;
console.log(yas);

		
/*
	================
		2. let
	================
	- ES6 ile gelen modern bir değişkendir. `var`'ın eksikliklerini gidermek için tasarlanmıştır.
	
	- Blok kapsamına (block scope) sahiptir. 
		> Bir değişken sadece tanımlandığı süslü parantezler (`{}`) içinde geçerlidir.
	
	- Tekrar tanımlanamaz. 
		> Aynı blok içinde aynı isimde başka bir `let` değişkeni tanımlamak hataya neden olur.
	
	- Hoisting özelliği vardır.
		> Ancak `var` gibi `undefined` olmaz.
		> Başlatılmadan önce erişmeye çalışıldığında "temporal dead zone" adı verilen 
		bir durum oluşur ve referans hatası verir.
*/

let kalem;
console.log(kalem);

kalem = "rotring";
console.log(kalem);

// let'de tekrar tanımlama hata verir. Aşağıdaki kod gibi.
// let kalem = "fs";
// console.log(kalem);


/* 
	================
		3. const
	================
	- ES6 ile gelen bir diğer modern değişkendir. Sabit (değişmez) değerler için kullanılır.
	- Blok kapsamına sahiptir.
	- Değer ataması zorunludur ve sonradan değeri değiştirilemez.
	- Tekrar tanımlanamaz.
	- Hoisting özelliği vardır, `let` gibi referans hatası verir.
*/

const naber = "iyidir senden naber ? ";
console.log(naber);

/* 
	===============================
		Değişken İsimlendirme
	===============================

	- Sadece harf, rakam, $ ve _ kullanılabilir.
	- İlk karakter rakam olamaz.
	- Camel Case yaygın kullanım
		> Örnek : 
			- let camelCase;
	- Büyük/Küçük harf duyarlılığı vardır.
	- JavaScript rezerv kelimeleri değişken adı olamaz:
		> let, return, break, vb.
*/