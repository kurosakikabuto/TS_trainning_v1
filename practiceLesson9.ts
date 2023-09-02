import { Rank } from "./Data/student";

type Student = {
  id: string;
  name: string;
  scores: {
    oralTest: number;
    shortTest: Array<Rank>;
    finalExam: {
      theory: string;
      practical: number;
    };
  };
};
const students_lopA: Student[] = [
  {
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
  },
  {
    id: "English_2",
    name: "Vmax",
    scores: {
      oralTest: 8,
      shortTest: ["A-", "B+", "A-"],
      finalExam: {
        theory: "A",
        practical: 7,
      },
    },
  },
  {
    id: "English_3",
    name: "Tom",
    scores: {
      oralTest: 7,
      shortTest: ["C-", "C+", "B+"],
      finalExam: {
        theory: "B",
        practical: 8,
      },
    },
  },
  {
    id: "English_4",
    name: "Lucy",
    scores: {
      oralTest: 9,
      shortTest: ["B-", "A-", "A+"],
      finalExam: {
        theory: "A",
        practical: 9,
      },
    },
  },
  {
    id: "Science_5",
    name: "Jake",
    scores: {
      oralTest: 8,
      shortTest: ["C+", "B-", "A-"],
      finalExam: {
        theory: "B+",
        practical: 7,
      },
    },
  },
  {
    id: "Science_6",
    name: "Emma",
    scores: {
      oralTest: 7,
      shortTest: ["B+", "C-", "B-"],
      finalExam: {
        theory: "C+",
        practical: 8,
      },
    },
  },
  {
    id: "Science_7",
    name: "Alex",
    scores: {
      oralTest: 9,
      shortTest: ["B+", "A-", "A+"],
      finalExam: {
        theory: "A+",
        practical: 9,
      },
    },
  },
  {
    id: "Science_8",
    name: "Sophie",
    scores: {
      oralTest: 8,
      shortTest: ["C+", "C-", "B-"],
      finalExam: {
        theory: "B",
        practical: 7,
      },
    },
  },
  {
    id: "History_9",
    name: "Noah",
    scores: {
      oralTest: 7,
      shortTest: ["A-", "B+", "B-"],
      finalExam: {
        theory: "A",
        practical: 8,
      },
    },
  },
  {
    id: "History_10",
    name: "Lily",
    scores: {
      oralTest: 9,
      shortTest: ["A-", "C+", "A+"],
      finalExam: {
        theory: "A+",
        practical: 9,
      },
    },
  },
  {
    id: "History_2",
    name: "Anna",
    scores: {
      oralTest: 8,
      shortTest: ["A-", "B+", "A-"],
      finalExam: {
        theory: "A",
        practical: 7,
      },
    },
  },
  {
    id: "History_3",
    name: "Tom",
    scores: {
      oralTest: 7,
      shortTest: ["C-", "C+", "B+"],
      finalExam: {
        theory: "B",
        practical: 8,
      },
    },
  },
  {
    id: "Physics_4",
    name: "Alice",
    scores: {
      oralTest: 8,
      shortTest: ["A+", "A", "B+"],
      finalExam: {
        theory: "A+",
        practical: 9,
      },
    },
  },
  {
    id: "Physics_5",
    name: "Alex",
    scores: {
      oralTest: 9,
      shortTest: ["A-", "A", "A+"],
      finalExam: {
        theory: "A",
        practical: 8,
      },
    },
  },
  {
    id: "Physics_6",
    name: "Eva",
    scores: {
      oralTest: 7,
      shortTest: ["B-", "B", "B+"],
      finalExam: {
        theory: "B",
        practical: 9,
      },
    },
  },
  {
    id: "Physics_7",
    name: "David",
    scores: {
      oralTest: 8,
      shortTest: ["C-", "B", "C+"],
      finalExam: {
        theory: "B",
        practical: 7,
      },
    },
  },
  {
    id: "Chemistry_8",
    name: "Sophie",
    scores: {
      oralTest: 9,
      shortTest: ["B-", "C+", "B+"],
      finalExam: {
        theory: "A",
        practical: 8,
      },
    },
  },
  {
    id: "Chemistry_9",
    name: "Lucas",
    scores: {
      oralTest: 7,
      shortTest: ["B+", "B", "C+"],
      finalExam: {
        theory: "B",
        practical: 9,
      },
    },
  },
  {
    id: "Chemistry_10",
    name: "Lily",
    scores: {
      oralTest: 8,
      shortTest: ["A+", "A-", "B+"],
      finalExam: {
        theory: "A+",
        practical: 8,
      },
    },
  },
  {
    id: "Chemistry_11",
    name: "Michaela",
    scores: {
      oralTest: 9,
      shortTest: ["A-", "A+", "B+"],
      finalExam: {
        theory: "A+",
        practical: 8,
      },
    },
  },
  {
    id: "Chemistry_12",
    name: "James",
    scores: {
      oralTest: 8,
      shortTest: ["C-", "C+", "B+"],
      finalExam: {
        theory: "B",
        practical: 9,
      },
    },
  },
  {
    id: "Music_11",
    name: "Michaela",
    scores: {
      oralTest: 9,
      shortTest: ["A-", "A+", "B+"],
      finalExam: {
        theory: "A+",
        practical: 8,
      },
    },
  },
  {
    id: "Music_12",
    name: "James",
    scores: {
      oralTest: 8,
      shortTest: ["C-", "C+", "B+"],
      finalExam: {
        theory: "B",
        practical: 9,
      },
    },
  },
  {
    id: "Music_11",
    name: "Michaela",
    scores: {
      oralTest: 9,
      shortTest: ["A-", "A+", "B+"],
      finalExam: {
        theory: "A+",
        practical: 8,
      },
    },
  },
  {
    id: "Music_12",
    name: "James",
    scores: {
      oralTest: 8,
      shortTest: ["C-", "C+", "B+"],
      finalExam: {
        theory: "B",
        practical: 9,
      },
    },
  },
  {
    id: "Music_11",
    name: "Michaela",
    scores: {
      oralTest: 9,
      shortTest: ["A-", "A+", "B+"],
      finalExam: {
        theory: "A+",
        practical: 8,
      },
    },
  },
  {
    id: "Music_12",
    name: "James",
    scores: {
      oralTest: 8,
      shortTest: ["C-", "C+", "B+"],
      finalExam: {
        theory: "B",
        practical: 9,
      },
    },
  },
  {
    id: "Biology_11",
    name: "Michaela",
    scores: {
      oralTest: 9,
      shortTest: ["A-", "A+", "B+"],
      finalExam: {
        theory: "A+",
        practical: 8,
      },
    },
  },
  {
    id: "Biology_12",
    name: "James",
    scores: {
      oralTest: 8,
      shortTest: ["C-", "C+", "B+"],
      finalExam: {
        theory: "B",
        practical: 9,
      },
    },
  },
  {
    id: "Biology_11",
    name: "Michaela",
    scores: {
      oralTest: 9,
      shortTest: ["A-", "A+", "B+"],
      finalExam: {
        theory: "A+",
        practical: 8,
      },
    },
  },
  {
    id: "Biology_12",
    name: "James",
    scores: {
      oralTest: 8,
      shortTest: ["C-", "C+", "B+"],
      finalExam: {
        theory: "B",
        practical: 9,
      },
    },
  },
  {
    id: "Biology_11",
    name: "Michaela",
    scores: {
      oralTest: 9,
      shortTest: ["A-", "A+", "B+"],
      finalExam: {
        theory: "A+",
        practical: 8,
      },
    },
  },
  {
    id: "Biology_12",
    name: "James",
    scores: {
      oralTest: 8,
      shortTest: ["C-", "C+", "B+"],
      finalExam: {
        theory: "B",
        practical: 9,
      },
    },
  },
  {
    id: "Art_11",
    name: "Michaela",
    scores: {
      oralTest: 9,
      shortTest: ["A-", "A+", "B+"],
      finalExam: {
        theory: "A+",
        practical: 8,
      },
    },
  },
  {
    id: "Art_12",
    name: "James",
    scores: {
      oralTest: 8,
      shortTest: ["C-", "C+", "B+"],
      finalExam: {
        theory: "B",
        practical: 9,
      },
    },
  },
  {
    id: "Art_11",
    name: "Michaela",
    scores: {
      oralTest: 9,
      shortTest: ["A-", "A+", "B+"],
      finalExam: {
        theory: "A+",
        practical: 8,
      },
    },
  },
  {
    id: "Math_12",
    name: "James",
    scores: {
      oralTest: 8,
      shortTest: ["C-", "C+", "B+"],
      finalExam: {
        theory: "B",
        practical: 9,
      },
    },
  },
  {
    id: "Math_11",
    name: "Michaela",
    scores: {
      oralTest: 9,
      shortTest: ["A-", "A+", "B+"],
      finalExam: {
        theory: "A+",
        practical: 8,
      },
    },
  },
  {
    id: "Math_12",
    name: "James",
    scores: {
      oralTest: 8,
      shortTest: ["C-", "C+", "B+"],
      finalExam: {
        theory: "B",
        practical: 9,
      },
    },
  },
  {
    id: "Math_11",
    name: "Michaela",
    scores: {
      oralTest: 9,
      shortTest: ["A-", "A+", "B+"],
      finalExam: {
        theory: "A+",
        practical: 8,
      },
    },
  },
  {
    id: "Math_12",
    name: "James",
    scores: {
      oralTest: 8,
      shortTest: ["C-", "C+", "B+"],
      finalExam: {
        theory: "B",
        practical: 9,
      },
    },
  },
  {
    id: "Math_11",
    name: "Michaela",
    scores: {
      oralTest: 9,
      shortTest: ["A-", "A+", "B+"],
      finalExam: {
        theory: "A+",
        practical: 8,
      },
    },
  },
  {
    id: "Math_12",
    name: "James",
    scores: {
      oralTest: 8,
      shortTest: ["C-", "C+", "B+"],
      finalExam: {
        theory: "B",
        practical: 9,
      },
    },
  },
  {
    id: "Math_11",
    name: "Michaela",
    scores: {
      oralTest: 9,
      shortTest: ["A-", "A+", "B+"],
      finalExam: {
        theory: "A+",
        practical: 8,
      },
    },
  },
  {
    id: "Art_12",
    name: "James",
    scores: {
      oralTest: 8,
      shortTest: ["C-", "C+", "B+"],
      finalExam: {
        theory: "B",
        practical: 9,
      },
    },
  },
  {
    id: "English_11",
    name: "Michaela",
    scores: {
      oralTest: 9,
      shortTest: ["A-", "A+", "B+"],
      finalExam: {
        theory: "A+",
        practical: 8,
      },
    },
  },
  {
    id: "English_12",
    name: "James",
    scores: {
      oralTest: 8,
      shortTest: ["C-", "C+", "B+"],
      finalExam: {
        theory: "B",
        practical: 9,
      },
    },
  },
];
const lopToanHSSX: Student[] = [
  {
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
  },
  {
    id: "English_2",
    name: "Vmax",
    scores: {
      oralTest: 8,
      shortTest: ["A-", "B+", "A-"],
      finalExam: {
        theory: "A",
        practical: 7,
      },
    },
  },
  {
    id: "English_3",
    name: "Tom",
    scores: {
      oralTest: 7,
      shortTest: ["C-", "C+", "B+"],
      finalExam: {
        theory: "B",
        practical: 8,
      },
    },
  },
  {
    id: "English_4",
    name: "Lucy",
    scores: {
      oralTest: 9,
      shortTest: ["B-", "A-", "A+"],
      finalExam: {
        theory: "A",
        practical: 9,
      },
    },
  },
  {
    id: "Science_5",
    name: "Jake",
    scores: {
      oralTest: 8,
      shortTest: ["C+", "B-", "A-"],
      finalExam: {
        theory: "B+",
        practical: 7,
      },
    },
  },
  {
    id: "Science_6",
    name: "Emma",
    scores: {
      oralTest: 7,
      shortTest: ["B+", "C-", "B-"],
      finalExam: {
        theory: "C+",
        practical: 8,
      },
    },
  },
  {
    id: "Science_7",
    name: "Alex",
    scores: {
      oralTest: 9,
      shortTest: ["B+", "A-", "A+"],
      finalExam: {
        theory: "A+",
        practical: 9,
      },
    },
  },
  {
    id: "Science_8",
    name: "Sophie",
    scores: {
      oralTest: 8,
      shortTest: ["C+", "C-", "B-"],
      finalExam: {
        theory: "B",
        practical: 7,
      },
    },
  },
  {
    id: "History_9",
    name: "Noah",
    scores: {
      oralTest: 7,
      shortTest: ["A-", "B+", "B-"],
      finalExam: {
        theory: "A",
        practical: 8,
      },
    },
  },
  {
    id: "History_10",
    name: "Lily",
    scores: {
      oralTest: 9,
      shortTest: ["A-", "C+", "A+"],
      finalExam: {
        theory: "A+",
        practical: 9,
      },
    },
  },
  {
    id: "History_2",
    name: "Anna",
    scores: {
      oralTest: 8,
      shortTest: ["A-", "B+", "A-"],
      finalExam: {
        theory: "A",
        practical: 7,
      },
    },
  },
  {
    id: "History_3",
    name: "Tom",
    scores: {
      oralTest: 7,
      shortTest: ["C-", "C+", "B+"],
      finalExam: {
        theory: "B",
        practical: 8,
      },
    },
  },
  {
    id: "Physics_4",
    name: "Alice",
    scores: {
      oralTest: 8,
      shortTest: ["A+", "A", "B+"],
      finalExam: {
        theory: "A+",
        practical: 9,
      },
    },
  },
];
// console.log("students_lopA:", students_lopA.length)
// console.log("lopToanHSSX:", lopToanHSSX.length)

