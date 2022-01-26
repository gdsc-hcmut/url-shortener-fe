import { useDispatch } from 'react-redux';

import { SHOW_MODAL } from 'action-types';

const dispatch = useDispatch();
export default function showHideModal(visible) {
  dispatch({
    type: SHOW_MODAL,
    payload: visible,
  });
}
