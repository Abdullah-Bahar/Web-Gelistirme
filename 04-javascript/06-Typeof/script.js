/* 
	================
		Typeof
	================

	* "typeof" değişken tipini bize söyler. (İster referans ister Primitive olsun)

	* İki tür yazımı vardır : (Her ikisi de çalışır ve aynı sonucu verir)
		1. Operatör olarak		-> typeof x
		2. Fonksiyonel tipte	-> typeof(x)

	* typeof(null) :
		- obcejt değerini verecektir. Ancak hatalı bir gösterimdir. Null'un türü null'dur.
		- Aslında bu durum bilinen bir hatadır. Eski versiyonlara uygunluk açısından bu şekilde bırakılmıştır.
*/
console.log("Typeof");

let degersiz1;

console.log(typeof 123);
console.log(typeof "naber");
console.log(typeof(1234567890n));
console.log(typeof true);
console.log(typeof null);
console.log(typeof(degersiz1));
console.log(typeof console.log);
