
function kiemTraDiem(diem: number){
  if (diem >= 0 && diem <= 10) {
     if (diem < 5) {
      return "yeu";
    } else if (diem <= 6.5 && diem >= 5) {
      return "Trung Binh";
    } else if (diem > 6.5 && diem < 8) {
      return "Kha";
    } else {
      return "Gioi";
    }
  } else {
    return "So da nhap khong thoa man dieu kien";
  }
}
console.log("ket qua kiem tra diem :", kiemTraDiem(-11));