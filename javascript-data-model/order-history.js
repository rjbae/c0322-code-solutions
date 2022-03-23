var orderHistory = [
  {
    orderPlaced: 'August 4, 2020',
    totalPrice: 34.00,
    shipTo: 'JS Masher',
    orderNumber: '114-3941689-8772232',
    deliveryDate: 'Aug 8, 2020',
    deliveryMethod: null,
    item: {
      name: 'JavaScript for impatient programmers',
      price: 31.55,
      itemType: 'Book',
      author: 'Rauschmayer, Dr. Axel',
      returnWindow: 'Closed on Sep 7, 2020'
    }
  },
  {
    orderPlaced: 'July 19, 2020',
    totalPrice: 44.53,
    shipTo: 'JS Masher',
    orderNumber: '113-9984268-1280257',
    deliveryDate: 'Jul 20, 2020',
    deliveryMethod: 'Handed directly to a resident.',
    item: {
      name: 'The Timeless Way of Building',
      price: 41.33,
      type: 'Book',
      author: 'Alexander, Christopher',
      returnWindow: 'Closed on Aug 19, 2020'
    }
  },
  {
    orderPlaced: 'July 4, 2020',
    totalPrice: 17.22,
    shipTo: 'JS Masher',
    orderNumber: '114-2875557-9059409',
    deliveryDate: 'Jul 7, 2020',
    deliveryMethod: 'Handed directly to a resident.',
    item: {
      name: 'Gamecube Controller Adapter. Super Smash Bros Switch Gamecube Adapeter for WII U, PC. Support Turbo and Vibration Features. No Driver and No Lag-Gamecube Adapter',
      price: 15.98,
      type: 'Gaming Accessory',
      author: null,
      returnWindow: 'Closed on Aug 5, 2020'
    }
  },
  {
    orderPlaced: 'July 3, 2020',
    totalPrice: 138.93,
    shipTo: 'JS Masher',
    orderNumber: '113-2883177-2648248',
    deliveryDate: 'Jul 5, 2020',
    deliveryMethod: null,
    item: [
      {
        name: 'GameCube Controller - Super Smash Bros. Edition (Nintendo Switch)',
        price: 94.95,
        type: 'Gaming Accessory',
        author: null,
        returnWindow: 'Closed on Aug 4, 2020'
      }],
    items: [
      {
        name: 'The Art of Sql',
        price: 33.99,
        type: 'Book',
        author: 'Faroult, Stephanie',
        returnWindow: 'Closed on Aug 4, 2020'
      }
    ]
  }
];

console.log(orderHistory);
