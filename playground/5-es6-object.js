// Object property shorthand
const name = 'Andrew'
const userAge = 27

const user = {
    name, // same as "name: name"
    age: userAge,
    location: 'Philadelphia'
}

console.log(user)

// Object destructuring

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

// const label = product.label
// const stock = product.stock

const {label: productLabel, stock, rating = 5} = product 
// rating doesn't exist! (undefined)

// label is renamed as productLabel
console.log(productLabel)
console.log(stock)
console.log(rating)

const transaction = (type, {label, stock}) => {
    console.log(type, label, stock)
}

transaction('order', product)