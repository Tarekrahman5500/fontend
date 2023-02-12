import {authConstants, cartConstants} from "./constants.js";
import axios from "../helpers/axios.js";

export const signup = (user) => {
  return async (dispatch) => {
    let res;
    try {
      dispatch({ type: authConstants.SIGNUP_REQUEST });
      res = await axios.post(`/signup`, user);
      if (res.status === 201) {
        dispatch({ type: authConstants.SIGNUP_SUCCESS });
        const { token, user } = res.data;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        dispatch({
          type: authConstants.LOGIN_SUCCESS,
          payload: {
            token,
            user,
          },
        });
      } else {
        const { error } = res.data;
        dispatch({ type: authConstants.SIGNUP_FAILURE, payload: { error } });
      }
    } catch (error) {
      const { data } = error.response;
      dispatch({
        type: authConstants.SIGNUP_FAILURE,
        payload: { error: data.error },
      });
    }
  };
};

export const login = (user) => {
    //console.log(user)
    return async (dispatch) => {
        try {

            dispatch({type: authConstants.LOGIN_REQUEST})
            const res = await axios.post(`/signin`, {
                ...user
            })
            // if login successfully then save token and the user
            console.log(res)
            if (res.status === 200) {
                const {token, user} = res.data
                // save the user in localstorage
                localStorage.setItem('token', token)
                localStorage.setItem('user', JSON.stringify(user))
                dispatch({
                    type: authConstants.LOGIN_SUCCESS,
                    payload: {
                        token,
                        user

                    }
                })
                // if valid to login
            } else if (res.status === 400) {
                dispatch({
                    type: authConstants.LOGIN_FAILURE,
                    payload: {
                        error: res.data.error
                    }
                })
            }
        } catch (err) {
            if (err.response.data.error) {
                //   console.log(err.response.data.error)
                dispatch({
                    type: authConstants.LOGIN_FAILURE,
                    payload: {
                        error: err.response.data.error
                    }
                })
            }
        }
        //

    }
}


// check the user is logged in or not
export const isUserLoggedIn = () => {
    return async dispatch => {
        // check the token is in the local storage or not
        const token = localStorage.getItem('token');
        if (token) {
            // if present then dispatch the user
            const user = JSON.parse(localStorage.getItem('user'));
            dispatch({
                type: authConstants.LOGIN_SUCCESS,
                payload: {
                    token, user
                }
            });
        } else {
            dispatch({
                type: authConstants.LOGIN_FAILURE,
                payload: {error: 'Failed to login'}
            });
        }
    }
}

export const signOut = () => {
    // console.log('here')
    return async dispatch => {
        try {
            // localStorage.clear();
            //  dispatch({type: authConstants.LOGOUT_SUCCESS});

            dispatch({type: authConstants.LOGOUT_REQUEST});
            const res = await axios.post(`/signout`);
            // console.log(res)
            if (res.status === 200) {
                localStorage.clear()
                dispatch({type: authConstants.LOGOUT_SUCCESS});
                dispatch({type: cartConstants.RESET_CART});
            } else {
                //  console.log('here')
                dispatch({
                    type: authConstants.LOGOUT_FAILURE,
                    payload: {error: res.data.error}
                });
            }
        } catch (err) {
            // console.log(err + 'hi')
            //  console.log(res)
            if (err.response && err.response.data) {
                // print the exception message from axios response
                dispatch({
                    type: authConstants.LOGOUT_FAILURE,
                    payload: {error: err.response.data.error}
                });
            }


        }
    }
}