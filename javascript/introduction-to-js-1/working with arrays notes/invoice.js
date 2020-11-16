
let products = ['Underpants:6.99',
                'Socks:5.99',
                'T-shirt:14.99',
                'Trousers:31.99',
                'Shoes:23.99'];

for (let i = 0; i < products.length; i++) { // number 2
  // number 3
let subArray = products[i].split(':');
let name = subArray[0];
let price = Number(subArray[1]);

  // number 4
  total += price;
  // number 5
  let itemText = `${name} -- $ ${price}`;
  
  const listItem = document.createElement('li');
  listItem.textContent = itemText;
  list.appendChild(listItem);
}

totalBox.textContent = 'Total: $' + total.toFixed(2);

// this was a bit hard for me to figure out without looking at the answer because I don't understand the i convention so I'd like more practice
