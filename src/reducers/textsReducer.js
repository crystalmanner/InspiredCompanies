import * as actions from '../actions/textsActions'

export const initialState = {
  loading: false,
  hasErrors: false,
  texts: [],
}

export default function textsReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_TEXTS:
        return { ...state, texts: action.payload, loading: false, hasErrors: false }
    default:
      return state
  }
}
