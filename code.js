 
const items = [
    {
        id:1,
        image:'https://i.postimg.cc/cHTdmbhM/apartment1.png',
        title: "Apartment",
        location: "Cape Town",
        price: "R1 000 000 000",
        specifications:{
            bedroooms: "3 bedroom(s)",
            bathrooms: "2 bathroom(s)",
            garage: "2 garage(s)",
            size:"2000 Sq ft"
        },
    },
    {
        id:2,
        image:'https://i.postimg.cc/vZQFPz10/houses.jpg',
        title: "Free Standing",
        location: "Durban",
        price: "R750 000",
        specifications:{
            bedroooms: "2 bedroom(s)",
            bathrooms: "1 bathroom(s)",
            garage: "3 garage(s)",
            size:"1200 Sq ft"
        },
    },
    {
        id:3,
        image:'https://i.postimg.cc/25s0tkcC/semi-detached-1.jpg',
        title: "Semi-Detatched",
        location: "Cape Town",
        price: "$876 000",
        specifications:{
            bedroooms: "3 bedroom(s)",
            bathrooms: "1 bathroom(s)",
            garage: "2 garage(s)",
            size:"1800 Sq ft"
        },
    },
    {
        id:4,
        image:'https://i.postimg.cc/1t6yxzyB/freestanding-1.jpg',
        title: "Free Standing",
        location: "Cape Town",
        price: "R800 000",
        specifications:{
            bedroooms: "5 bedroom(s)",
            bathrooms: "3 bathroom(s)",
            garage: "4 garage(s)",
            size:"3000 Sq ft"
        },
    },
    {
        id:5,
        image:'https://i.postimg.cc/kgfN0xsJ/apartment2.jpg',
        title: "Apartment",
        location: "Cape Town",
        price: "R450 000",
        specifications:{
            bedroooms: "1 bedroom(s)",
            bathrooms: "1 bathroom(s)",
            garage: "1 garage(s)",
            size:"1600 Sq ft"
        },
    },
    {
        id:6,
        image:'https://i.postimg.cc/L5kdc0dh/image1.jpg',
        title: "Semi-Detatched",
        location: "Gqheberha",
        price: "$876 000",
        specifications:{
            bedroooms: "3 bedroom(s)",
            bathrooms: "2 bathroom(s)",
            garage: "2 garage(s)",
            size:"2000 Sq ft"
        },
    },
    {
        id:7,
        image:'https://i.postimg.cc/L5kdc0dh/image1.jpg',
        title: "Free Standing",
        location: "Cape Town",
        price: "$876 000",
        specifications:{
            bedroooms: "3 bedroom(s)",
            bathrooms: "2 bathroom(s)",
            garage: "2 garage(s)",
            size:"2000 Sq ft"
        },
    },
    {
        id:8,
        image:'https://i.postimg.cc/L5kdc0dh/image1.jpg',
        title: "Apartment",
        location: "Cape Town",
        price: "$876 000",
        specifications:{
            bedroooms: "3 bedroom(s)",
            bathrooms: "2 bathroom(s)",
            garage: "2 garage(s)",
            size:"2000 Sq ft"
        },
    },
    {
        id:9,
        image:'https://i.postimg.cc/L5kdc0dh/image1.jpg',
        title: "Semi-Detatched",
        location: "Cape Town",
        price: "$876 000",
        specifications:{
            bedroooms: "3 bedroom(s)",
            bathrooms: "2 bathroom(s)",
            garage: "2 garage(s)",
            size:"2000 Sq ft"
        },
    },
    {
        id:10,
        image:'https://i.postimg.cc/L5kdc0dh/image1.jpg',
        title: "Apartment",
        location: "Cape Town",
        price: "$876 000",
        specifications:{
            bedroooms: "3 bedroom(s)",
            bathrooms: "2 bathroom(s)",
            garage: "2 garage(s)",
            size:"2000 Sq ft"
        },
    },
];

JSON.parse(localStorage.getItem("items")) ? JSON.parse(localStorage.getItem("items"));

console.log(items);
localStorage.setItem('items', JSON.stringify('value'));
document.getElementById("items");

// document.getElementById("items").innerHTML


//JSON.parse(localStorage.getItem("items"))?JSON.parse(localStorage.getItem("items"));


//localStorage.setItem(JSON.stringify(items));
