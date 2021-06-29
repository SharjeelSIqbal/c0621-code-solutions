var item = { };
var person = 'JS Masher';
var orderHistory = [
  item.orderOne = {
    orders: 1,
    name: 'JavaScript for impatient programmers',
    image: '',
    type: 'Book',
    isbn: null,
    author: 'Rauschmayer, Dr. Axel',
    price: 31.55,
    total: 34.00,
    ship: person,
    orderPlaced: 'August 4, 2020',
    delivered: 'August 8, 2020',
    returnWindow: 'Sep 7, 2020',
    orderNumber: '# 114-3941689-8772232',
    writeProduct: true,
    buyAgain: true,
    viewItem: true,
    handed: false,
    support: false
  },
  item.orderTwo = {
    orders: 1,
    name: 'The Timeless Way of Building',
    image: '',
    type: 'Books',
    isbn: null,
    author: 'Alexander, Christopher',
    price: 41.33,
    total: 44.53,
    ship: 'JS Masher',
    orderPlaced: 'July 19,2020',
    delivered: 'July 20, 2020',
    orderNumber: '# 113-9984268-1270257',
    writeProduct: true,
    buyAgain: true,
    viewItem: true,
    handed: true,
    support: false

  },
  item.orderThree = {
    orders: 1,
    name: 'Gamecube Controller Adapter',
    image: '',
    type: 'Electronics',
    price: 15.98,
    total: 17.22,
    ship: person,
    orderPlaced: 'July 4, 2020',
    delivered: 'July 7, 2020',
    orderNumber: '# 114-2875557-9059409',
    writeProduct: true,
    buyAgain: true,
    viewItem: true,
    handed: true,
    support: false
  },
  item.orderFour = {
    controller: {
      orders: 2,
      name: 'Gamecube Controller',
      image: '',
      type: 'Electronic',
      price: 94.95,
      total: 138.93,
      ship: person,
      orderPlaced: 'July 3, 2020',
      delivered: 'July 5, 2020',
      orderNumber: '# 113-2883177-26428248',
      writeProduct: true,
      buyAgain: true,
      viewItem: true,
      handed: true,
      support: true
    },
    sql: {
      orders: 2,
      name: 'The Art of SQL',
      author: 'Faroulut, Stephane',
      isbn: null,
      image: '',
      type: 'Books',
      price: 33.99,
      total: 138.93,
      ship: person,
      orderPlaced: 'July 3, 2020',
      delivered: 'July 5, 2020',
      orderNumber: '# 113-2883177-26428248',
      writeProduct: true,
      buyAgain: true,
      viewItem: true,
      handed: true,
      support: true
    }
  }
];

console.log(item);
console.log(orderHistory);
