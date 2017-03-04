const homeReducer = (state = {
  loader: false,
  analysis: undefined,
}, action) => {
  switch (action.type) {
    case 'GOT_ANALYSIS':
      return Object.assign({}, state, { analysis: action.content });
    case 'REMOVE_ANALYSIS':
      return Object.assign({}, state, { analysis: undefined });
    case 'SHOW_LOADER':
      return Object.assign({}, state, { loader: true });
    case 'HIDE_LOADER':
      return Object.assign({}, state, { loader: false });
    default:
      console.log('state: ', state);
      return state;
  }
};
export default homeReducer;
