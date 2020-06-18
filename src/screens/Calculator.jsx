import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Container } from 'reactstrap';
import LoanList from 'components/LoanList.jsx';
import AddLoanButton from 'components/AddLoanButton.jsx';
import { addLoan, updateLoan } from 'redux/actions/loans';

const StyledContainer = styled(Container)`
  height: 100vh;
  background-color: #75b6f6;
  display: flex;
  justify-content: center;
`;

const LoansContainer = styled(Container)`
  max-width: 900px;
  height: 600px;  
  background-color: #FFFFFF;
  margin-top: 50px;
  overflow: auto;
  padding: 20px 0;
  text-align: left;
`;

const StyledLoanHeader = styled.span`
  display: block;  
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const TotalLoans = styled.span`
  color: #585858;  
  font-size: 18px;
  font-weight: 700;
  line-height: 1;
`;

const Calculator = () => {
  const dispatch = useDispatch();
  const { loans } = useSelector((state) => state.loans);
  const [totalLoans, setTotalLoans] = useState(0);

  /* handle Add Another Loan button click */
  const handleAddLoan = () => {
    dispatch(addLoan());
  }

  /* handle Loan Input event */
  const handleChange = (loan, fieldName, value) => {
    dispatch(updateLoan({ ...loan, [fieldName]: value }));
  };

  /* Calculate total Loans */
  useEffect(() => {
    let totalLoans = 0;
    loans.forEach((loan) => {
      totalLoans = totalLoans + parseInt(loan.loanAmount);
    });
    setTotalLoans(totalLoans);
  }, [loans]);

  return (
    <StyledContainer fluid={true}>
      <LoansContainer>
        <h1 className="text-center">Calculate your savings with Anvil</h1>
        <Container>
          <StyledLoanHeader>
            Federal Loans
          </StyledLoanHeader>
          <LoanList loans={loans} onChange={handleChange} />
          <AddLoanButton onClick={handleAddLoan} />
          <TotalLoans>{`Loan Total: $${totalLoans}`}</TotalLoans>
        </Container>
      </LoansContainer>
    </StyledContainer>
  )
};

export default Calculator;
