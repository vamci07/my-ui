import axios from 'axios';
import toast from 'components/Toast';

const prefix = 'GLOBAL/ENV/';
export const SET_CURRENT_OS = `${prefix}SET_CURRENT_OS`;
export const SET_CURRENT_BROWSER = `${prefix}SET_CURRENT_BROWSER`;

const initialState = {
  os: undefined,
  browser: undefined,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_CURRENT_OS:
      return { ...state, os: action.currentOs };
    case SET_CURRENT_BROWSER:
      return { ...state, browser: action.currentBrowser };
    default:
      return state;
  }
}

export function setCurrentOs(currentOs = undefined) {
  return async (dispatch) => {
    dispatch({
      type: SET_CURRENT_OS,
      currentOs,
    });
    await axios
      .get('/users')
      .then(({ status, data }) => {
        console.log('status => ', status, ', data => ', data);
      })
      .catch((error) => {
        const {
          response: { status, data },
        } = error;
        toast.error({ header: 'Error', message: data });
        return { error: true, status: status };
      });
    toast.success({
      header: 'Success',
      message: `Current operating system - ${currentOs}`,
      config: { autoClose: true },
    });
    return;
  };
}

export function setCurrentBrowser(currentBrowser = undefined) {
  return async (dispatch) => {
    dispatch({
      type: SET_CURRENT_BROWSER,
      currentBrowser,
    });
    toast.success({ header: 'Success', message: `Current browser - ${currentBrowser}`, config: { autoClose: true } });
    return;
  };
}
