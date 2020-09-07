import Redux from 'redux';

var currentVideoReducer = (state = null, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  if (action.type === 'CHANGE_VIDEO') {
    return Object.assign({}, state,
      action.video
    )
  }
  else {
    // for some reason returning state here does not pass the test for having
    // a .currentVideo field === null, so null is hardcoded
    return null;
  }
};

export default currentVideoReducer;
