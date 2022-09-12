const URL = 'http://localhost:3000/api/v1/messages'

const initialState = {content:'this is the initial state'}

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MY_ACTION':
      return {
        content: action.payload
      };
    default:
      return state;
  }
}


export const myAction = () => (dispatch) => {

  fetch(URL)
    .then(response => response.json())
    .then(data => {
      dispatch({
        type: 'MY_ACTION',
        payload: data.content
      })
    })
    .catch(error => console.log(error))
}
     

export default myReducer;