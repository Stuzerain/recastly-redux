import { combineReducers } from 'redux';
import currentVideo from './currentVideo.js';
import videoList from './videoList.js';


// unsure if this is actually necessary...
// var defaultState = {
//   videoList: [],
//   currentVideo: null
// }

var rootReducer = combineReducers({
  // defaultState,   see above
  videoList: videoList,
  currentVideo: currentVideo
});


//HINT: you'll need to combine the other two reducers in this
//  app into a single reducer using the 'combineReducers' method
//  listed above.

export default rootReducer;
