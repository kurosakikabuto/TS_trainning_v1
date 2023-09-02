// Function



function tinhTong(dauvao1: number, dauvao2?: number) {

  if (dauvao2 !== undefined) {
    console.log("Kiem tra co nhap vào DV2 k ", dauvao2 !== undefined);
    return dauvao1 + dauvao2;
  } else if (dauvao1 > 3) {
    //neu dauvao1 > 3
    console.log("kiem tra dauvao1 > 3:", dauvao1 > 3);
    if (dauvao1 < 100) {
      console.log("Kiem tra DV1 co nho hon 100", dauvao1 < 100);
      return dauvao1;
    } else {
      return dauvao1 + 100;
    }
  } else {
    console.log(" ket qua cuoi dauvao1:", dauvao1);
    console.log(" ket qua cuoi dauvao2:", dauvao2);
    return dauvao1 + 3;
  }
}

console.log(" ket qua thuc hien tinhTong:", tinhTong(2));

function myFunction(x: number, a: boolean, g?: number) {
  if (a) {
    if (g !== undefined) {
      return g * x;
    } else {
      return x * 5;
    }
  } else {
    console.log("a da false :", a);
    return 190
  }
}

console.log("ket qua thuc hien:",myFunction(5,true));

