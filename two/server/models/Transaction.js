import mongoose from 'mongoose';

const TransactionSchema = new mongoose.Schema({
  amount: Number,
  type: { type: String, enum: ['income', 'expense'] },
  date: Date,
  note: String
});

export default mongoose.model('Transaction', TransactionSchema);
