
// practice Filter Method
import { Rank, Student, students } from "./Data/student";

const xlGioi: Rank[] = ["A", "A+", "S"];
const xlKha: Rank[] = ["B-", "B", "B+", "A-"];
const xlTB: Rank[] = ["C-", "C", "C+"];

export const hSGioi: Student[] = students.filter(
  //   (item: Student) => item.scores.finalExam.theory === "A+" || item.scores.finalExam.theory === "A-" ||  item.scores.finalExam.theory === "A" ||  item.scores.finalExam.theory === "S"
  (item: Student) =>
    xlGioi.includes(item.scores.finalExam.theory as Rank) &&
    item.scores.finalExam.practical >= 9
);
const Tonadus: Student = {
  id: "English_2",
  name: "TOnadus",
  scores: {
    oralTest: 8,
    shortTest: ["A-", "B+", "A-"],
    finalExam: {
      theory: "A",
      practical: 10,
    },
  },
};
//   hSGioi.push(Tonadus);
// hSGioi.pop();
// const  exSLice = hSGioi.slice(1, 3)
// console.log("hSGioi:", hSGioi);
// console.log("exSLice:", exSLice)

export const hSKha: Student[] = students.filter((item: Student) => {
  const thucHanh =
    item.scores.finalExam.practical >= 6.5 &&
    item.scores.finalExam.practical >= 8;
  const lyThuyet = xlKha.includes(item.scores.finalExam.theory as Rank);
  return thucHanh && lyThuyet;
});

export const hSTB: Student[] = students.filter(
  (item: Student) =>
    // xlTB.includes(item.scores.finalExam.theory as Rank) && item.scores.finalExam.practical > 5
    !hSGioi.includes(item) && !hSKha.includes(item)
);




// Method Find in Array
export const findVmax = students.find(
  (item: Student) =>
    item.name === "Vmax" && item.scores.finalExam.practical == 7
);
export const phucNguyen : Student = {
  id: "Science_1",
  name: "Phúc Nguyễn ",
  scores: {
    oralTest: 9,
    shortTest: ["B-", "C+", "A+"],
    finalExam: {
      theory: "A+",
      practical: 9,
    },
  },
}
