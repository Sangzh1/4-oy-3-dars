// 1 Masala
let num_1 = +prompt("Birinchi sonni kiriting:");
let num_2 = +prompt("Ikkinchi sonni kiriting:");
let num_3 = +prompt("Uchinchi sonni kiriting:");

let numbers = [num_1, num_2, num_3].map(function (son) {
  return parseFloat(son);
});

let kopaytma = numbers.reduce(function (total, son) {
  return total * son;
}, 1);

console.log("3 ga karrali sonlarning kopaytmasi:", kopaytma);

//  2 Masala
let son = prompt("3 xonali son kiriting:");

let brlik = son % 10;
let onlik = Math.floor((son % 100) / 10);
let yuzli = Math.floor(son / 100);

let javob = brlik + onlik + yuzli;

console.log("Raqamlar yig'indisi:", javob);

if (javob % 2 === 0) {
  console.log("Yig'indi juft son");
} else {
  console.log("Yig'indi toq son");
}

// 3 Masala
let son_3xonali = +prompt("3 xonali son kiriting:");

let birlik = son % 10;
let unlik = Math.floor((son % 100) / 10);
let yuzlik = Math.floor(son / 100);

let res_1 = birlik % 2 === 1 ? birlik : 0;
let res_2 = unliklar_2 % 2 === 1 ? unliklar_2 : 0;
let res_3 = yuzliklar_3 % 2 === 1 ? yuzliklar_3 : 0;

let toqSonlarKopaytmasi = res_1 * res_2 * res_3;
console.log("Toq sonlarning kopaytmasi:", toqSonlarKopaytmasi);

// 4 Masala
// Foydalanuvchidan 3 ta sonni olish
let son_1_ = prompt("Birinchi sonni kiriting:");
let sonIkki = prompt("Ikkinchi sonni kiriting:");
let sonUch = prompt("Uchunchi sonni kiriting:");

son_1_ = Number(son_1_);
sonIkki = Number(sonIkki);
sonUch = Number(sonUch);

// 5 ga karrali sonlarni topish
let karralison_5 = 0;
if (son_1_ % 5 === 0) {
  karralison_5 += son_1_;
}
if (sonIkki % 5 === 0) {
  karralison_5 += sonIkki;
}
if (sonUch % 5 === 0) {
  karralison_5 += sonUch;
}

// 7 ga karrali sonlarni topish
let karralison_7 = 0;
if (son_1_ % 7 === 0) {
  karralison_7 += son_1_;
}
if (sonIkki % 7 === 0) {
  karralison_7 += sonIkki;
}
if (sonUch % 7 === 0) {
  karralison_7 += sonUch;
}

console.log("5 ga karrali sonlar:", karralison_5);
console.log("7 ga karrali sonlar:", karralison_7);


// 6 Masala
let amal_1 = parseFloat(prompt("Birinchi sonni kiriting:"));
let amal = prompt("Amalni kiriting (+, -, *, /):");
let amal_2 = parseFloat(prompt("Ikkinchi sonni kiriting:"));

let result;

if (isNaN(son1) || isNaN(son2)) {
  console.log("Noto'g'ri son kiritdingiz!");
} else {
  switch (amal) {
    case "+":
      result = amal_1 + amal_2;
      break;
    case "-":
      result = amal_1 - amal_2;
      break;
    case "*":
      result = amal_1 * amal_2;
      break;
    case "/":
      if (amal_2 !== 0) {
        result = amal_1 / amal_2;
      } else {
        console.log("Nolga bo'lish mumkin emas!");
      }
      break;
    default:
      console.log("Noto'g'ri amal kiritdingiz!");
  }

  if (result !== undefined) {
    console.log("Natija: " + result);
  }
}

// 7 Masala
let a = parseFloat(prompt("a ni kiriting:"));
let b = parseFloat(prompt("b ni kiriting:"));
let c = parseFloat(prompt("c ni kiriting:"));

if (
  !isNaN(a) &&
  !isNaN(b) &&
  !isNaN(c) &&
  a > 0 &&
  b > 0 &&
  c > 0 &&
  a + b > c &&
  a + c > b &&
  b + c > a
) {
  console.log("Uchburchak yasash mumkin");
} else {
  console.log("Uchburchak yasash mumkin emas");
}

// 8 Masala
let sonP = prompt("3 xonali sonni kiriting:");

if (sonP.length === 3) {
  let birinchi__son = sonP[0];
  let ikkinchi__son = sonP[1];
  let uchinchi__son = sonP[2];

  if (birinchi__son === uchinchi__son) {
    console.log(sonP + " - Palindrom son");
  } else {
    console.log(sonP + " - Palindrom emas");
  }
} else {
  console.log("Noto'g'ri son kiritildi");
}