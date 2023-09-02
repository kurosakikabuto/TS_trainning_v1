
//kiểu bất kỳ
const bienkieuany: any = 1111 + "ssss"
//kiểu chuỗi
const bienkieuString: string = "5"
//kiểu số
const bienkieuNumber: number = 5555

//kiểu boolean [đúng hoặc sai] chỉ nhận vào và trả ra kết quả dúng hay sai
const bienPhuc: boolean = true

//kieu mảng kiểu danh sách 
const mang: number[] = [1, 2, 4, 6];
const mang2: string[] = ["2", "3", "thoai"];
const mang3: boolean[] = [1 > 2, false];

//viet mot mang co ca chữ lẫn số lẫn boolean
const bienkiueua: any[] = [1, 2, "2", true]

const bienx = [1, 2, "2", true]

const bienPh: any[] = [1, 2, "2", true]


//kiểu object : kiểu đối tượng
type ThongTin = {
    ten: string;
    tuoi: number;
    dacovo?: boolean;
    cty: string
}
const thongtincuaATHoi : ThongTin = { ten: "ĐInh THiên thoại", tuoi: 2, cty: "TMa", dacovo: false }

console.log( "kiểm tra anh thoại đã cod vợ chưa",thongtincuaATHoi.dacovo)
// viết cho anh một type chứa thông tin là Name: string , age: number , và một danh sách điểm số dạng number[]
type ThongTin1 = {name: string ; age:number; bandiem:number[]}
const phuc : ThongTin1 = { name: "phuc" ,age :17,bandiem:[2,3,2] }
console.log("thong tin cua phuc",phuc)
const bienkiuString : string = "5"
const bienkieuso : number = 1
type Student = {
    name : string;
    id : string | number ;
    age : number;
    adress? : string;
    gender : "Man" | "Woman" 
}

const student1 : Student = {
    name: "p",
    id: 34,
    age: 18,
    gender: "Man",
    adress : "THPT",
}
const student2 : Student = {
    name: "p",
    id: 34,
    age: 18,
    gender: "Man",
    adress : "THPT",
}
const classA : Array<Student> = [
    student1 ,  student2,  {
        name: "p",
        id: 34,
        age: 18,
        gender: "Man",
        adress : "THPT",
    }
]


    
    


