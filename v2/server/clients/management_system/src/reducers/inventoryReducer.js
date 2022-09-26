const initialState = {
  inventory: [],
  usageList: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_INVENTORY_STATS':
      return {
        ...state,
        inventory: action.data,
      };
    case 'SET_USAGE': {
      const { inventory } = state;
      const { item, usage } = action.data;

      inventory.splice(inventory.indexOf(item), 1, { ...item, actualUsage: usage });

      return { ...state, inventory: [...inventory] };
    }
    default:
      return { ...state };
  }
};

export default reducer;
