//////// Redux Reducers /////////

import {
  ANVIL_LOAN_ADD,
  ANVIL_LOAN_UPDATE,
} from '../actions/loans';

const dataSchema = {
  loanAmount: 0,
  rate: 0,
  monthlyPayment: 0,
};

let num = 0;

const initialState = {
  loans: [{ ...dataSchema, id: num }],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ANVIL_LOAN_ADD:
      num = num + 1;
      return {
        ...state,
        loans: [...state.loans, { ...dataSchema, id: num}],
      };
    case ANVIL_LOAN_UPDATE:
      const loans = [...state.loans].map((loan) => {
        if (loan.id === action.payload.id) {
          return action.payload;
        }
        return loan;
      });
      return {
        ...state,
        loans,
      };
    default:
      return state;
  }
}
