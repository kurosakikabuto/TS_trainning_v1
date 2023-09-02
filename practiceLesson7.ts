import { Student, students } from "./Data/student";
import { hSGioi, hSKha, hSTB, phucNguyen } from "./practieLesson6";

// console.log("hs:", hs)
// const ktM = hs.scores.oralTest
// console.log("ktM:", ktM)
// const kt15p = hs.scores.shortTest
// console.log("kt15p:", kt15p)
// const ktCK_thucHanh = hs.scores.finalExam.practical
// console.log("ktCK_thucHanh:", ktCK_thucHanh)
// const ktCK_lyThuyet = hs.scores.finalExam.theory
// console.log("ktCK_lyThuyet:", ktCK_lyThuyet)

function tinhTB(hs: Student) {
  if (hSGioi.includes(hs)) {
    return hs.name + "là học sinh Giỏi";
  } else if (hSKha.includes(hs)) {
    return hs.name + "là học sinh kha";
  } else {
    return hs.name + "là học sinh tb";
  }
}
console.log("tinhTB:", tinhTB(students[0]));

// toán tử 3 ngôi
// [điều kiện ] ?  [giá trị về Điều kiện đúng] : [giá trị về Điều kiện sai]

const a1: any = 1;

const a2: string = "12";

console.log("Number(a2):", typeof Number(a2));

// const checked = a.includes(8)
//   ? a.includes(66)
//   : a.includes(6)
//   ? "Phúc"
//   : "Anh THoại";

// console.log("checked:", checked);

function kiemTraDiem(diem?: number) {
  const a = [1, 2, 5, 6, 1, 4, 15, 1, 1, 65, 1, 4, 1];
  return diem !== undefined
    ? a.includes(diem)
      ? "so da nhap ko thoa man "
      : "So da nhap khong thoa man dieu kien"
    : "khong nhap";
}
console.log("ket qua kiem tra diem :", kiemTraDiem(9));



const months = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.log(months);

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);

