var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping', {useNewUrlParser: true});


var products = [
    new Product({
        imagePath: 'https://rukminim1.flixcart.com/image/612/612/j63x7rk0/shoe/x/b/e/riya-51-cgryrani-39-asian-grey-original-imaewney2shdcz2q.jpeg?q=70',
        title: 'Sport Shoes For Women',
        description: 'Comfortable running shoes for women!!!!',
        price: 12
    }),
    new Product({
        imagePath: 'https://ae01.alicdn.com/kf/HTB15T2WllDH8KJjSszcq6zDTFXaa/Platform-shoes-woman-2018-hot-summer-mesh-breathable-women-casual-shoes.jpg',
        title: 'Casual Shoes For Women',
        description: 'Comfortable and stylish shoes for women!!!!',
        price: 10
    }),
    new Product({
        imagePath: 'https://www.dhresource.com/albu_609977947_00-1.0x0/2014-sexy-stiletto-heels-gladiator-sandals.jpg',
        title: 'Stilettoes For Women',
        description: 'Stylish and classy stiletteos for women!!!!',
        price: 20
    }),
    new Product({
        imagePath: 'https://sc01.alicdn.com/kf/HTB1FZNyIpXXXXb2XFXX760XFXXX6/SAA3356-Latest-2015-fashion-women-sandals-shoes.png',
        title: 'Flip-flop sandals For Women',
        description: 'Comfortable and cool flip-flop sandals for women this summer!!!!',
        price: 8
    }),
    new Product({
        imagePath: 'https://cdn.shopify.com/s/files/1/1358/0901/products/v-J065_black__1783941415_large.jpg?v=1527522340',
        title: 'Wedges For Women',
        description: 'Super-stylish wedges for women!!!!',
        price: 15
    })
];

var done = 0;
for (var i = 0 ; i < products.length; i++)
{
    products[i].save(function(err, result){
        done++;
        if(done === products.length){
            exit();
        }   
    });
}

function exit(){
    mongoose.disconnect();
}
