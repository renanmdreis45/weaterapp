/* eslint-disable linebreak-style */
import { model, Schema } from 'mongoose';

export const Order = model('Product', new Schema({
  table: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['WAITING', 'IN_PRODUCTION', 'DONE'],
    default: 'WAITING',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
}));
