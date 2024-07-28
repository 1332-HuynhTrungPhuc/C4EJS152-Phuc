1. arrow function: thêm dấu  => (cách viết khác của function)
                const x = (Y) => {
                    console.log(Y)
                }
        - không sử dụng được Hoisting
        - không dùng được keyword : this

2. Template literal (chỉ sử dụng cho String): ` ${} , ${} `

3. Module Export/ Import: thêm type="module" vào script
    - import {} from './ tên file.js'
    - export {}

    3.1 Import/ Export theo tên thì có {}

    3.2 Import/ Export theo Default thì không có {}

    - import noNeedToKeyCorrectName from './ '

4. Spread: tạo thêm 1 mảng mới HOẶC nối mảng, dùng được trên Array và Object, code  ... + tên mảng

5. Rest Operator: tạo ra một function với vô hạn tham số nhập vào.
6. Destructuring: 
    6.1 Array: code const [ , , ] = 
    6.2 Object: code const { , , } =