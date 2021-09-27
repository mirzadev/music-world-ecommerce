const { Product } = require('../models');

// List of products   'id', 'picture','product_name', 'price', 'stock', 'category_id', 'add_to_cart_option']
const productData = [
  {
    sku: 100101,
    picture: '/images/piano/piano-large.jpg',
    product_name: "Piano Large",
    price: 1514.99,
    stock: 10,
    category_id: 1,
  },
  {
    sku: 100111,
    picture: '/images/piano/piano-electric-autotune.JPG',
    product_name: "Piano Electric Autotune",
    price: 3854.99,
    stock: 06,
    category_id: 1,
  },
  {
    sku: 100121,
    picture: '/images/piano/piano-beginner.JPG',
    product_name: "Piano Beginner",
    price: 877.99,
    stock: 02,
    category_id: 1,
  },
  {
    sku: 200101,
    picture: '/images/guitar/guitar-blue.JPG',
    product_name: "Guitar Blue",
    price: 851.99,
    stock: 04,
    category_id: 2,
  },
  {
    sku: 200111,
    picture: '/images/guitar/guitar-electric-italian.JPG',
    product_name: "Guitar Electric Italian",
    price: 1299.99,
    stock: 02,
    category_id: 2,
  },
  {
    sku: 200121,
    picture: '/images/guitar/guitar-regular.JPG',
    product_name: "Guitar Regular",
    price: 354.99,
    stock: 07,
    category_id: 2,
  },
  {
    sku: 300101,
    picture: '/images/live-sound/yahama-40-channels.JPG',
    product_name: "Yamaha 4 Channels console",
    price: 1699.99,
    stock: 03,
    category_id: 3,
  },
  {
    sku: 300111,
    picture: '/images/live-sound/jbl-mixer-with-speakers.JPG',
    product_name: "JBL Mixer with Speakers",
    price: 1267.99,
    stock: 04,
    category_id: 3,
  },
  {
    sku: 300121,
    picture: '/images/live-sound/yamaha-mg16xu.JPG',
    product_name: "Yamaha MG16XU 16-Channel Mixer",
    price: 549.99,
    stock: 04,
    category_id: 3,
  },
  {
    sku: 400101,
    picture: '/images/drum-percussion/full-drum-set.JPG',
    product_name: "Full Drum Set",
    price: 3029.99,
    stock: 01,
    category_id: 4,
  },
  {
    sku: 400111,
    picture: '/images/drum-percussion/percussion-6set.JPG',
    product_name: "Percussion 6 Set",
    price: 599.99,
    stock: 04,
    category_id: 4,
  },
  {
    sku: 400121,
    picture: '/images/drum-percussion/tubano.JPG',
    product_name: "Tubano",
    price: 229.99,
    stock: 04,
    category_id: 4,
  },
  {
    sku: 500101,
    picture: '/images/keyboard/casio-keyboard-automatic.JPG',
    product_name: "Casio Keyboard Automatic",
    price: 673.99,
    stock: 06,
    category_id: 5,
  },
  {    
    sku: 500111,
    picture: '/images/keyboard/electric-keyboard-general.JPG',
    product_name: "Electric Keyboard General",
    price: 205.29,
    stock: 05,
    category_id: 5,
  },
  {
    sku: 500121,
    picture: '/images/keyboard/yamaha-psp-autotune.JPG',
    product_name: "Yahamaha PSP Autotune",
    price: 539.99,
    stock: 03,
    category_id: 5,
  },
  {
    sku: 600101,
    picture: '/images/music-lesson/music-lesson-guitar.JPG',
    product_name: "Music Lesson Guitar",
    price: 899.99,
    stock: 02,
    category_id: 6,
  },
  {
    sku: 600111,
    picture: '/images/music-lesson/music-lesson-trumpet.JPG',
    product_name: "Music Lesson Trumpet",
    price: 799.99,
    stock: 03,
    category_id: 6,
  },
  {
    sku: 600121,
    picture: '/images/music-lesson/music-lesson-piano.JPG',
    product_name: "Music Lesson Piano",
    price: 999.99,
    stock: 06,
    category_id: 6,
  },
];


const seedProducts = () => Product.bulkCreate(productData);

module.exports = productData;