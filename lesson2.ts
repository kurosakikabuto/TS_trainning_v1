//kiểu bất kỳ
const bienkieuany: any = 1111 + "ssss";
//kiểu chuỗi
const bienkieuString: string = "5";
//kiểu số
const bienkieuNumber: number = 5555;

//kiểu boolean [đúng hoặc sai] chỉ nhận vào và trả ra kết quả dúng hay sai
const bienPhuc: boolean = true;

//kieu mảng kiểu danh sách
const mang: number[] = [1, 2, 4, 6];
const mang2: string[] = ["2", "3", "thoai"];
const mang3: boolean[] = [1 > 2, false];

//viet mot mang co ca chữ lẫn số lẫn boolean
const bienkiueua: any[] = [1, 2, "2", true];

const bienx = [1, 2, "2", true];

const bienPh: any[] = [1, 2, "2", true];

//kiểu object : kiểu đối tượng
type ThongTin = {
  ten: string;
  tuoi: number;
  dacovo?: boolean;
  cty: string;
};
const thongtincuaATHoi: ThongTin = {
  ten: "ĐInh THiên thoại",
  tuoi: 2,
  cty: "TMa",
  dacovo: false,
};
console.log(
  "info Thoai :",thongtincuaATHoi
)

// viết cho anh một type chứa thông tin là Name: string , age: number , và một danh sách điểm số dạng number[]
type ThongTin1 = { name: string; age: number; bandiem: number[] };
const phuc: ThongTin1 = { name: "phuc", age: 17, bandiem: [2, 3, 2] };
console.log("thong tin cua phuc", phuc);
const numberArray: number[] = [1, 1, 23, 2, 5, 6, 7, 7];

const bienCon = numberArray[1];

console.log("phantu", bienCon + numberArray[4]);

type Info = {
  name: string;
  age: number;
  address: string;
  linkFb?: string;
  PhoneNumber: string;
};
const infoThoai: Info = {
  name: "thoai",
  age: 34,
  address: "lientri",
  PhoneNumber: "1635263",
};

const danhSachHS: Array<Info> = [
 infoThoai,
  { name: "phuc", age: 17, address: "lientri", PhoneNumber: "1635263" },
  { name: "nhi", age: 24, address: "lientri", PhoneNumber: "1635263" },
  { name: "nhi2", age: 24, address: "lientri", PhoneNumber: "1635263" },
  { name: "nhi7", age: 24, address: "lientri", PhoneNumber: "1635263" },
  { name: "nhi8a", age: 24, address: "lientri", PhoneNumber: "1635263" },
  { name: "nhi88", age: 24, address: "lientri", PhoneNumber: "1635263" },
];

const nhi7:Info = danhSachHS[4]

console.log("thong tin cua nhi7 :", nhi7)






type Teacher = {
  name : string;
  address: string,
  class: string,
  age: number,
  gender: boolean,
  information: {
      yearsOfExperience: number,
      graduatedFrom?: string,
      isMarried: boolean,
      contactNumber: string,
      linkSocial: string,
  }, 
}

const John_Doe : Teacher = {
  name: "John Doe",
  address: "123 Main Street, City",
  class: "Science",
  age: 36,
  gender: true,
  information: {
    yearsOfExperience: 10,
    isMarried: false,
    contactNumber: "1234567890",
    linkSocial: "https://www.example.com/john-doe",
  },
}
const John_du : Teacher = {
  name: "John du",
  address: "789 Oak Road, Village",
  class: "English",
  age: 37,
  gender: true,
  information: {
    yearsOfExperience: 14,
    isMarried: false,
    contactNumber: "1234567790",
    linkSocial: "https://www.example.com/john-du",
  },
}
const John_Doet : Teacher = {
  name: "John Doet",
  address: "456 Park Avenue, Town",
  class: "English",
  age: 35,
  gender: true,
  information: {
    yearsOfExperience: 13,
    isMarried: false,
    contactNumber: "1234567870",
    linkSocial: "https://www.example.com/john-doet",
  },
}
const John_Doeh : Teacher = {
  name: "John Doeh",
  address: "555 Elm Avenue, Suburb",
  class: "music",
  age: 34,
  gender: true,
  information: {
    yearsOfExperience: 14,
    isMarried: false,
    contactNumber: "1234567990",
    linkSocial: "https://www.example.com/john-doeh",
  },
}
const John_Doej : Teacher = {
  name: "John Doej",
  address: "222 Pine Street, Countryside",
  class:  "Science",
  age: 38,
  gender: true,
  information: {
    yearsOfExperience: 19,
    isMarried: false,
    contactNumber: "1234568790",
    linkSocial: "https://www.example.com/john-doej",
  },
}
const John_Doeu : Teacher = {
  name: "John Doeu",
  address: "123 Main Street, City",
  class:"Biology",
  age: 30,
  gender: true,
  information: {
    yearsOfExperience: 17,
    isMarried: false,
    contactNumber: "1234657890",
    linkSocial: "https://www.example.com/john-doeu",
  },
}
const John_Doek : Teacher = {
  name: "John Doek",
  address: "123 Main Street, City",
  class: "English",
  age: 35,
  gender: true,
  information: {
    yearsOfExperience: 13,
    isMarried: true,
    contactNumber: "1238567890",
    linkSocial: "https://www.example.com/john-doek",
  },
}
const John_Doel : Teacher = {
  name: "John Doel",
  address: "123 Main Street, City",
  class: "chess",
  age: 39,
  gender: true,
  information: {
    yearsOfExperience: 12,
    isMarried: false,
    contactNumber: "9874567890",
    linkSocial: "https://www.example.com/john-doel",
  },
}
const John_Doey : Teacher = {
  name: "John Doey",
  address: "123 Main Street, City",
  class: "Physics",
  age: 30,
  gender: true,
  information: {
    yearsOfExperience: 12,
    isMarried: true,
    contactNumber: "2345583245",
    linkSocial: "https://www.example.com/john-doey",
  },
}
const John_Doei : Teacher = {
  name: "John Doei",
  address: "123 Main Street, City",
  class:"Physics",
  age: 35,
  gender: true,
  information: {
    yearsOfExperience: 10,
    isMarried: true,
    contactNumber: "2416414464",
    linkSocial: "https://www.example.com/john-doei",
  },
}
console.log ( 
  "thong tin giao vien :", John_Doei 
)