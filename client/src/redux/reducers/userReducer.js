const initialData = {
  expenseHistory: [],
};

export const userReducer = (state = initialData, action) => {
  switch (action.type) {
    case "GET_USER_EXPENSE":
      return {
        ...state,
        expenseHistory: action.payload,
      };

    default:
      return state;
  }
};
