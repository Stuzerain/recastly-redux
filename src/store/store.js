import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import exampleVideoData from '../data/exampleVideoData.js';
import { composeWithDevTools } from "redux-devtools-extension";

// TODO:  Create your redux store, apply thunk as a middleware, and export it!
const middlewareEnhancer = applyMiddleware(thunkMiddleware);
const composedEnhancers = composeWithDevTools(middlewareEnhancer);

const defaultState = { currentVideo: exampleVideoData[0], videoList: exampleVideoData }

const store = createStore(rootReducer,
  defaultState,
  composedEnhancers);


export default store;

  // default testing video data
  // { currentVideo: exampleVideoData[0], videoList: exampleVideoData },