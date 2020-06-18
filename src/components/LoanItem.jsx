import React from 'react';
import {
  Col, Row, FormGroup, Input, Label,
} from 'reactstrap';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledLabel = styled(Label)`
  color: #585858;
  font-size: 18px;
  font-weight: 700;
  line-height: 1;
  margin: 0 0 10px;
  text-align: left;
`;

const LoanItem = ({ loan, onChange }) => {
  return (
    <Row>
      <Col md={6}>
        <FormGroup>
          <StyledLabel for={`amount-${loan.id}`}>Loan Amount(Principal)</StyledLabel>
          <Input
            type="number"
            name="amount"
            id={`amount-${loan.id}`}
            onChange={(e) => onChange(loan, 'loanAmount', e.target.value)}
            value={loan.loanAmount}
          />
        </FormGroup>
      </Col>
      <Col md={2}>
        <FormGroup>
          <StyledLabel for={`rate-${loan.id}`}>Int. Rate</StyledLabel>
          <Input
            type="number"
            name="rate"
            id={`rate-${loan.id}`}
            onChange={(e) => onChange(loan, 'rate', e.target.value)}
            value={loan.rate}
          />
        </FormGroup>
      </Col>
      <Col md={4}>
        <FormGroup>
          <StyledLabel for={`payment-${loan.id}`}>Monthly Minimum Payment</StyledLabel>
          <Input
            type="number"
            name="payment"
            id={`payment-${loan.id}`}
            onChange={(e) => onChange(loan, 'monthlyPayment', e.target.value)}
            value={loan.monthlyPayment}
          />
        </FormGroup>
      </Col>
    </Row>
  );
};

LoanItem.propTypes = {
  loan: PropTypes.objectOf(PropTypes.any).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default LoanItem;
