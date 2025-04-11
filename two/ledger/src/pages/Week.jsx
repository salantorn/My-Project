import React from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import data from '../utils/dummyData';

export default function Week() {
  return (
    <div className="space-y-8">
      <div className="p-4 neumorphism">
        <h2 className="text-xl font-semibold mb-2">รายรับ vs รายจ่าย</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <CartesianGrid strokeDasharray="3 3" />
            <Line type="monotone" dataKey="income" stroke="#4ade80" />
            <Line type="monotone" dataKey="expense" stroke="#f87171" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 neumorphism">
          <h2 className="text-xl font-semibold mb-2">รายรับ</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="income" fill="#4ade80" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="p-4 neumorphism">
          <h2 className="text-xl font-semibold mb-2">รายจ่าย</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="expense" fill="#f87171" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="p-4 neumorphism">
        <h2 className="text-xl font-semibold mb-2">เงินเก็บ</h2>
        <ul>
          {data.map((item) => (
            <li key={item.day} className="mb-1">
              {item.day}: {item.income - item.expense} บาท ({item.income - item.expense >= 0 ? 'กำไร' : 'ขาดทุน'})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}