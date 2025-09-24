/* 
	==========================================
		Type Conversions (Tür Dönüşümleri)
	==========================================

	* JavaScript "dinamik tipli" bir dildir.
		- Yani bir değişkenin türü program çalışırken değiştirilebilir.
		- Örn: aynı değişken önce number, sonra string olabilir.
	
	* Tür dönüşümleri 2 şekilde gerçekleşir:
		1. Implicit Conversion (Otomatik / Tip Zorlama / Coercion)
		2. Explicit Conversion (Manuel / Açık Dönüşüm)

	NOT : Objeler ile alakalı konualara ilerleyen bölümlerde değinilecektir.
*/

/*
	=================================================
		1. Implicit Conversion (Type Coercion)
	=================================================
	
	* JavaScript bazı işlemlerde türleri "kendisi" dönüştürür.
	* Bu işlem geliştirici tarafından yapılmaz, motor tarafından yapılır.
*/
console.log("Implicit Conversion");

console.log("5" + 3);    	// "53"  -> Number otomatik olarak string'e dönüştü
console.log("5" - 3);    	// 2     -> String otomatik number'a dönüştü
console.log("5" * "2");  	// 10    -> Her ikisi de number'a dönüştü
console.log(1 + true);   	// 2     -> true -> 1
console.log(1 + false);  	// 1     -> false -> 0
console.log("abc" * 3);  	// NaN   -> string sayı değilse number'a dönüşmez
console.log(null * 0);		// null  -> 0 * 0 = 0


/*
	=================================================
		2. Explicit Conversion (Açık Dönüşüm)
	=================================================

	* Geliştirici tarafından bilinçli şekilde tür değiştirme.
	* Bunun için JavaScript'in hazır fonksiyonları kullanılır:
		- String()
		- Number()
		- Boolean()
		- BigInt()
		- parseInt(), parseFloat()
*/
console.log("Explicit  Conversion");

/* ===================== 
	String 
===================== */

let value = String(true);
console.log(typeof value, value);

value = String(null);
console.log(typeof value, value);

value = String(2346);
console.log(typeof value, value);

/* ===================== 
	Number 
===================== */

let sayi = Number(value);
console.log(typeof sayi, sayi);

sayi = "3" / "2"; // Bölme işlemi 	-> otomatik dönüştürür
console.log(typeof sayi, sayi);

sayi = "3" * "2"; // Çarpma işlemi	-> otomatik dönüştürür
console.log(typeof sayi, sayi);

sayi = "3" + "2"; // Toplama işlemi	-> Dönüştürmez, strig olarak devam eder.
console.log(typeof sayi, sayi);

sayi = "3" - "2"; // çıkarma işlemi -> otomatik dönüştürür
console.log(typeof sayi, sayi);

// Sayısal olmayan bir değerin dönüştürülmeye çalışılması hata'dır.
console.log(Number("Naber Kanka")); // NaN 

console.log(Number("    123     "));  // 123	
console.log(Number("    123z     ")); // NaN

let degersiz;
console.log(Number(degersiz));	// NaN

let bosluk = null;
console.log(Number(bosluk));

console.log(Number(true));	// 1
console.log(Number(false)); // 0

/* ========================
	ParseInt - ParseFloat 
=========================== */

console.log(parseInt("123.4567"));
console.log(parseFloat("123"));
console.log(parseFloat("123.10000"));

console.log(Number("155asdv123124"));	// Number() -> Hata verir
console.log(parseInt("155asdv123124"));	// parseInt() -> ilk karaktere kadar olan sayıyı çevirir = 155
console.log(parseInt("asd551"));		// NaN


/* ===================== 
	Boolean 
		- 0, null, underfined, NaN, "" 	=> false
		- Diğerleri 					=> true
===================== */

console.log(Boolean(1)); // true 
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(" ")); // true
console.log(Boolean("abc")); // true
console.log(Boolean(null)); // false


/* ===================== 
	BigInt 
===================== */

console.log(BigInt(1231232413241234123412341234));

// console.log(10n + 20); // Error verir

console.log(BigInt(20) + 10n);
