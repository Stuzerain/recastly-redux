import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';

// VideoList is also concerned with state, as the VideoList that is rendered by App is the same VideoList in state. Therefore we need a mapStateToProps, per Redux docs
var mapStateToProps = (state) => ({
  videos: state.videoList
});

// same idea for mapDispatchToProps as SearchContainer
var mapDispatchToProps = (dispatch) => ({
  // prop called handleVideoListEntryTitleClick per spec
  handleVideoListEntryTitleClick: (video) => {
    dispatch(changeVideo(video));
  }
});

var VideoListContainer = connect(mapStateToProps, mapDispatchToProps)(VideoList);

//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.

export default VideoListContainer;
