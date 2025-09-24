/* 
	===================
		Alert
	===================

	* Tarayıcı ekranında mesaj gösterir.

	* Kullacı OK butonuna basna akadar kod ilerlemez. (Modal Pencere)
		> Ekrana çıkan küçük pencereye modal pencere denir. Kullanıcı sayfanın 
		diğer alanlarıyla etkileşemez, sadece bu pencereyi kapatabilir.
*/

alert("Merhaba");

/* 
	===================
		Prompt
	===================

	* Kullanıcıdan veri girişi almak için kullanılır.

	* Modal pencere içerisinde yazı yazabilceğimiz bir alan bulunur.

	* Buradan alınan değer her halükarda string değer olur.

	* Snytax :
		- prompt(başlık, varsayılan değer)

	* Eğer kullanıcı değer girmez ise CANCEL veta ESC'ye basarsa değer null döner.
*/

let result = prompt("Kaç yaşındasın");
alert(`Sen ${result} yaşındasın`);

console.log(typeof result);

// null değer dönmemesi adına varsayılan değeri boş bir string verilebilir.
// Böylece boş geçilir yada pencere kapatılırsa null değer dönmez. Boş bir string döner.
let test = prompt("Test", "");
console.log(typeof result);


/* 
	===================
		Confirm
	===================

	* Kullanıcıdan onay almak için kullanılır.

	* Modal pencere içerisinde onay ve kapatma seçenekleri olur.

	* Snytax :
		- confirm(soru)
*/

let patron = confirm("Ben Optimus Prime, Tüm otobotlara sesleniyorum. Sen otobot musun ?");
alert(patron); // true veya false döner
