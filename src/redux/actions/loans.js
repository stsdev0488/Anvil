///////////// Redux Actions //////////////

export const ANVIL_LOAN_ADD = 'ANVIL_LOAN_ADD';
export const ANVIL_LOAN_UPDATE = 'ANVIL_LOAN_UPDATE';

/*
...... Add a new Loan ......
*/
const addLoanRequest = () => ({
  type: ANVIL_LOAN_ADD,
});

/* thunk function */
export const addLoan = () => (dispatch) => {
  dispatch(addLoanRequest());
};

/*
...... Update a loan ......
*/
const updateLoanRequest = (payload) => ({
  type: ANVIL_LOAN_UPDATE,
  payload,
});

/* thunk function */
export const updateLoan = (loan) => (dispatch) => {
  dispatch(updateLoanRequest(loan));
};
