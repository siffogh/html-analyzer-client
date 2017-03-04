import { getAnalysis } from '../../api';

export const gotAnalysis = content => ({
  type: 'GOT_ANALYSIS',
  content,
});

export const removeAnalysis = () => ({
  type: 'REMOVE_ANALYSIS',
});

export const showLoader = () => ({
  type: 'SHOW_LOADER',
});

export const hideLoader = () => ({
  type: 'HIDE_LOADER',
});

export const analyzeLink = link => (dispatch) => {
  dispatch(showLoader());
  dispatch(gotAnalysis());
  return getAnalysis(link).then(({ data }) => {
    dispatch(hideLoader());
    dispatch(gotAnalysis(data.content));
  });
};

