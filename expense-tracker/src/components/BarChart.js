// src/components/BarChart.js
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ExpenseBarChart = ({ data, title, dataKey, color }) => {
  return (
    <div className="chart-container">
      <h3 className="chart-title">{title}</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
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
          <Bar 
            dataKey={dataKey} 
            fill={color} 
            radius={[20, 20, 0, 0]}
            barSize={30}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ExpenseBarChart;