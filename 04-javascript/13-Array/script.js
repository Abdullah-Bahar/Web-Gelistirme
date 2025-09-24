/* 
	======================================
		Array (Dizi)
	======================================

	* Array (Dizi) sıralı (indexed) koleksiyonlar tutar.
	
	* Nesneler (Object) anahtar/değer (key/value) koleksiyonu tutmak için uygundur.
	Ancak "1., 2., 3. eleman" gibi sıralı erişim gerektiğinde Array kullanılır.
	
	* Array'ler 0 ile başlayıp tamsayı indeksler kullanır.
*/


/* 
	===============================
		Tanımlama (Declaration)
	===============================
*/

// I. Yöntem
let meyveler = ["Elma", "Armut", "Muz"];
console.log(meyveler);

// II. Yöntem
let meyveler2 = new Array("Elma", "Armut");
console.log(meyveler2);

// Boş dizi tanımlama
let arr = [];
let arr2 = new Array();

console.log(arr);
console.log(arr2);


// Elemanı olamdan ama belli bir uzunlukta dizi tanımlama
// Belirlenene uzunlukta "sparse" dizi yaratır (undefined elemanlar).
let x = new Array(3);	// 3 elemanlı bir dizi oluşturur.
console.log(x.length); 	// 3
console.log(x);     	// undefined

/* 
	===============================
		İndeksleme ve Okuma/Yazma
	===============================
*/

// Dizi elemanlarını görüntüleme
// NOT : dizilerde elemanlar 0. indexten başlar
console.log(meyveler[0]);  // 1. Eleman
console.log(meyveler[1]);  // 2. Eleman
console.log(meyveler[2]);  // 3. Eleman

// Elemanların değerini değiştirme
meyveler[2] = "Kivi";    	// dizinin 2. elemanına yeni bir değer atadık
console.log(meyveler);

// Dizimiz 3 elemanlı olduğu için sonuncu index'i 2'ydi.
// Ancak dizi boyutunu aşacak şekilde değer atması yapıyorsak yeni eleman olarak ekler
meyveler[3] = "Karpuz"; // 4. elemanı ekledik
meyveler[5] = "Kavun";	// 6. elemanı ekledik

// 5. eleman olmadan 6. elamanı eklemeye çalışırsak 6. elemanı eklerken 5. elemanı da oluşturur.
// 5. eleman underfined oluş. Boş bir eleman 
console.log(meyveler);

/* 
	=============================================
		push / pop Methodları (stack - LIFO)
	=============================================
*/

// push => sona ekler, döndürdüğü değer yeni length'tir
let sonaEkle = meyveler.push("Çilek");      // sona eleman ekle
console.log(sonaEkle);


// pop => sondaki elemanı çıkarır, döndürdüğü değer ise çıkardığı elemandır.
let sondanCikar = meyveler.pop();     		// sondaki elemanı çıkar 
console.log(sondanCikar);

/* 
	============================================================
		shift / unshift Methodları (queue - FIFO için uygun)
	============================================================
*/

// unshift => başa ekler, döndürdüğü değer yeni length'tir
let basaEkle = meyveler.unshift("Karpuz");   // başa eleman ekle
console.log(basaEkle);

// shift => baştaki elemanı çıkarır, döndürdüğü değer ise çıkardığı elemandır.
let bastanCikar = meyveler.shift();   		// baştaki elemanı çıkar 
console.log(bastanCikar);

/* 
	NOT : 
		- push/pop: O(1) hızlıdır. shift/unshift: O(n) (tüm indeksleri kaydırmak gerekir).
		- performans nedeniyle büyük dizilerde baştan çıkarma/ekleme maliyetlidir.
*/


/* 
	===========================
		Döngüler Kullanımı
	===========================
*/

// for 
console.log("for ile dizi görüntüleme");

for (let i = 0; i < meyveler.length; i++) {
	console.log(meyveler[i]);
}

// while
console.log("while ile dizi görüntüleme");

let j = 0;
while (j < meyveler.length) {
	console.log(meyveler[j]);
	j++;
}

// forEach
console.log("forEach ile dizi görüntüleme");

meyveler.forEach(function (meyver) {
	console.log(meyver);
	
});


/* 
	Array İle İlgili Diğer Konular :
		- Dizi + Obje ilişkisi (referans)
		- Çok-Türlü Elemanlar ve Fonksiyonlar
		- Trailing comma (son virgül) kullanımı
		- Sparse array (delikli dizi) ve kötü kullanım
		- length özelliği
		- new Array(number) tuzağı
		- toString, Symbol.toPrimitive ve dönüşümler
		- Dizi kontrolü / tip kontrolü

	Daha İleri Konular :
		- Array.prototype.slice, splice, concat
		- map, filter, reduce, find, some, every
		- sort (karşılaştırıcı fonksiyon)
		- flat, flatMap, includes, indexOf, lastIndexOf
		- immutable vs mutable array işlemleri
*/