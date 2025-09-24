var opel = {
	marka: "Opel",
	model: "Corsa",
	yil: 2015,
	renk: "mavi",
	otomatik: true
}

console.log(opel);

console.log(opel.marka);
console.log(opel.model);
console.log(opel.yil);
console.log(opel.renk);
console.log(opel.otomatik);

console.log(opel["renk"]);
console.log(opel['otomatik']);

var toyota = new Object();
toyota.marka = "Toyota";
toyota.model = "Yaris";
toyota.yil = 2012;
toyota.renk = "Kirmizi";
toyota.otomatik = false;

console.log(toyota);

toyota.model = "Auris";


let araba = [
	{
		marka: "Opel",
		model: "Corsa",
		yil: 2015,
		renk: "mavi",
		otomatik: true
	},
	{
		marka: "Mazda",
		model: "CX-3",
		yil: 2017,
		renk: "mavi",
		otomatik: true
	}
]

console.log(araba);
console.log(araba[0]);
console.log(araba[1]);
