//bai1
// const soNgayLam = prompt('nhap so ngay lam: ');
// const luongMotNgay = prompt('nhap luong 1 ngay: ');
// const tongLuong = luongMotNgay * soNgayLam;
// console.log("Luong la:", tongLuong )

// const soNgayLam = prompt("nhap so ngay lam: ");
// const luongMotNgay = prompt("nhap luong 1 ngay: ");
// function salary(number1, number2) {
//   return number1 * number2;
// }
// console.log(salary(soNgayLam, luongMotNgay));

//bai2
// const nhapSoThu1 = Number(prompt('nhap so thu 1: '));
// const nhapSoThu2 = Number(prompt('nhap so thu 2: '));
// const nhapSoThu3 = Number(prompt('nhap so thu 3: '));
// const nhapSoThu4 = Number(prompt('nhap so thu 4: '));
// const nhapSoThu5 = Number(prompt('nhap so thu 5: '));
// const trungBinh = ((nhapSoThu1 + nhapSoThu2 + nhapSoThu3 +nhapSoThu4 + nhapSoThu5)/5);
// console.log("Trung binh la: ", trungBinh);
// //if
// if(trungBinh < 4){
//     console.log('hoc sinh yeu');
// }else if(trungBinh >= 5 && trungBinh < 6){
//     console.log('hoc sinh trung binh');
// }
// else if(trungBinh >= 6 && trungBinh <= 8){
//     console.log('hoc sinh kha');
// }
// else if(trungBinh >= 8 && trungBinh <= 10){
//     console.log('hoc sinh gioi');
// }
//for

// const nhapSoThu1 = Number(prompt('nhap so thu 1: '));
// const nhapSoThu2 = Number(prompt('nhap so thu 2: '));
// const nhapSoThu3 = Number(prompt('nhap so thu 3: '));
// const nhapSoThu4 = Number(prompt('nhap so thu 4: '));
// const nhapSoThu5 = Number(prompt('nhap so thu 5: '));

    let arr = []
  
function average(arr) {
    let total = 0;
    for(let i = 0; i < arr.length; i++){
        total += arr[i]
    }
  return total;
}
function xepHocLuc() {
  if (average < 4) {
    console.log("hoc sinh yeu");
  } else if (average >= 5 && average < 6) {
    console.log("hoc sinh trung binh");
  } else if (average >= 6 && average <= 8) {
    console.log("hoc sinh kha");
  } else if (average >= 8 && average <= 10) {
    console.log("hoc sinh gioi");
  }
}
function input(arr){
    for(let i=0; i < 5; i++){
        input[i] = prompt("nhap so");
    }
}
input(arr);
 let total2 = average(arr);
xepHocLuc(average);


//bai3
// const nhapUSD = Number(prompt('nhap USD: '))
// const VND = nhapUSD * 23500;
// console.log("VND: ",VND);

//bai4
// const nhapChieuDai = Number(prompt('nhap chieu dai: '));
// const nhapChieuRong = Number(prompt('nhap chieu dai: '));
// const chuVi = (nhapChieuDai + nhapChieuRong) * 2;
// const dienTich = nhapChieuDai * nhapChieuRong;
// console.log("Chu vi la: ", chuVi);
// console.log("Dien tich la: ", dienTich);
