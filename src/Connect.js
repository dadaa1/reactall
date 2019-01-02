import { connect } from 'react-redux';
import { add, deleteItem, update } from './action';
import App from './App';

export default connect(
  function mapStateToProps(state) {
    return { list: state };
  },
  function mapDispatchToProps(dispatch) {
    return {
      add: item => dispatch(add(item)),
      deleteItem: item => dispatch(deleteItem(item)),
      update: (item, old) => dispatch(update(item, old))
    };
  }
)(App);
