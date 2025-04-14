// src/components/SavingsInfo.js
import React from 'react';

const SavingsInfo = ({ income, expense, budget }) => {
  const savings = income - expense;
  const budgetStatus = expense <= budget ? 'under' : 'over';
  
  return (
    <div className="neumorph-box p-4 mb-4">
      <h3 className="mb-3">Savings Overview</h3>
      <div className="row">
        <div className="col-md-4 mb-3 mb-md-0">
          <div className="neumorph-box-inset p-3 text-center">
            <h4>Total Income</h4>
            <p className="fs-2 fw-bold text-primary">${income.toFixed(2)}</p>
          </div>
        </div>
        <div className="col-md-4 mb-3 mb-md-0">
          <div className="neumorph-box-inset p-3 text-center">
            <h4>Total Expense</h4>
            <p className="fs-2 fw-bold text-danger">${expense.toFixed(2)}</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="neumorph-box-inset p-3 text-center">
            <h4>Savings</h4>
            <p className={`fs-2 fw-bold ${savings >= 0 ? 'text-success' : 'text-danger'}`}>
              ${savings.toFixed(2)}
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-4">
        <h4>Budget Status</h4>
        <div className="neumorph-box-inset p-3 mt-3">
          {budget > 0 ? (
            <>
              <p className="mb-2">
                Your budget: <strong>${budget.toFixed(2)}</strong>
              </p>
              <p className={`mb-0 ${budgetStatus === 'under' ? 'text-success' : 'text-danger'}`}>
                You are <strong>{budgetStatus} budget</strong> by <strong>${Math.abs(budget - expense).toFixed(2)}</strong>
              </p>
            </>
          ) : (
            <p className="mb-0">No budget set. Please set a budget to track your spending.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SavingsInfo;