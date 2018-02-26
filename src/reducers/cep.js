import ajax from '@fdaciuk/ajax'

const initialState = {
  status: null,
  code: '',
  state: '',
  city: '',
  district: '',
  address: '',
  errorMessage: null,
  isFetching: false
}

const UPDATE_ADDRESS = 'UPDATE_ADDRESS';
const FETCHING = 'FETCHING';

const cep = (state = initialState, action) => {
  switch(action.type) {
    case FETCHING:
      return {
        ...state,
        isFetching: true
      }
    case UPDATE_ADDRESS:
      return {
        ...state,
        ...action.payload,
        isFetching: false
      }
    default: return state;
  }
}

export const updateAddress = (address) => {
  return {
    type: UPDATE_ADDRESS,
    payload: address
  }
}

export const fetchAddress = (cep) => async (dispatch) => {
  dispatch({ type: FETCHING })
  const result = await ajax().get(`http://apps.widenet.com.br/busca-cep/api/cep/${cep}.json`)
  if (typeof result !== 'object') {
    return dispatch(updateAddress({ errorMessage: result }));
  }
  dispatch(updateAddress({...result, errorMessage: result.message }));
}

export default cep;
