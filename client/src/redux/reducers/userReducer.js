const initialData = {
  expenseHistory: [],
  selectedExpense: null,
};

export const userReducer = (state = initialData, action) => {
  switch (action.type) {
    case "GET_USER_EXPENSE":
      return {
        ...state,
        expenseHistory: action.payload,
      };
    case "GET_EXPENSE_BY_ID":
      return {
        ...state,
        selectedExpense: action.payload,
      };

    default:
      return state;
  }
};
