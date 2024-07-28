document.querySelector("#btnThemMon").addEventListener("click", function () {
    const foodID = document.querySelector("#foodID").value;
    document.querySelector("#spMa").innerHTML = foodID
})

document.querySelector("#btnThemMon").addEventListener("click", function () {
    const foodName = document.querySelector("#tenMon").value;
    document.querySelector("#spTenMon").innerHTML = foodName
})

document.querySelector("#btnThemMon").addEventListener("click", function () {
    const foodType = document.querySelector("#loai").value;
    document.querySelector("#spLoaiMon").innerHTML = foodType
})

document.querySelector("#btnThemMon").addEventListener("click", function () {
    const foodPrice = document.querySelector("#giaMon").value;
    document.querySelector("#spGia").innerHTML = foodPrice
})

document.querySelector("#btnThemMon").addEventListener("click", function () {
    const promotion = document.querySelector("#khuyenMai").value;
    document.querySelector("#spKM").innerHTML = promotion
})
document.querySelector("#btnThemMon").addEventListener("click", function () {
    const foodStatus = document.querySelector("#tinhTrang").value;
    document.querySelector("#spTT").innerHTML = foodStatus
})
document.querySelector("#btnThemMon").addEventListener("click", function () {
    const describe = document.querySelector("#moTa").value;
    document.querySelector("#pMoTa").innerHTML = describe
})


document.querySelector("#btnThemMon").addEventListener("click", function () {
    const foodDiscount = Number(document.querySelector("#giaMon").value) * (Number(document.querySelector("#khuyenMai").value) / 100);
    document.querySelector("#spGiaKM").innerHTML = foodDiscount
})
