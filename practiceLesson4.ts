//1. Tạo  type của một teacher phù hợp với các giá trị
// ví dụ name = "John Doe" >>  name : string
//1.1 sau khi tạo type cho giáo viên tạo từng biến cho giáo viên vd:
//  1.2 gắn type cho mảng teachers là danh dách các giáo viên hien tại anh đang để any[]
type Teacher = {
  name: string;
  address: string;
  class: string;
  age: number;
  gender: boolean;
  information: {
    yearsOfExperience: number;
    graduatedFrom: string;
    isMarried: boolean;
    contactNumber: string;
    linkSocial: string;
  };
};


const John_Doe: Teacher = {
  name: "John Doe",
  address: "123 Main Street, City",
  class: "Art",
  age: 35,
  gender: true,
  information: {
    yearsOfExperience: 10,
    graduatedFrom: "ABC University",
    isMarried: false,
    contactNumber: "1234567890",
    linkSocial: "https://www.example.com/john-doe",
  },
};


const John_Doe1: Teacher = {
  name: "John Doe",
  address: "123 Main Street, City",
  class: "Art",
  age: 35,
  gender: true,
  information: {
    yearsOfExperience: 10,
    graduatedFrom: "ABC University",
    isMarried: false,
    contactNumber: "1234567890",
    linkSocial: "https://www.example.com/john-doe",
  },
};
// đổi các giáo viên thành các biến giáo viên đã tạo sau đó xuống dòng 165

const John_Doe2: Teacher = {
  name: "John Doe",
  address: "123 Main Street, City",
  class: "Art",
  age: 35,
  gender: true,
  information: {
    yearsOfExperience: 10,
    graduatedFrom: "ABC University",
    isMarried: false,
    contactNumber: "1234567890",
    linkSocial: "https://www.example.com/john-doe",
  },
};
const Michael_Johnson: Teacher = {
  name: "Michael Johnson",
  address: "789 Oak Road, Village",
  class: "History",
  age: 42,
  gender: true,
  information: {
    yearsOfExperience: 12,
    graduatedFrom: "DEF School",
    isMarried: true,
    contactNumber: "5555555555",
    linkSocial: "https://www.example.com/michael-johnson",
  },
};
const Sophia_Wang: Teacher = {
  name: "Sophia Wang",
  address: "987 Cherry Lane, Metro",
  class: "Biology",
  age: 37,
  gender: false,
  information: {
    yearsOfExperience: 13,
    graduatedFrom: "MNO School",
    isMarried: true,
    contactNumber: "4444444444",
    linkSocial: "https://www.example.com/sophia-wang",
  },
};
const Robert_Kim: Teacher = {
  name: "Robert Kim",
  address: "333 Maple Drive, Riverside",
  class: "Chemistry",
  age: 41,
  gender: true,
  information: {
    yearsOfExperience: 18,
    graduatedFrom: "PQR College",
    isMarried: false,
    contactNumber: "2222222222",
    linkSocial: "https://www.example.com/robert-kim",
  },
};
const Olivia_Garcia: Teacher = {
  name: "Olivia Garcia",
  address: "444 Cedar Terrace, Town",
  class: "Music",
  age: 36,
  gender: false,
  information: {
    yearsOfExperience: 5,
    graduatedFrom: "STU School",
    isMarried: true,
    contactNumber: "3333333333",
    linkSocial: "https://www.example.com/olivia-garcia",
  },
};
const Ava_Lopez: Teacher = {
  name: "Ava Lopez",
  address: "888 Willow Street, City",
  class: "Art",
  age: 33,
  gender: false,
  information: {
    yearsOfExperience: 9,
    graduatedFrom: "YZA College",
    isMarried: true,
    contactNumber: "1111111111",
    linkSocial: "https://www.example.com/ava-lopez",
  },
};
const Ethan_Hernandez: Teacher = {
  name: "Ethan Hernandez",
  address: "666 Birch Avenue, Suburb",
  class: "Physical Education",
  age: 34,
  gender: true,
  information: {
    yearsOfExperience: 7,
    graduatedFrom: "VWX University",
    isMarried: false,
    contactNumber: "8888888888",
    linkSocial: "https://www.example.com/ethan-hernandez",
  },
};

const teachers: Teacher[] = [
  John_Doe,
  John_Doe2,
  Michael_Johnson,
  Sophia_Wang,
  Robert_Kim,
  Olivia_Garcia,
  Ethan_Hernandez,
  Ava_Lopez,
];
console.log("phan tu thu 4:", teachers[3].information.linkSocial)
// const may: number[]
const manga : number[] = [12]


//2. tạo Type cho hoc sinh
// điều kện shortTest là 1 array với các phần tử, từ "F" | "D" |  "C+" | "C-" | "C" | "B+" | "B-" | "B" | "A+" | "A-" | "A" | "S"
//theory cũng nhận những giá trị tương ứng
//   gắn type cho mảng studens là danh dách các hoc sinh  hien tại anh đang để any[]

type Rank = "F" | "D" |  "C+" | "C-" | "C" | "B+" | "B-" | "B" | "A+" | "A-" | "A" | "S"
export type Student = {
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
const studens: Student[] = [
  {
    id: "Science_1",
    name: "Vmax",
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
