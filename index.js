
const express = require("express");

const rout = express();

rout.get("/home",function(req,res){
    res.send("HELLO")
})

rout.get("/books",function(req,res){
    res.send([{Name:"Think Like a Monk",
    Author:'Jay Shetty ',
    price:320,
    img:"https://images-na.ssl-images-amazon.com/images/I/41gVhoPaE5L._SX323_BO1,204,203,200_.jpg"
},

{Name:"Atomic Habits",
Author:'James Clear',
price:540,
img:"https://images-na.ssl-images-amazon.com/images/I/51S7KOWir7L._SX526_BO1,204,203,200_.jpg"},

{Name:"The Psychology of Money",
    Author:'Morgan Housel  ',
    price:329,
    img:"https://images-na.ssl-images-amazon.com/images/I/41r6F2LRf8L._SX323_BO1,204,203,200_.jpg"},

    {Name:"The Power of Your Subconscious Mind",
    Author:' Joseph Murphy ',
    price:125,
    img:"https://images-na.ssl-images-amazon.com/images/I/51QnuLIY2uL._SX322_BO1,204,203,200_.jpg"},

    {Name:"How to Talk to Anyone",
    Author:'Leil Lowndes',
    price:227,
    img:"https://images-na.ssl-images-amazon.com/images/I/41VC-6wmHsL._SX331_BO1,204,203,200_.jpg"}
]);
    

})

rout.listen(3000, () =>{
    console.log("listening on port 6000");
})
