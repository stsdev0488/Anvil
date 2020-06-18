import React from 'react';
import { Button } from 'reactstrap';
import styled from 'styled-components';

const StyledButton = styled(Button)`
  box-shadow: none; 
  color: #539cf1;
  display: block;  
  font-size: 20px;
  font-weight: 700;
  line-height: 1;
  margin: 20px 0;  
  outline: none;
  padding: 0;
`;

const AddLoanButton = ({ onClick }) => (
  <StyledButton onClick={onClick} color="link">
    + Another Loan
  </StyledButton>
);

export default AddLoanButton;
