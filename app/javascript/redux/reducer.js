import axios from 'axios';
const URL = 'http://localhost:3000/api/v1/messages'

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MY_ACTION':
      return {
        ...state,
        myState: action.payload
      };
    default:
      return state;
  }
}


export const myAction = () => (dispatch) => {
    axios.get(URL).
        then((response) => {
            dispatch({ type: 'MY_ACTION', payload: response.data })
        }
    )
}
        

export default myReducer;