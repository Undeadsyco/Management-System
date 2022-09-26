import axios from 'axios';

import Pizza from '../classes/pizza';

export default {
  addToOrder: (size, obj) => {
    const pizza = new Pizza(obj.id, obj.name, size, obj.price, obj.toppings);
    return ({
      type: 'ADD_TO_ORDER',
      pizza,
    });
  },
  submitOrder: async (body) => {
    const {
      name, subtotal: price, tax, total, paid: paidAmount,
      list: pizzas, phoneNumber, discounts, grossTotal,
    } = body;
    if (paidAmount < total) {
      alert('total must be paid in full before closeing order');
      return null;
    }

    const req = await axios.post('/v1/pos/order/close', {
      name,
      phoneNumber,
      price,
      tax,
      total,
      grossTotal,
      paidAmount,
      change: paidAmount - total,
      pizzas,
      discounts,
    });
    const res = await req.data;
    return res;
  },
};