function locDanhSachHSSX(danhsachhocsinh?: Student[]) {
      //   if (danhsachhocsinh !== undefined) {
  //     return danhsachhocsinh.filter(
  //       (item: Student) =>
  //         item.scores.oralTest >= 8 && item.scores.finalExam.practical >= 9
  //     );
  //   } else {
  //     // vào trong này là khi không nhập danh sách gì vào hàm
  //     // return "Bạn chưa nhập vào danh sách học sinh nào cả";
  //     return lopToanHSSX.filter(
  //       (item: Student) =>
  //         item.scores.oralTest >= 8 && item.scores.finalExam.practical >= 9
  //     );
  //   }

  return danhsachhocsinh !== undefined
    ? danhsachhocsinh.filter(
        (item: Student) =>
          item.scores.oralTest >= 8 && item.scores.finalExam.practical >= 9
      )
    : lopToanHSSX.filter(
        (item: Student) =>
          item.scores.oralTest >= 8 && item.scores.finalExam.practical >= 9
      );
}
function locDanhSachHSSX_cach2(danhsachhocsinh_NHAPVAO?: Student[]) {
  return (danhsachhocsinh_NHAPVAO !== undefined ? danhsachhocsinh_NHAPVAO : lopToanHSSX).filter(
    (item: Student) =>
      item.scores.oralTest >= 8 && item.scores.finalExam.practical >= 9
  );
}
const hsXS = locDanhSachHSSX_cach2();
console.log("locDanhSachHSSX:", hsXS);
const lopHoc = [1,2,3,4,5]
lopHoc 
