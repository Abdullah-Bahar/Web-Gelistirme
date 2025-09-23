/* 
	===================
		Switch
	===================

	* if-else gibi belli koşullar altında kod bloğu çalıştırmak için kullanılır. 
	* Ancak snytax olarak farklıdır.

	* switch yapısı :

		switch (değer) {
			case (koşul1):	
				// koşul1 true ise buradaki kod çalışır
				// false ise aşağıdaki case'e geçer
				break;

			case (koşul2):
				// koşul1 true ise buradaki kod çalışır
				// false ise aşağıdaki case'e geçer
				break;

			case ....

			default:
				// Yukarıdaki koşullar sağlanmaz ise buradaki kod geçerli olur
				break;
		}

	* Önemli Notlar:
		
		- "switch" bloğu bir veya birden fazla "case" içermelidir.

		- "default" bloğu opsiyoneldir.
			> if-else yapısındaki "else" gibi çalışır.
		
		- "break" kullanılırsa switch sonlandırılır.
			> Kullanılmazsa sonraki case’ler de çalışır (fall-through).

		- Karşılaştırma "===" (strict equality) ile yapılır.
			> Yani hem değer hem de tip aynı olmalı.
*/



let a = 2 + 2;

// break olmadan
switch (a) {
	case 3:
		console.log('Çok kısa');
	case 4:
		console.log('Kesinlikle!');
	case 5:
		console.log('Çok büyük');
	default:
		console.log("Böyle bir değeri bilmiyorum.");
}

// break ile
switch (a) {
	case 3:
		console.log('Çok kısa');
		break;
	case 4:
		console.log('Kesinlikle!');
		break;
	case 5:
		console.log('Çok büyük');
		break;
	default:
		console.log("Böyle bir değeri bilmiyorum.");
		break;
}
