/* 
	===================
		Loop
	===================

	* Döngüler, bir kod bloğunu birden fazla kez çalıştırmak için kullanılır.

	* Örnek : 
		> 1-10'a kadar olan sayıları toplamak.
*/


/*
	===================
		While
	===================

	* Snytax :

		while (koşul) {
		  // Koşul true olduğu sürece buradaki kod çalışır
		}

		- Döngü başalmadn önce koşul kontrol edilir.
		- Eğer koşul true ise kod çalışır ve tekrar başa döner
		- Koşul false olduğunda kod çalışmayı durdurur.
*/

let i = 0; // Döngüyü kontrol etmemeizi sağlayan parametremiz.

while (i <= 5) {
	console.log("Sayi : " + i);
	i++; // Sayıyı arttırmazsak döngü sonsuz olur.
}


let cevap;

while (cevap != "evet") {
    cevap = prompt("JavaScript sever misin? (evet/hayır)");
	// Kullanıcı "evet" diyene kadar döngü devam eder. (Zorla JS sevdirmeye çalışıyoruz.)
}

alert("Teşekkürler!");


/*
	===================
		For
	===================

	* Snytax :

		for (başlangıç; koşul; artış) {
		  // Koşul true olduğu sürece buradaki kod çalışır
		}

		- Başlangıç	: Döngü değişkeninin ilk değeri
		- Koşul		: True olduğu sürece döngü devam eder
		- Artış		: Her tur sonunda değişkenin değeri güncellenir
*/

for (let j = 1; j <= 5; j++) {
    console.log("j : " + j);
}


let toplam = 0;

for (let j = 1; j <= 10; j++) {
    toplam += j; // toplam = toplam + j
}

console.log("1-10 arası toplam: " + toplam);

/*
	===============================
		Döngü Kontrol Komutları
	===============================

	* break
		- Döngüyü durdurmak için kullanılır.
		- genelde döngü belli bir değere geldiğinde döngüyü durdurmak için kullanılır

	* continue
		- Döngü içerisinde o anki turu atlamak için kullanılır.
*/

for (let j = 1; j <= 5; j++) {
    if (j === 3) continue; // 3'ü atla
    console.log(j)
} 
// Çıktı: 1, 2, 4, 5


for (let j = 1; j <= 5; j++) {
    if (j == 3) break; // döngüyü tamamen durdur
    console.log(j);
}
// Çıktı: 1, 2