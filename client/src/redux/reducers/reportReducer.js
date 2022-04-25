const initialData = {
    monthly: null,
    yearly: null,
    categoryWise: null,
  };
  
  export const reportReducer = (state = initialData, action) => {
    switch (action.type) {
      case "GET_MONTHLY_REPORT":
        return {
          ...state,
          monthly: action.payload,
        };
      case "GET_YEARLY_REPORT":
        return {
          ...state,
          yearly: action.payload,
        };
      case "GET_CATEGORY_REPORT":
        return {
          ...state,
          categoryWise: action.payload,
        };
  
      default:
        return state;
    }
  };
  