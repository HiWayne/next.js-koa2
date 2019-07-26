import { createStore, combineReducers } from "redux";

const initialState = {
  aboutText: "",
  contentList: []
};

// actions
const actionTypes = {
  TEXT: "TEXT",
  ADDLIST: "ADDLIST",
  REMOVELIST: "REMOVELIST",
  CHANGELIST: "CHANGELIST"
};

// create action function
const changeText = text => {
  return {
    type: actionTypes.TEXT,
    text
  };
};
const addList = value => {
  return {
    type: actionTypes.ADDLIST,
    value
  };
};
const removeList = index => {
  return {
    type: actionTypes.REMOVELIST,
    index
  };
};
const changeList = (index, value) => {
  return {
    type: actionTypes.CHANGELIST,
    index,
    value
  };
};

// reducers
const aboutText = (state = "", action) => {
  switch (action.type) {
    case actionTypes.TEXT:
      return action.text;
    default:
      return state;
  }
};
const contentList = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADDLIST:
      return [...state, action.value];
    case actionTypes.REMOVELIST:
      return state.map((item, index) =>
        index === action.index ? undefined : item
      );
    case actionTypes.CHANGELIST:
      return state.map((item, index) =>
        index === action.index ? action.value : item
      );
    default:
      return state;
  }
};

// mapToProps
export const mapStateToAboutProps = state => {
  return {
    text: state.aboutText
  };
};
export const mapDispatchToAboutProps = dispatch => {
  return {
    changeText: text => {
      dispatch(changeText(text));
    }
  };
};
export const mapStateToContentProps = state => {
  return {
    list: state.contentList
  };
};
export const mapDispatchToContentProps = dispatch => {
  return {
    addList: value => {
      dispatch(addList(value));
    },
    removeList: index => {
      dispatch(removeList(index));
    },
    changeList: (index, value) => {
      dispatch(changeList(index, value));
    }
  };
};

// createStore function
export default function initializeStore(initial = initialState) {
  return createStore(
    combineReducers({
      aboutText,
      contentList
    })
  );
}
