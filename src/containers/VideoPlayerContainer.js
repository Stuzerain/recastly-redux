import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';

// In this case we only want to worry about state, since the main video player
// simply sits as an embedded video. There shouldn't be any need for a dispatch
// because interacting with the *other* components is what affects this
var mapStateToProps = (state) => ({
  video: state.currentVideo
});

var VideoPlayerContainer = connect(mapStateToProps, null)(VideoPlayer);

//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.

export default VideoPlayerContainer;
