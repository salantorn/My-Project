// src/pages/YearPage.js
import React, { useState, useEffect } from 'react';
import ExpenseLineChart from '../components/LineChart';
import ExpenseBarChart from '../components/BarChart';
import ExpenseForm from '../components/ExpenseForm';
import SavingsInfo from '../components/SavingsInfo';
import { 
  getInitialData, 
  saveData, 
  prepareYearlyData, 
  calculateTotals, 
  getBudgetData 
} from '../data/expenseData';

const YearPage = () => {
  const [transactions, setTransactions] = useState([]);
  const [yearlyData, setYearlyData] = useState([]);
  const [totals, setTotals] = useState({ income: 0, expense: 0, budget: 0, savings: 0 });
  const [budgetData, setBudgetData] = useState({ daily: 0, weekly: 0, monthly: 0 });

  useEffect(() => {
    const initialData = getInitialData();
    setTransactions(initialData);

    const budget = getBudgetData();
    setBudgetData(budget);

    const yearData = prepareYearlyData(initialData);
    setYearlyData(yearData);

    const calculatedTotals = calculateTotals(yearData);
    setTotals(calculatedTotals);
  }, []);

  const handleAddTransaction = (transaction) => {
    const newTransactions = [...transactions, transaction];
    setTransactions(newTransactions);
    saveData(newTransactions);

    // Refresh yearly data
    const yearData = prepareYearlyData(newTransactions);
    setYearlyData(yearData);

    // Recalculate totals
    const calculatedTotals = calculateTotals(yearData);
    setTotals(calculatedTotals);
  };

  return (
    <div>
      <h2 className="mb-4">Yearly Overview</h2>
      
      <ExpenseForm onAddTransaction={handleAddTransaction} periodType="Yearly" />
      
      <SavingsInfo 
        income={totals.income} 
        expense={totals.expense} 
        budget={totals.budget} 
      />
      
      <ExpenseLineChart 
        data={yearlyData} 
        title="Income, Budget, and Expenses Comparison (Yearly)"
      />
      
      <div className="row">
        <div className="col-md-6 mb-4">
          <ExpenseBarChart 
            data={yearlyData} 
            title="Yearly Income" 
            dataKey="income" 
            color="var(--chart-income)" 
          />
        </div>
        <div className="col-md-6 mb-4">
          <ExpenseBarChart 
            data={yearlyData} 
            title="Yearly Expenses" 
            dataKey="expense" 
            color="var(--chart-expense)" 
          />
        </div>
      </div>
      
      <ExpenseLineChart 
        data={yearlyData} 
        title="Savings vs Budget (Yearly)" 
      />
      
      <ExpenseLineChart 
        data={yearlyData.map(item => ({
          name: item.name,
          budget: item.budget,
          expense: item.expense
        }))} 
        title="Budget vs Expenses (Yearly)" 
      />
    </div>
  );
};

export default YearPage;