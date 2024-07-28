1. Object: ký hiệu {}, các giá trị cách nhau bới dấu ,
    const person = {
        name: "mindX",
        age: 12,
        birthday: "15/11/1991",
        country: "Vietnam"
    }

    1.1 Lấy giá trị age/name
        person.age / person.name

    1.2 Object lồng nhau
        person.age.yearofbirth

    1.3 Xóa giá trị age
        delete person.age

    1.4 Đổi giá trị age
        person.age = 40

    1.5 Gộp nhiều Object thành 1
        const x ={xx}
        const y = {yy}
        const z = Object.assign(x,y)
        console.log(z)

2. Array (lưu trữ nhiều thông tin), ký hiệu []
    const students = ["mindX","tom","adam"]
    const information = ['mindX', 23,'fullstack dev',false]

console.log=('students',student)
    0: 'mindX'
    1: 'tom'
    2: 'adam'

    2.1 số 0 1 2 gọi là index, index xác định phần từ nẳm ở đâu trong mảng đó, để thay đổi giá trị / bắt đầu từ 0 và tăng dần 1 giá trị

    2.2 nếu muốn lấy 'mindX' ra thì code: students [0], tương tự cho tom và adam

    2.3 thay đổi giá trị 'mindX' thì code: students [0] = "mindX2"

    2.4 có thể lồng array bên trong array
        const xor = [
            [1,2,3]
            [4,5,6]
            [7,8,9]
        ];
            xor [0][0] --> lấy giá trị '1' ra

3. Lặp qua mảng: 
    const nums=[1,3,4,2,5];  --> có 6 phần tử
    const nums2=[1,3,2]; --> có 3 phần tử
    for(let i = 0; i <= nums.length -1; i++){
        console.log(num[i]);
    }

            ---> kết quả 1 3 4 2 5



*function