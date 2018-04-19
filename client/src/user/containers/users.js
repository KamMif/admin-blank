import { connect } from 'react-redux';
import Users from '../components/users';
import usersSelector from '../../store/selectors/usersSelector';
import { RETRIEVE_LIST, DELETE } from '../../store/sagas/users';
import { ASK_QUESTION } from '../../store/sagas/dialog';

const mapStateToProps = (state) => {
  const users = usersSelector(state);
  return {
    users: users.get('list').toList().toJS(),
    hasMoreUsers: users.get('hasMore'),
    isLoading: users.get('isLoading'),
  };
};

const actionCreators = {
  onDataRequest: () => ({ type: RETRIEVE_LIST }),
  onDeleteUser: userId => ({
    type: ASK_QUESTION,
    title: 'Delete user',
    question: 'Are you sure you want to delete this user?',
    action: {
      type: DELETE,
      userId,
    },
  }),
};

export default connect(mapStateToProps, actionCreators)(Users);
