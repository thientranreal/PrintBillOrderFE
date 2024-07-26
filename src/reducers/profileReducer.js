import {
  FETCH_DATA_PROFILE_SUCCESS,
  FETCH_DATA_PROFILE_REQUEST,
  FETCH_DATA_PROFILE_FAILURE,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAILURE,
} from "../actions/types";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_PROFILE_REQUEST:
    case UPDATE_PROFILE_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_DATA_PROFILE_SUCCESS:
    case UPDATE_PROFILE_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };

    case FETCH_DATA_PROFILE_FAILURE:
    case UPDATE_PROFILE_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default profileReducer;
