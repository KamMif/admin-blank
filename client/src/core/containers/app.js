import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import App from '../components/app';
import { signOut } from '../../store/ducks/ui/user';
import userSelector from '../../store/selectors/userSelector';

const mapStateToProps = (state) => {
  const userData = userSelector(state);
  return {
    isAuthorized: userData.isAuthorized,
    isLoading: userData.isLoading,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({
  onSignOutClick: signOut,
}, dispatch);

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
