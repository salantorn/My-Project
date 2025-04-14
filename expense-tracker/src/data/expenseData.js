// src/data/expenseData.js
export const getInitialData = () => {
    const storedData = localStorage.getItem('expenseData');
    if (storedData) {
      return JSON.parse(storedData);
    }
    return [];
  };
  
  export const getBudgetData = () => {
    const storedBudget = localStorage.getItem('budget');
    if (storedBudget) {
      return JSON.parse(storedBudget);
    }
    return { monthly: 0, weekly: 0, daily: 0 };
  };
  
  export const saveData = (data) => {
    localStorage.setItem('expenseData', JSON.stringify(data));
  };
  
  export const filterDataByDateRange = (data, startDate, endDate) => {
    return data.filter(item => {
      const itemDate = new Date(item.date);
      return itemDate >= new Date(startDate) && itemDate <= new Date(endDate);
    });
  };
  
  export const prepareWeeklyData = (transactions) => {
    // Get the current date
    const today = new Date();
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay());
    startOfWeek.setHours(0, 0, 0, 0);
  
    // Get the end of the current week (Saturday)
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);
    endOfWeek.setHours(23, 59, 59, 999);
  
    // Filter transactions for the current week
    const weekTransactions = filterDataByDateRange(transactions, startOfWeek, endOfWeek);
  
    // Group by day of the week
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const weeklyData = days.map(day => {
      const dayIndex = days.indexOf(day);
      const date = new Date(startOfWeek);
      date.setDate(startOfWeek.getDate() + dayIndex);
      
      const dayTransactions = weekTransactions.filter(t => {
        const transDate = new Date(t.date);
        return transDate.getDay() === dayIndex;
      });
      
      const income = dayTransactions
        .filter(t => t.type === 'income')
        .reduce((sum, t) => sum + t.amount, 0);
      
      const expense = dayTransactions
        .filter(t => t.type === 'expense')
        .reduce((sum, t) => sum + t.amount, 0);
      
      // Calculate budget based on the daily budget from localStorage
      const budgetData = getBudgetData();
      const budget = budgetData.daily;
      
      return {
        name: day,
        date: date.toISOString().slice(0, 10),
        income,
        expense,
        budget,
        savings: income - expense
      };
    });
    
    return weeklyData;
  };
  
  export const prepareMonthlyData = (transactions) => {
    // Get the current date
    const today = new Date();
    
    // Get the start of the current month
    const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    
    // Get the end of the current month
    const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    endOfMonth.setHours(23, 59, 59, 999);
    
    // Filter transactions for the current month
    const monthTransactions = filterDataByDateRange(transactions, startOfMonth, endOfMonth);
    
    // Create an array of all days in the month
    const monthlyData = [];
    const daysInMonth = endOfMonth.getDate();
    
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(today.getFullYear(), today.getMonth(), day);
      const formattedDate = date.toISOString().slice(0, 10);
      
      const dayTransactions = monthTransactions.filter(t => {
        return t.date === formattedDate;
      });
      
      const income = dayTransactions
        .filter(t => t.type === 'income')
        .reduce((sum, t) => sum + t.amount, 0);
      
      const expense = dayTransactions
        .filter(t => t.type === 'expense')
        .reduce((sum, t) => sum + t.amount, 0);
      
      // Calculate budget based on the daily budget from localStorage
      const budgetData = getBudgetData();
      const budget = budgetData.daily;
      
      monthlyData.push({
        name: `Day ${day}`,
        date: formattedDate,
        income,
        expense,
        budget,
        savings: income - expense
      });
    }
    
    return monthlyData;
  };
  
  export const prepareYearlyData = (transactions) => {
    // Get the current date
    const today = new Date();
    
    // Get the start of the current year
    const startOfYear = new Date(today.getFullYear(), 0, 1);
    
    // Get the end of the current year
    const endOfYear = new Date(today.getFullYear(), 11, 31);
    endOfYear.setHours(23, 59, 59, 999);
    
    // Filter transactions for the current year
    const yearTransactions = filterDataByDateRange(transactions, startOfYear, endOfYear);
    
    // Group by month
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                    'July', 'August', 'September', 'October', 'November', 'December'];
    
    const yearlyData = months.map((month, index) => {
      const startOfMonth = new Date(today.getFullYear(), index, 1);
      const endOfMonth = new Date(today.getFullYear(), index + 1, 0);
      endOfMonth.setHours(23, 59, 59, 999);
      
      const monthTransactions = filterDataByDateRange(yearTransactions, startOfMonth, endOfMonth);
      
      const income = monthTransactions
        .filter(t => t.type === 'income')
        .reduce((sum, t) => sum + t.amount, 0);
      
      const expense = monthTransactions
        .filter(t => t.type === 'expense')
        .reduce((sum, t) => sum + t.amount, 0);
      
      // Calculate budget based on the monthly budget from localStorage
      const budgetData = getBudgetData();
      const budget = budgetData.monthly;
      
      return {
        name: month,
        income,
        expense,
        budget,
        savings: income - expense
      };
    });
    
    return yearlyData;
  };
  
  export const calculateTotals = (data) => {
    return {
      income: data.reduce((sum, item) => sum + item.income, 0),
      expense: data.reduce((sum, item) => sum + item.expense, 0),
      budget: data.reduce((sum, item) => sum + item.budget, 0) / data.length * data.length,
      savings: data.reduce((sum, item) => sum + (item.income - item.expense), 0)
    };
  };