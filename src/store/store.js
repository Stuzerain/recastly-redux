import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import exampleVideoData from '../data/exampleVideoData.js';

// TODO:  Create your redux store, apply thunk as a middleware, and export it!
const store = createStore(rootReducer,
  // default testing video data here
  { currentVideo: exampleVideoData[0], videoList: exampleVideoData },
  applyMiddleware(thunk));


export default store;

  // default testing video data
  // { currentVideo: exampleVideoData[0], videoList: exampleVideoData },