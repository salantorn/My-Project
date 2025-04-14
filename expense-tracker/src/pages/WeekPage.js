// src/pages/WeekPage.js
import React, { useState, useEffect } from 'react';
import ExpenseLineChart from '../components/LineChart';
import ExpenseBarChart from '../components/BarChart';
import ExpenseForm from '../components/ExpenseForm';
import SavingsInfo from '../components/SavingsInfo';
import { 
  getInitialData, 
  saveData, 
  prepareWeeklyData, 
  calculateTotals, 
  getBudgetData 
} from '../data/expenseData';

const WeekPage = () => {
  const [transactions, setTransactions] = useState([]);
  const [weeklyData, setWeeklyData] = useState([]);
  const [totals, setTotals] = useState({ income: 0, expense: 0, budget: 0, savings: 0 });
  const [budgetData, setBudgetData] = useState({ daily: 0, weekly: 0, monthly: 0 });

  useEffect(() => {
    const initialData = getInitialData();
    setTransactions(initialData);

    const budget = getBudgetData();
    setBudgetData(budget);

    const weekData = prepareWeeklyData(initialData);
    setWeeklyData(weekData);

    const calculatedTotals = calculateTotals(weekData);
    setTotals(calculatedTotals);
  }, []);

  const handleAddTransaction = (transaction) => {
    const newTransactions = [...transactions, transaction];
    setTransactions(newTransactions);
    saveData(newTransactions);

    // Refresh weekly data
    const weekData = prepareWeeklyData(newTransactions);
    setWeeklyData(weekData);

    // Recalculate totals
    const calculatedTotals = calculateTotals(weekData);
    setTotals(calculatedTotals);
  };

  return (
    <div>
      <h2 className="mb-4">Weekly Overview</h2>
      
      <ExpenseForm onAddTransaction={handleAddTransaction} periodType="Weekly" />
      
      <SavingsInfo 
        income={totals.income} 
        expense={totals.expense} 
        budget={budgetData.weekly} 
      />
      
      <ExpenseLineChart 
        data={weeklyData} 
        title="Income, Budget, and Expenses Comparison (Weekly)"
      />
      
      <div className="row">
        <div className="col-md-6 mb-4">
          <ExpenseBarChart 
            data={weeklyData} 
            title="Weekly Income" 
            dataKey="income" 
            color="var(--chart-income)" 
          />
        </div>
        <div className="col-md-6 mb-4">
          <ExpenseBarChart 
            data={weeklyData} 
            title="Weekly Expenses" 
            dataKey="expense" 
            color="var(--chart-expense)" 
          />
        </div>
      </div>
      
      <ExpenseLineChart 
        data={weeklyData} 
        title="Savings vs Budget (Weekly)" 
      />
      
      <ExpenseLineChart 
        data={weeklyData.map(item => ({
          name: item.name,
          budget: item.budget,
          expense: item.expense
        }))} 
        title="Budget vs Expenses (Weekly)" 
      />
    </div>
  );
};

export default WeekPage;