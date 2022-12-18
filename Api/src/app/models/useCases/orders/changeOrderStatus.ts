/* eslint-disable linebreak-style */
import { Request, Response } from 'express';

import { Order } from '../../Order';

export async function changeOrderStatus(req: Request, res: Response) {

  try {
    const { orderId } = req.params;
    const { status } = req.body;

    if(!['WAITING', 'IN_PRODUCTION', 'DONE'].includes(status)) {
      return res.status(400).json({
        error: 'Status should be one of these: WAITING, IN_PRODUCTION, DONE'
      })
    }

    res.status(201).json(orders);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }

}
