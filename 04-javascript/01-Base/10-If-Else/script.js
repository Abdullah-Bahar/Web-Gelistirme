/* 
	===================
		if
	===================

	* Mantıksal karar vermeyi sağlar ve kodun akışını kontrol etmenize izin veren condition bloğudur.

	* if yapısı :
		
		if (koşul) {
    		// koşul true ise buradaki kod çalışır
		}	

	* if koşulu her zaman boolean olarak değerlendirilir.
		> true, truthy
		> false, falsy
*/

let fetih = prompt("İstanbul ne zaman fethedilmiştir ?")

if (fetih == 1453) {
	alert("Ver mehteri ver mehteri");
}


let ihtilal = prompt("Fransız Ihtilali Ne Zaman Olmuştur ?");

// if altındaki kod eğer tek satır ise {} olmadan da çalışır.
if (ihtilal == 1789)
	alert("Sen de mi ihtilalcisin yoksa");
	

// thurty & falsy
if (0) {
	console.log("Bu kod çalışmaz");
}

if (1) {
	console.log("Bu kod çalışır (1)");
}

if (-1) {
	console.log("Bu kod çalışır (-1)");
}

/* 
	===================
		else
	===================

	* if konuşulu false ise else devreye girer.

	* else yapısı :
		
		if (koşul) {
    		// koşul true ise buradaki kod çalışır
		} else {
			// if false ise buradaki kod çalışır.	
		}	
*/

let goc = prompt("Kavimler Göçü ne zaman olmuştur ?");

if (goc == 375) {
	alert("Doğru bildin");
} else {
	alert("Yanlış bildin");
}

/* 
	===================
		else if
	===================

	* if içerisinde birden fazla koşul kontrol etmek için kullanılır.
	* Bu şekilde istenilen kadar koşul eklenebilir.
	* kodun sonuna else yapısı eklenerek kontrol edilen koşulların hiçbiri değilse neyin
	geçerli olacağı belirlenebilir.

	* else-if yapısı :
		
		if (koşul) {
			// Eğer burası true ise burdaki kod geçerlidir	
		} else if (koşul) {
			// Eğer burası true ise burdaki kod geçerlidir	
		} 
		....
		else if () {
			// Eğer burası true ise burdaki kod geçerlidir	
		}	
*/

let cihanHarbi2 = prompt("2. Cihan HArbi ne zaman başlamıştır ?");

if (cihanHarbi2 < 1939) {
    alert('Daha sonra...');
} else if (cihanHarbi2 > 1939) {
    alert('Daha önce...');
} else {
    alert('Kesinlikle 1939!');
}

/*
	====================================
		Üçlü Operatör 	"? :"
	====================================
	
	* If-Else yazımının tek satırda yazılma hali

	* let sonuc = koşul ? değer1 : değer2;
		> koşul true ise -> değer1 geçerli olur
		> koşul false ise -> değer2 geçerli olur
*/

let yas = prompt("Kaç yaşındasın ?", "");
let girisIzni = (yas >= 18) ? true : false;

alert("Giriş iznini " + 
	(girisIzni == true ? "verildi" : "verilmedi"));

/*
	====================================
		Çoklu "? :" Kullanımı
	====================================

	* Birden fazla koşula göre değer gönderebilir.
*/

let mesai = prompt("Kaç yıldır çalışıyorsun ? ", "");

alert(
	mesai < 3 ? "Junior'sın":
	mesai < 6 ? "Middle'sın":
	"Artık senior olmuşsun"
);
