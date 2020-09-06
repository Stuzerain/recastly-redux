import Redux from 'redux';

var sampleData = [];

var videoListReducer = (state = sampleData, action) => {
  //TODO: define a reducer for the videoList field of our state.
  if (action.type === 'CHANGE_VIDEO_LIST') {
    var vidArr = [];
    action.videos.map((video) => vidArr.push(video))
    return vidArr;
    // return Object.assign({}, state,
    //   action.videos
    // )
  }
  else {
    return state;
  }
};

export default videoListReducer;
