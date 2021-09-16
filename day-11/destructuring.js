let person = {
    name: 'Muhammad',
    email: 'muhammad.alamin1@gmail.com',
    address:{
        city:'Barishal',
        country: 'Bangladesh'
    }

}

const {name, email, address: {city, country}} = person
console.log(name, email, country)