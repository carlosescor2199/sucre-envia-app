import axios from 'axios';

const url =
  'https://cxkwj7n40b.execute-api.us-east-2.amazonaws.com/dev/api/v1/login/signin';

export const login = (phone, password) => async (dispatch) => {
  const res = await axios.post(url, {
    celPhone: phone,
    password: password,
  });
  console.log(res.data);
  const token = res.data;
  dispatch({ type: 'LOG_IN', payload: token });
};
