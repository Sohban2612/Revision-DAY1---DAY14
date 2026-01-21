const orders = [
  {
    orderId: 'A1',
    customer: { name: 'John', location: { city: 'NYC', country: 'USA' } },
    items: [
      { product: 'Laptop', quantity: 1, price: 999 },
      { product: 'Mouse', quantity: 2, price: 25 }
    ]
  },
  {
    orderId: 'A2',
    customer: { name: 'Jane', location: { city: 'LA', country: 'USA' } },
    items: [
      { product: 'Keyboard', quantity: 1, price: 75 }
    ]
  }
];

// [
//   { orderId: 'A1', customerName: 'John', city: 'NYC', totalAmount: 1049 },
//   { orderId: 'A2', customerName: 'Jane', city: 'LA', totalAmount: 75 }
// ]


let res =[]
for(let i=0;i<orders.length;i++){
    let odr = orders[i]
    let total=0
    for(let j=0;j<odr.items.length;j++){
        total+=odr.items[j].price*odr.items[j].quantity

    }

    res.push({"orderId":odr.orderId,"customerName":odr.customer.name,"city":odr.customer.location.city,"totalAmount":total})
}
console.log(res)