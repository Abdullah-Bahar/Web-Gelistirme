/* 
	===================
		Operators
	===================

	* JS'de operatörler, değişken veya değerler üzerinde işlem yapmamızı sağlayan özel sembollerdir.

	* Hesaplama, karşılaştırma, mantıksal kararlar, değer atama gibi bir çok işlem bunlar ile yapılır.

	* Operatörler işlevlerine ve yapısına (Operand Sayısına) göre farklı sınıflandırmaya tabi tutulurlar.

	* Kavramlar :
		- Operator 	: İşlem yapan
		- Oparand 	: Üzerinde işlem yapılan
*/

let result = 5 + 3;
// 5 -> operand, 3 -> operand, + -> operator


/* 
	======================================================
		Yapısına (Operand Sayısına) Göre Operatörelr
	======================================================
*/

/* 
	1. Unary Operators
		- Tek değer üzerinde işlem yapar
*/
console.log("Unary Operators");

let x =  5;
console.log(-x);
console.log(x++);
console.log(typeof x);
console.log(!x);

/* 
	2. Binary Operator 
		- İki değer üzerinde işlem yapar.
*/
console.log("Binary Operators");

console.log(5 + 3);
console.log("10" * 5);

/* 
	2. Ternary Operator
		- Üç elemanlı olanlar.

		- Bundan sadece tek bir tane vardır : Conditional vardır
			> condition ? expr1 : expr2

	NOT : İlerleyen konularda değinilecektir.
*/

/* ===================================
		İşlevine Göre Operatörler
=================================== */

/*
	=====================
		Arithmetic
	=====================
	* Matematiksel işlemleri yapmak için kullanılır 
	* Operatörler :
		> + 	-> Toplama
		> - 	-> Çıkarma
		> * 	-> Çarpma
		> / 	-> Bölme
		> % 	-> Mod (kalan)
		> **	->  Üs alma (Exponentiation)
		> ++	->  Artırma (Increment)
		> --	->  Azaltma (Decrement)
*/
console.log("Arithmetic Operators");

let a = 10, b = 3;

console.log(a + b);  // 13
console.log(a - b);  // 7
console.log(a * b);  // 30
console.log(a / b);  // 3.333...
console.log(a % b);  // 1
console.log(a ** b); // 1000

console.log(++x); // 7 (önce artır sonra kullan)
console.log(x++); // 7 (önce kullan sonra artır)
console.log(x);	  // 8 (yukarıdaki arttırma burada gözlemlendi)

/*
	==========================
		Assignment Operators
	==========================
	* Değişkenlere değer atamak için kullanılır. 
	* Operatörler :
		> = 	-> Atama
		> += 	-> Toplayıp ata
		> -= 	-> Çıkarıp ata
		> *= 	-> Çarpıp ata
		> /= 	-> Bölüp ata
		> %= 	-> Kalanını ata
		> **=	->  Üs alıp ata
*/
console.log("Assignment Operators");

let y = 10;
console.log(y += 5); // y = y + 5
console.log(y -= 2); // y = y - 2
console.log(y *= 3); // y = y * 3
console.log(y /= 3); // y = y / 3
console.log(y %= 5); // y = y % 5

/*
	==========================
		Comparison Operators
	==========================
	* İki değeri karşılaştırıp true/false döndürür.
	* Operatörler :
		- == 	-> Eşit (type coercion yapar)
		- === 	-> Sıkı eşit (hem değer hem tür eşit olmalı)
		- != 	-> Eşit değil
		- !== 	-> Sıkı eşit değil
		- > 	-> Büyüktür
		- < 	-> Küçüktür
		- >= 	-> Büyük veya eşit
		- <= 	-> Küçük veya eşit
*/
console.log("Comparison Operators");

console.log(5 == "5");   // true  (coercion var)
console.log(5 === "5");  // false (tür farklı)
console.log(10 != "10"); // false
console.log(10 !== "10");// true
console.log(7 > 5);      // true
console.log(7 <= 7);     // true

/*
	==========================
		Logical Operators
	==========================
	* İki değeri karşılaştırıp true/false döndürür.
	* Operatörler :
		- &&	-> AND (ve)
		- ||	-> OR (veya)
		- ! 	-> NOT (değil)
*/
console.log("Logical Operators");

let t = true, f = false;

console.log(t && f); // false
console.log(t || f); // true
console.log(!t);     // false

/*
	* Logical Operatorler her zaman boolean tiğinde değer döndürmeyebilir. (İstisna: short-circuit davranışı)

	* Short-circuit davranışı ve operand döndürme
		- truthy 	-> Boolean bağlamında true gibi davranan değerler.
		- falsy  	-> Boolean bağlamında false gibi davranan değerler.
		- &&      	-> Soldan sağa çalışır, ilk falsy değeri döndürür. Eğer tümü truthy ise son operand döner.
		- ||      	-> Soldan sağa çalışır, ilk truthy değeri döndürür. Eğer tümü falsy ise son operand döner.

	* Falsy değerleri :
		> false, 0, -0, "", null, undefined, NaN
*/
console.log("Short-circuit");

// || operatörü: ilk truthy değeri döndürür, her ikisi de thurty ise ikisini birlikte döndüdür.
console.log(null || "varsayılan"); // "varsayılan"
console.log("Merhaba" || "Dünya"); // "Merhaba"

// && operatörü: ilk falsy değeri döndürür, tümü truthy ise sonuncuyu döndürür
console.log("Merhaba" && "Dünya"); // "Dünya"
console.log(0 && "test");          // 0


/*
	==========================
		String Operators
	==========================
	* Metinleri birleştirmek için kullanılır.
	* Operatörler :
		- +		-> Concatenation (birleştirme)
		- +=	-> Append (ekleme)
*/
console.log("String Operators");

let name = "Corc";
let surname = "Waşinktın";
console.log(name + " " + surname);

let msg = "Hello";
msg += " World!";
console.log(msg);

/*
	==========================
		Bitwise Operators
	==========================
	* Sayılara ikilik tabanda (binary) işlem yapar.
	* Operatörler :
		- & (AND)
		- | (OR)
		- ^ (XOR)
		- ~ (NOT)
		- << (Left shift)
		- >> (Right shift)
		- >>> (Unsigned right shift)

	* Bunların analtımı burada yapılmamıştır.
*/
console.log("Bitwise  Operators");

/*
	==========================
		Other Operators
	==========================
	* JavaScript’te daha az kullanılan fakat bazı durumlarda önemli olan bazı operatörler de vardır :
		- typeof
		- instanceof
		- delete
		- in
		- void

	* Bunların analtımı burada yapılmamıştır.
*/
console.log("Other  Operators");

/*
	==========================
		Operator Precedence
	==========================
	* Eğer bir ifade birden fazla operatör içeriyorsa, hangi operatörün önce çalışacağını bilmek önemlidir.

	* JavaScript'te operatörler belirli bir öncelik sırasına sahiptir:
		- Parantezler: () -> en yüksek öncelik
		- Unary operatörler: +, -, !, ++, -- 
		- Çarpma / Bölme / Mod: *, /, %
		- Toplama / Çıkarma: +, -
		- Atama: =, +=, -=, *=, /=, %=
		- Virgül: , -> en düşük öncelik

	* Bunların analtımı burada yapılmamıştır.

	* Daha fazla bilgi için : 
		- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence
*/
console.log("Other  Operators");
