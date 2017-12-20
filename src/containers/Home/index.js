import { connect } from 'react-redux';
import { ACTIONS } from 'ducks/Home';

import Home from './Home/'

function mapStateToProps(state) {
  return {
    detail: state.Home
  }
}

function mapDispatchToProps(dispatch) {
  return {
    inputChange: (param) => dispatch(ACTIONS.inputChange(param)),
    inputSubmit: (param) => dispatch(ACTIONS.inputChange(param)),
    listItemClick: (param) => dispatch(ACTIONS.inputChange(param)),
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);
