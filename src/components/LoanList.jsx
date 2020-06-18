import React from 'react';
import LoanItem from './LoanItem.jsx';

const LoanList = ({ loans, onChange }) => {
  return (
    <div>
      {loans.map((loan) => (
        <LoanItem key={`loan-item-${loan.id}`} loan={loan} onChange={onChange} />
      ))}
    </div>
  )
};

export default LoanList;
