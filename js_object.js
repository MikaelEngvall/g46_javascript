// Objects are used to represent collections of key-value paires
let person = {
    name: "John Doe",
    age: 30,
    isStudent: false,
    address: {
        city: "New York",
        country: "USA"
    }
};

console.log(person.name);
console.log(person.address.city);

person.age = 31;
person["age"] = 33;
person.gender = "M";
delete person.address;



const adList = [
    {title: 'Ad 1', description: 'this is the first ad.'},
    {title: 'Ad 2', description: 'this is the second ad.'},
    {title: 'Ad 3', description: 'this is the third ad.'},
];