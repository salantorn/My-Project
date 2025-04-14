// src/pages/MonthPage.js
import React, { useState, useEffect } from 'react';
import ExpenseLineChart from '../components/LineChart';
import ExpenseBarChart from '../components/BarChart';
import ExpenseForm from '../components/ExpenseForm';
import SavingsInfo from '../components/SavingsInfo';
import { 
  getInitialData, 
  saveData, 
  prepareMonthlyData, 
  calculateTotals, 
  getBudgetData 
} from '../data/expenseData';

const MonthPage = () => {
  const [transactions, setTransactions] = useState([]);
  const [monthlyData, setMonthlyData] = useState([]);
  const [totals, setTotals] = useState({ income: 0, expense: 0, budget: 0, savings: 0 });
  const [budgetData, setBudgetData] = useState({ daily: 0, weekly: 0, monthly: 0 });

  useEffect(() => {
    const initialData = getInitialData();
    setTransactions(initialData);

    const budget = getBudgetData();
    setBudgetData(budget);

    const monthData = prepareMonthlyData(initialData);
    setMonthlyData(monthData);

    const calculatedTotals = calculateTotals(monthData);
    setTotals(calculatedTotals);
  }, []);

  const handleAddTransaction = (transaction) => {
    const newTransactions = [...transactions, transaction];
    setTransactions(newTransactions);
    saveData(newTransactions);

    // Refresh monthly data
    const monthData = prepareMonthlyData(newTransactions);
    setMonthlyData(monthData);

    // Recalculate totals
    const calculatedTotals = calculateTotals(monthData);
    setTotals(calculatedTotals);
  };

  return (
    <div>
      <h2 className="mb-4">Monthly Overview</h2>
      
      <ExpenseForm onAddTransaction={handleAddTransaction} periodType="Monthly" />
      
      <SavingsInfo 
        income={totals.income} 
        expense={totals.expense} 
        budget={budgetData.monthly} 
      />
      
      <ExpenseLineChart 
        data={monthlyData} 
        title="Income, Budget, and Expenses Comparison (Monthly)"
      />
      
      <div className="row">
        <div className="col-md-6 mb-4">
          <ExpenseBarChart 
            data={monthlyData} 
            title="Monthly Income" 
            dataKey="income" 
            color="var(--chart-income)" 
          />
        </div>
        <div className="col-md-6 mb-4">
          <ExpenseBarChart 
            data={monthlyData} 
            title="Monthly Expenses" 
            dataKey="expense" 
            color="var(--chart-expense)" 
          />
        </div>
      </div>
      
      <ExpenseLineChart 
        data={monthlyData} 
        title="Savings vs Budget (Monthly)" 
      />
      
      <ExpenseLineChart 
        data={monthlyData.map(item => ({
          name: item.name,
          budget: item.budget,
          expense: item.expense
        }))} 
        title="Budget vs Expenses (Monthly)" 
      />
    </div>
  );
};

export default MonthPage;