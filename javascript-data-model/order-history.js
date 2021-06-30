var orderHistory = [
  {
    orders: 1,
    orderNumber: '# 114-3941689-8772232',
    recipient: 'JS Masher',
    total: 34.00,
    orderPlaced: 'August 4, 2020',
    delivered: 'August 8, 2020',
    returnWindow: 'Sep 7, 2020',
    items: [{
      name: 'JavaScript for impatient programmers',
      image: '',
      type: 'Book',
      isbn: null,
      author: 'Rauschmayer, Dr. Axel',
      price: 31.55
    }]

  },
  {
    orders: 1,
    total: 44.53,
    ship: 'JS Masher',
    orderPlaced: 'July 19,2020',
    delivered: 'July 20, 2020',
    orderNumber: '# 113-9984268-1270257',
    writeProduct: true,
    items: [{
      name: 'The Timeless Way of Building',
      image: '',
      type: 'Books',
      isbn: null,
      author: 'Alexander, Christopher',
      price: 41.33
    }]
  },
  {
    orders: 1,
    total: 17.22,
    orderPlaced: 'July 4, 2020',
    delivered: 'July 7, 2020',
    orderNumber: '# 114-2875557-9059409',
    item: [{
      name: 'Gamecube Controller Adapter',
      image: '',
      type: 'Electronics',
      price: 15.98
    }]
  },
  {
    orders: 2,
    orderPlaced: 'July 3, 2020',
    delivered: 'July 5, 2020',
    orderNumber: '# 113-2883177-26428248',
    total: 138.93,
    items: [{
      name: 'Gamecube Controller',
      type: 'Electronic',
      image: '',
      price: 94.95,
      getProductSupport: true
    },
    {
      name: 'The Art of SQL',
      type: 'Books',
      author: 'Faroulut, Stephane',
      isbn: null,
      image: '',
      price: 33.99
    }]
  }
];
console.log(orderHistory);
