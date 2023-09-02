
type Class = "11A1" | "11A2" | "11A3" | "11A4" | "11A5";

const tenLop: Array<Class> = ["11A1", "11A2", "11A3", "11A4", "11A5"];

type infoHS = {
  name: string;
  id: number;
  className: Class;
  adress: string;
  xepLoai: "Gioi" | "Kha" | "TrungBinh";
};
const hs1: infoHS = {
  id: 0,
  name: "Phong",
  className: "11A1",
  adress: "Lien Tri ",
  xepLoai: "Gioi",
};

const hs2: infoHS = {
  id: 1,
  name: "Nhi",
  className: "11A2",
  adress: "Lien Tri ",
  xepLoai: "Gioi",
};

const hs3: infoHS = {
  id: 3,
  name: "Hang",
  className: tenLop[2],
  adress: "Chanh Man ",
  xepLoai: "Kha",
};

const hs4: infoHS = {
  id: 4,
  name: "kim",
  className: "11A4",
  adress: "Trung binh",
  xepLoai: "TrungBinh",
};

const hs5: infoHS = {
  id: 5,
  name: "Thuy",
  className: "11A5",
  adress: "Chanh nhon",
  xepLoai: "Gioi",
};
const hs6: infoHS = {
  name: "phuc",
  id: 6,
  className: tenLop[4],
  adress: "Trung binh",
  xepLoai: "Gioi",
};
type infoGV = {
  name: string;
  age: number;
  address: string;
  className: Class;
  classList: infoHS[] | Array<infoHS> | string 
};
const gv1: infoGV = {
  name: "Giáo viên A",
  age: 35,
  address: "11 Nguyễn Văn Cừ , Tp Quy nhơn",
  className: "11A3",
  classList: [hs3],
};
const gv2: infoGV = {
  name: "Giáo viên B",
  age: 35,
  address: "11 Nguyễn Văn Cừ , Tp Quy nhơn",
  className: "11A2",
  classList: "haklkk",
};
const gv3: infoGV = {
  name: "Giáo viên C",
  age: 35,
  address: "11 Nguyễn Văn Cừ , Tp Quy nhơn",
  className: "11A5",
  classList: [hs5, hs6],
};
const danhSachGiaoVien: Array<infoGV> = [gv1, gv2, gv3];
console.log("danh sách giáo vien ", danhSachGiaoVien);
