// *arrow function

// const saySomething = (msg) => {
//     console.log(msg);
// }


        // *keyword: this
// const person = {
//     name: "mindX",
//     age: 20,
//     introduce: function () {
         // console.log("I'm a " + this.name + " I'm " + this.age + " years old ");
                 // or
//         console.log(`I'm a ${this.name}, I'm ${this.age} years old`);
//     }
// }

// person.introduce()


            // *module Imp/ Exp
// const n1 = 1;
// const n2 = 2;

// import {sum,minus,multiply,divide} from './math.js'

// sum(n1,n2)
// minus(n1,n2)
// multiply(n1,n2)
// divide(n1,n2)


            // *SPREAD
// const nums = [1,2,3]
// const newNums = [...nums,4,5,6,7]       // Array

// console.log(newNums);

                                            // Object
// const person = {
//     name : 'mindx',
//     age : 20
// }
// const newPerson = {...person}
// console.log("newPerson", newPerson);


            // *Rest Operator

// function sum(...nums) {
//     console.log('nums',nums);
    
// }
// sum(1,2)
// sum(1,2,3)
// sum(1,2,3,4,5)       



            // *Destructuring
                // Object
// const person = {
//     name: 'mindX',
//     age : 20
// }

// const {name , age} = person
// console.log("age", age);
// console.log("name", name);

// const person2 = {
//     name: 'mindXx',
//     age : 35
// }
// const {name: namePerson2 , age: agePerson2} = person2
// console.log("age", agePerson2);
// console.log("name", namePerson2);


                // Array
// const nums = [1,2,3]
// const [n3,n2,n1] = nums
// console.log("n1",n1);
// console.log("n2",n2);
// console.log("n3",n3);



                // *Array method
            
                const nums = [1,2,3,4,5]

                // forEach
    // nums.forEach( (item, index) => {
    //     console.log(item, index);
    // })
    
                //filter
    // const result = nums.filter( (item) => item >= 2)
    // console.log("result", result);
    
                //map
    // const result = nums.map((item) => item *2)
    // console.log("result", result);
    
                //find
    // const result = nums.find((item) => item ===4)
    // console.log("result", result);
    
                //reduce
    const sum = nums.reduce((result, item) => {
        console.log("result", result);
        console.log("item", item);
        return result + item
    }, 0)
    
    console.log('sum',sum);