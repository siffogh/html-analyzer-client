const homeReducer = (state = {
  loader: false,
  analysis: undefined,
}, action) => {
  switch (action.type) {
    case 'GOT_ANALYSIS':
      return Object.assign({}, state, { analysis: action.content, analysisFail: undefined });
    case 'ANALYSIS_FAIL':
      return Object.assign({}, state, { analysisFail: action.failError });
    case 'REMOVE_ANALYSIS':
      return Object.assign({}, state, { analysis: undefined });
    case 'SHOW_LOADER':
      return Object.assign({}, state, { loader: true, loaderMsg: action.loaderMsg });
    case 'HIDE_LOADER':
      return Object.assign({}, state, { loader: false, loaderMsg: undefined });
    default:
      console.log('state: ', state);
      return state;
  }
};
export default homeReducer;
