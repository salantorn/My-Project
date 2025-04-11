import express from 'express';
import Transaction from '../models/Transaction.js';

const router = express.Router();

// Get all transactions
router.get('/', async (req, res) => {
  const transactions = await Transaction.find().sort({ date: 1 });
  res.json(transactions);
});

// Add new transaction
router.post('/', async (req, res) => {
  const newTransaction = new Transaction(req.body);
  await newTransaction.save();
  res.status(201).json(newTransaction);
});

export default router;
