import student, { Student } from "./Data/student";

const student1: Student = {
  id: "Science_1",
  name: "Phúc Pro",
  scores: {
    oralTest: 9,
    shortTest: ["B-", "C+", "A+"],
    finalExam: {
      theory: "A+",
      practical: 9,
    },
  },
};

const dshsMoi = student;

// const mangSo: Array<number> = [2, 3, 4, 1, 5, 8, 11];
// const  mangMoi : Array<number> = mangSo.sort()
// console.log("mangmoi", mangMoi)

// const numbers = [9, 2, 4, 3, 1,10,5,11];

// numbers.sort((a, b) => b - a);

// console.log(numbers); // [9, 5, 4, 3, 2, 1]

const so = [2, 54, 5, 6, 7, 8, 11, 67];
so.sort((b, n) => b - n);
console.log("số:", so);
const a = 10;
const b = 5;

console.log(a < b); // true

// const numbers = [10, 5, 2, 7, 3];
// numbers.sort((a, b) => {
//   if (a % 2 === 1) {
//     return 1;
//   } else if (b % 2 === 1) {
//     return -1;
//   } else {
//     return 0;
//   }
// });

// console.log(numbers); // [2, 3, 5, 7, 10]

const numbers = [10, 50, 2, 7, 3];

const dapan1 = numbers.sort((a, b) => {
  if (a % 2 === 1) {
    return 1;
  } else if (b % 2 === 1) {
    return -1;
  } else {
    return 0;
  }
});
console.log("dapan1:", dapan1);
const dapan2 = numbers.sort((a, b) => (b % 2) - (a % 2));

// const dapan43 = numbers.sort((a, b) => a - b);
+console.log("dapan2:", dapan2);

const baitap = [
  1,
  2,
  6,
  99,
  77,
  8,
  9,
  78,
  2,
  2,
  45,
  2,
  5,
  57,
  2,
  ,
  578,
  7,
  7,
  111,
  7,
  23,
  3,
  77,
  100,
  77,
  77,
  874,
  11,
  ,
  77,
  5,
  8,
  9,
  7,
  7,
  7,
  7111,
  1000,
];

// sắp xếp mảng đã cho sao cho lẻ đứng trước chẵn đứng sau và tăng dần
//
//viết code