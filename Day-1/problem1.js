let  products = [
  ['Electronics', 'Laptop', 999],
  ['Clothing', 'Shirt', 29],
  ['Electronics', 'Mouse', 25],
  ['Clothing', 'Pants', 49],
  ['Electronics', 'Keyboard', 75],
  ['Clothing', 'Jacket', 89]
];


// {
//   Electronics: [
//     { name: 'Mouse', price: 25 },
//     { name: 'Keyboard', price: 75 },
//     { name: 'Laptop', price: 999 }
//   ],
//   Clothing: [
//     { name: 'Shirt', price: 29 },
//     { name: 'Pants', price: 49 },
//     { name: 'Jacket', price: 89 }
//   ]
// }


let obj ={}
for(let i=0;i<products.length;i++){
    let category= products[i][0]
    let name =products[i][1]
    let price=products[i][2]
    if(!obj[category]){
        obj[category]=[]
    }


    obj[category].push({"name":name,"price":price})
}
console.log(obj)