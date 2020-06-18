import React from 'react';
import LoanItem from './LoanItem.jsx';
import PropTypes from 'prop-types';

const LoanList = ({ loans, onChange }) => {
  return (
    <div>
      {loans.map((loan) => (
        <LoanItem key={`loan-item-${loan.id}`} loan={loan} onChange={onChange} />
      ))}
    </div>
  )
};

LoanList.propTypes = {
  loans: PropTypes.arrayOf(PropTypes.any).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default LoanList;
