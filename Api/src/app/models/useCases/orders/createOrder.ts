/* eslint-disable linebreak-style */
import { Request, Response } from 'express';

import { Order } from '../../Order';

export async function createOrder(req: Request, res: Response) {

  try {
    const { table, products } = req.body;

    const orders = await (await Order.create({ table, products})).populate('products.product');

    res.status(201).json(orders);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }

}
