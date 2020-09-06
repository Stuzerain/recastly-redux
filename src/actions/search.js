import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
import thunk from 'redux-thunk';

var updateKey = (result) => {
  return {
    type: 'SEARCH',
    videos: result
  }
}


var handleVideoSearch = (q) => {

  //TODO:  Write an asynchronous action to handle a video search!
  return function (dispatch) {
    searchYouTube({ q: q, key: YOUTUBE_API_KEY }, (result) => { dispatch(updateKey(result)) });
  }

};

export default handleVideoSearch;

