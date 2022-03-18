import { UPLOAD_IMG } from 'action-types';

const initialState = {
  uploadAva: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case UPLOAD_IMG:
      return {
        ...state,
        uploadAva: payload,
      };
    default:
      return state;
  }
}
