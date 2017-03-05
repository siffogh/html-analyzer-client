import { getAnalysis } from '../../api';

export const gotAnalysis = content => ({
  type: 'GOT_ANALYSIS',
  content,
});

export const analysisFail = failError => ({
  type: 'ANALYSIS_FAIL',
  failError,
});
export const removeAnalysis = () => ({
  type: 'REMOVE_ANALYSIS',
});

export const showLoader = () => ({
  type: 'SHOW_LOADER',
  loaderMsg: 'Please notice that the request might take arount 30 secs depending on the links present in the target html.'
});

export const hideLoader = () => ({
  type: 'HIDE_LOADER',
});

export const analyzeLink = link => (dispatch) => {
  dispatch(showLoader());
  return getAnalysis(link)
  .then(({ data }) => {
    dispatch(hideLoader());
    dispatch(gotAnalysis(data.content));
  })
  .catch((err) => {
    if (!err.response) {
      return err.message;
    }
    dispatch(hideLoader());
    return dispatch(analysisFail(err.response.data.message));
  });
};

