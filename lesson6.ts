// phương thức filter() tạo một mảng mới
// thỏa mãn điều kiện quy định

const mangA: number[] = [5, 11, 7, 8, 7, 99, 5, 5, 1, 9];

// Type script
const mangB : string[] = ["thoai", "ssss", "sdsss", "sss", "sss", "Phúc"]

const mangMoi = mangB.filter((item: string) => item.length >= 3 );


console.log("mangMOi: " , mangMoi);