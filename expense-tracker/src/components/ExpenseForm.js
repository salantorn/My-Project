// src/components/ExpenseForm.js
import React, { useState } from 'react';

const ExpenseForm = ({ onAddTransaction, periodType }) => {
  const [formData, setFormData] = useState({
    type: 'income',
    amount: '',
    date: new Date().toISOString().slice(0, 10),
    description: '',
    category: ''
  });
  
  const [monthlyBudget, setMonthlyBudget] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleBudgetChange = (e) => {
    setMonthlyBudget(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.amount || !formData.date) return;
    
    const transaction = {
      ...formData,
      amount: parseFloat(formData.amount),
      id: Date.now()
    };
    
    onAddTransaction(transaction);
    
    // Reset form
    setFormData({
      type: 'income',
      amount: '',
      date: new Date().toISOString().slice(0, 10),
      description: '',
      category: ''
    });
  };

  const handleBudgetSubmit = (e) => {
    e.preventDefault();
    if (!monthlyBudget) return;
    
    // Calculate daily and weekly budget
    const budget = {
      monthly: parseFloat(monthlyBudget),
      daily: parseFloat(monthlyBudget) / 30,
      weekly: parseFloat(monthlyBudget) / 4.345
    };
    
    localStorage.setItem('budget', JSON.stringify(budget));
    setMonthlyBudget('');
    
    // Reload to reflect changes
    window.location.reload();
  };

  return (
    <div className="mb-4">
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="neumorph-box p-4">
            <h3 className="mb-3">Add {periodType} Transaction</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Type</label>
                <select 
                  className="form-select" 
                  name="type" 
                  value={formData.type} 
                  onChange={handleChange}
                >
                  <option value="income">Income</option>
                  <option value="expense">Expense</option>
                </select>
              </div>
              
              <div className="mb-3">
                <label className="form-label">Amount</label>
                <input 
                  type="number" 
                  className="form-control" 
                  name="amount" 
                  value={formData.amount} 
                  onChange={handleChange}
                  placeholder="Enter amount"
                  min="0"
                  step="0.01"
                  required
                />
              </div>
              
              <div className="mb-3">
                <label className="form-label">Date</label>
                <input 
                  type="date" 
                  className="form-control" 
                  name="date" 
                  value={formData.date} 
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="mb-3">
                <label className="form-label">Description</label>
                <input 
                  type="text" 
                  className="form-control" 
                  name="description" 
                  value={formData.description} 
                  onChange={handleChange}
                  placeholder="Enter description"
                />
              </div>
              
              <div className="mb-3">
                <label className="form-label">Category</label>
                <input 
                  type="text" 
                  className="form-control" 
                  name="category" 
                  value={formData.category} 
                  onChange={handleChange}
                  placeholder="Enter category"
                />
              </div>
              
              <button type="submit" className="neumorph-button w-100">Add Transaction</button>
            </form>
          </div>
        </div>
        
        <div className="col-md-6 mb-4">
          <div className="neumorph-box p-4">
            <h3 className="mb-3">Set Monthly Budget</h3>
            <form onSubmit={handleBudgetSubmit}>
              <div className="mb-3">
                <label className="form-label">Monthly Budget Amount</label>
                <input 
                  type="number" 
                  className="form-control" 
                  value={monthlyBudget} 
                  onChange={handleBudgetChange}
                  placeholder="Enter monthly budget"
                  min="0"
                  step="0.01"
                  required
                />
              </div>
              
              <button type="submit" className="neumorph-button w-100">Set Budget</button>
            </form>
            
            <div className="mt-4">
              <h4>Budget Breakdown</h4>
              {localStorage.getItem('budget') && (
                <div className="neumorph-box-inset p-3 mt-3">
                  <p className="mb-2">
                    <strong>Monthly:</strong> ${JSON.parse(localStorage.getItem('budget')).monthly.toFixed(2)}
                  </p>
                  <p className="mb-2">
                    <strong>Weekly:</strong> ${JSON.parse(localStorage.getItem('budget')).weekly.toFixed(2)}
                  </p>
                  <p className="mb-0">
                    <strong>Daily:</strong> ${JSON.parse(localStorage.getItem('budget')).daily.toFixed(2)}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseForm;