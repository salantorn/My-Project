// src/components/LineChart.js
import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons';

const ExpenseLineChart = ({ data, title }) => {
  const [showIncome, setShowIncome] = useState(true);
  const [showBudget, setShowBudget] = useState(true);
  const [showExpense, setShowExpense] = useState(true);

  return (
    <div className="chart-container">
      <h3 className="chart-title">{title}</h3>
      <div className="chart-controls">
        <button 
          className={`neumorph-button d-flex align-items-center ${showIncome ? 'active' : ''}`}
          onClick={() => setShowIncome(!showIncome)}
        >
          <span className="me-2" style={{ color: 'var(--chart-income)' }}>Income</span>
          <FontAwesomeIcon icon={showIncome ? faToggleOn : faToggleOff} />
        </button>
        <button 
          className={`neumorph-button d-flex align-items-center ${showBudget ? 'active' : ''}`}
          onClick={() => setShowBudget(!showBudget)}
        >
          <span className="me-2" style={{ color: 'var(--chart-budget)' }}>Budget</span>
          <FontAwesomeIcon icon={showBudget ? faToggleOn : faToggleOff} />
        </button>
        <button 
          className={`neumorph-button d-flex align-items-center ${showExpense ? 'active' : ''}`}
          onClick={() => setShowExpense(!showExpense)}
        >
          <span className="me-2" style={{ color: 'var(--chart-expense)' }}>Expense</span>
          <FontAwesomeIcon icon={showExpense ? faToggleOn : faToggleOff} />
        </button>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="var(--primary-text)" opacity={0.2} />
          <XAxis dataKey="name" stroke="var(--primary-text)" />
          <YAxis stroke="var(--primary-text)" />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'var(--primary-bg)', 
              color: 'var(--primary-text)',
              border: 'none',
              borderRadius: '8px',
              boxShadow: '3px 3px 6px var(--shadow-dark), -3px -3px 6px var(--shadow-light)'
            }}
          />
          <Legend />
          {showIncome && (
            <Line 
              type="monotone" 
              dataKey="income" 
              stroke="var(--chart-income)" 
              activeDot={{ r: 8 }} 
              strokeWidth={3}
              dot={{ stroke: 'var(--chart-income)', strokeWidth: 2, r: 4, fill: 'var(--primary-bg)' }}
            />
          )}
          {showBudget && (
            <Line 
              type="monotone" 
              dataKey="budget" 
              stroke="var(--chart-budget)" 
              strokeWidth={3}
              dot={{ stroke: 'var(--chart-budget)', strokeWidth: 2, r: 4, fill: 'var(--primary-bg)' }}
            />
          )}
          {showExpense && (
            <Line 
              type="monotone" 
              dataKey="expense" 
              stroke="var(--chart-expense)" 
              strokeWidth={3}
              dot={{ stroke: 'var(--chart-expense)', strokeWidth: 2, r: 4, fill: 'var(--primary-bg)' }}
            />
          )}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ExpenseLineChart;