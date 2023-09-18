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

const baitap: number[] = [
  1, 2, 6, 99, 77, 8, 9, 78, 2, 2, 45, 2, 5, 57, 2, 578, 7, 7, 111, 7, 23, 3,
  77, 100, 77, 77, 874, 11, 77, 5, 8, 9, 7, 7, 7, 7111, 1000,
];
// baitap.sort((a, b) => (a % 2 ? -1 : 1) * (a - b));
baitap.sort((a, b) => (a % 2) - (b % 2) || a - b);

console.log(baitap);

// sắp xếp mảng đã cho sao cho lẻ đứng trước chẵn đứng sau và tăng dần
//
//viết code
// toán tử   đk ? kết quả khi điểu kiện đúng :  kết quả khi điểu kiện sai
type Diem = { diemSo: number[]; heSo: number };
type Scores = {
  ktMieng: Diem;
  kt15Phut: Diem;
  kt1Tiet: Diem;
  ktCuoiky: Diem;
};
const diemCuaPhuc: Scores = {
  ktMieng: {
    diemSo: [10],
    heSo: 1,
  },
  kt15Phut: {
    diemSo: [9, 8, 6],
    heSo: 1,
  },
  kt1Tiet: {
    diemSo: [9, 6],
    heSo: 2.5 
,  },
  ktCuoiky: {
    diemSo: [8.25],
    heSo: 4,
  },
};

function avenragedScore(diem: Scores) {
  const mangDiemStudent = Object.values(diem);
  console.log("mangDiemStudent:", mangDiemStudent)
  const tongHeSoChia = mangDiemStudent.reduce((giatriBandau, diem) => {
    
    return giatriBandau + diem.diemSo.length * diem.heSo;
  }, 0);
  const tongTatCaDiemSo = mangDiemStudent.reduce((giatriBandau, diem) => {
    console.log("giatriBandau:", giatriBandau)
    return (
      giatriBandau +
      diem.diemSo.reduce((giabd, phanTu) => {
       
        return giabd + phanTu;
      }, 0) *
        diem.heSo
    );
  }, 0);
  const ketQuaTb = tongTatCaDiemSo / tongHeSoChia;
  return ketQuaTb;
}
console.log("avenragedScore:", avenragedScore(diemCuaPhuc));

const danhSach : number[] = [6, 7, 5, 9, 8, 5, 3, 10, 11, 151, 7, 1];
function tinhTong(diem:number[]) {
  const tong = danhSach.reduce((gtbd,diem) => {
    return gtbd + diem ; 
  } ,0 )
 const ketQuaTong = diem ;
 return  ketQuaTong
}