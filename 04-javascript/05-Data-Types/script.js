/*
	=================================
		Data Types
	=================================

	* Bir javascript değişkeni her türlü veriyi tutabilir.  
	
	* Bir türde değer atandıktan sorna değişken tipi değiştirilebilir.
		- Böyle bir olaya izin veren dillere "Dinamik Tip" denir.

	* JS dilinde veri tipleri ikiye ayrılır :
		1. Temel Veri Tipleri (Primitive Types)
			- Number
			- BigInt
			- String
			- Boolean
			- Null
			- Underfined
			- Symbol

		2. Referans Veri Tipleri (Reference Types)
			- Obje
			- Array
			- Function

	NOT : Burada "Primitive Types" veri tipleri (Symbol hariç) anlatılmıştır.
	Geri kalan function, obje, array, symbol ilgili konular geldiğinde anlatılacaktır.
*/

let mesaj = "selamun aleykum";
mesaj = 1789;

/* 
	========================
		1. Number - Sayı
	========================

	* Hem tam sayı (integer) hem de ondalıklı (floating) değerler alabilirler.

	* Belli bir sınırı vardır. Bu sınırı aşarsa sayılar kaybolabilir.

	* MAtematiksel işlemler yapılabilir. (+ , -, /, *)

	* Normal sayıalrın haricinde "özel sayısal değerler" de alabilirler
		> Infinity, -Infinity NaN, vb.
*/
console.log("Number");

let s; 
s = 123; 	// integer değer 
console.log(s);
s = 3.14;	// floating değer
console.log(s);

// Bir sayıyı 0'a bölersek bize döndüreceği değer sonsuz (Infinity) olur 
console.log(1 / 0);		// Infinity
console.log(-1 / 0);	// -Infinity

let sonsuz = Infinity; 	// Infinity değer oalrak verilebilir.
console.log(sonsuz);

// Hatalı yada tanımsız matematiksel hesaplamalar için NaN değeri döndürülür.
// NaN değeri alması demek oradaki hesaplamada bir hata var demektir.
let s1;
let s2;
console.log(s1 + s2); // NaN

console.log("naber" + 3); // "naber3" burada string olarak sonuna ekler.
console.log("naber" - 3); // NaN
console.log("naber" / 3); // NaN
console.log("naber" * 3); // NaN

/* 
	============================
		2. BigInt - Büyük Sayı
	============================

	* Number tipin çalıştığı sayısal değerlerin aralığının dışında kalan ssayılar için kullanılır.

	* BigInt ve Number türleri birlketde doğrudan işleme giremez. Tip dönüşümü gereklidir.

	* BigInt bir sayı tanımalamak için sonuna "n" konur.
*/
console.log("BigInt");

let bigint = 123456789123456789123456789n;
console.log(bigint);

// Aşağıdaki number türünde bırakıldı ve number'ın sınırları aşıldığı için doğru sonucu göstermez.
let numBigInt = 123456789123456789123456789;
console.log(numBigInt);

// Number + BigInt = Error
// console.log(bigint + numBigInt);

/* 
	==================================
		3. String - Karakter Dizisi
	==================================

	* String değerler tırnak içerisine alınmalıdır.
	* JS'de tırnak içine almak için 3 yöntem vardır :
		1. Çift tırnak	: "Hello"
		2. Tek tırnak	: 'Hello'
		3. Ters tırnak	: `Hello`

	* "Çift tırnak", 'tek tırnak' 	-> "basit" tırnaklardır. Aralarında bir fark yoktur.
	* `Ters Tırnak` 				-> "genişletilmiş fonksiyonlu" tırnaklardır.
									Bunu kullanarak string içine ${...} şeklinde başka bir string eklenebilir.

	NOT : tek karakterli değişkenler de string (karakter dizisi) olarak geçer.
*/
console.log("String");

let isim = "Ahmet";
let hg = 'Hoş Geldin';
let buyur = `${isim} Evime ${hg}. Lütfen şöyle buyur.`;
console.log(buyur);

console.log(`Sonuç : ${5 + 5}`);

/* 
	==================================
		4. Boolean (Doğru/Yanlış)
	==================================

	* Boolen tipi sadece iki değer alır :
		- true
		- false	
*/
console.log("Boolean");

let dogru = true;
console.log(dogru);

let yanlis = false;
console.log(yanlis);

// Mantıksal işlemler de boolen tipi değer verir.
console.log(3 > 1);

/* 
	==================================
		5. Null
	==================================

	* Yukarıdaki değerlerde hiçbirie ait değildir.

	* Boş değer demek.

	* Bir değişkenin null olması için "null" değerinin atanması gerekir.
*/
console.log("Null");

let bos = null;
console.log(bos);


/* 
	==================================
		6. Underfined
	==================================

	* Değişken tanımlanmış ama değer ataması yapılmamışsa "underfinde"dır.

	* "herhangi bir değer atanmamıştır" anlamına gelir.
*/
console.log("Underfined");

let degersiz;
console.log(degersiz);


/* 
	==============
		Özet
   	==============

	- Number -> tam sayı ve ondalık sayılar
	- BigInt -> Number sınırını aşan büyük tam sayılar
	- String -> karakter dizileri
	- Boolean -> true / false
	- Null -> boş değer
	- Undefined -> tanımsız değer
*/