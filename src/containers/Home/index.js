import { connect } from 'react-redux';
import { ACTIONS } from 'ducks/Home';

import Home from './Home/'

function mapStateToProps(state) {
  return {
    Home: state.Home
  }
}

function mapDispatchToProps(dispatch) {
  return {
    inputChange: (value) => dispatch(ACTIONS.inputChange(value))
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);
